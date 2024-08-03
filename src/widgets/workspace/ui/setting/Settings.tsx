'use client';
import {
  CreateArticleFormData,
  CreateArticleSchema,
} from '@/features/write-editor/model/create-article-schema';
import {
  isPrivateType,
  isPublishType,
} from '@/features/write-editor/model/create-article-type';
import { useCreateArticleMutation } from '@/features/write-editor/tanstack-query/useCreateArticleMutation';
// import { useEditorValue } from '@/app/_store/editorValue';
import { Button, Icon, Switch, cn } from '@/shared';
import { formDataType } from '@/shared/api/aws-s3-file-upload';
import { useS3FileUploadMutation } from '@/shared/tanstack-query/useS3fileUploadMutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditorMounted, useEditorState } from '@udecode/plate-common';
import { FileSpreadsheet } from 'lucide-react';
import Image from 'next/image';
import React, { EventHandler, useEffect, useRef, useState } from 'react';
import { EventType, SubmitHandler, useForm } from 'react-hook-form';

export const Settings = () => {
  const editor = useEditorState();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isPrivateState, setIsPrivateState] =
    useState<isPrivateType>('private');
  const thumbnailsRef = useRef<HTMLInputElement>(null);
  const [thumbnailPreiew, setThumbnailPreview] = useState<string | null>();
  const [profilesImageFileToS3, setProfilesImageFileToS3] =
    useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const { createArticleMutation } = useCreateArticleMutation();
  const { fileUpladMutaion, uploadedFileData } = useS3FileUploadMutation();

  console.log(uploadedFileData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticleFormData>({
    resolver: zodResolver(CreateArticleSchema),
  });

  const onSubmit: SubmitHandler<CreateArticleFormData> = async (
    formData,
    event,
  ) => {
    const submitEvent = event as unknown as React.BaseSyntheticEvent & {
      nativeEvent: SubmitEvent;
    };
    const { name } = submitEvent.nativeEvent.submitter as HTMLButtonElement;
    const { title, description } = formData;
    const articleImage = uploadedFileData?.key;

    let publish: isPublishType = 'temporary';

    if (name === 'temporary') {
      publish = 'temporary';
    } else if (name === 'publish') {
      publish = 'publish';
    }

    console.log(articleImage, '서브밋 핸들러 이미지');
    console.log(uploadedFileData, '서브밋 핸들러 폼 데이터');
    createArticleMutation({
      title,
      contents: editor.children,
      description,
      isPrivate: isPrivateState,
      isPublish: publish,
      articleImage,
    });
  };

  const handleThumbnailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setThumbnailPreview(fileReader.result);
          setProfilesImageFileToS3(file);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const uploadImageToS3 = async (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();

    if (!profilesImageFileToS3) {
      return;
    }
    const formData: formDataType = {
      file: profilesImageFileToS3,
      isPublic: 'true',
      type: 'article',
    };

    try {
      setUploading(true);
      fileUpladMutaion(formData);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-[330px] px-5 py-3 right-0 top-0 sticky h-screen flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-between">
            <p className="mb-5 text-primary">미리보기</p>
            {profilesImageFileToS3 && (
              <p
                className="mb-5 text-cyan-400 underline underline-offset-4 cursor-pointer"
                onClick={uploadImageToS3}
              >
                업로드
              </p>
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-solid border rounded-lg cursor-pointer hover:bg-zinc-900 relative"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {thumbnailPreiew ? (
                  <Image
                    src={thumbnailPreiew}
                    alt="썸네일 미리보기"
                    fill
                    objectFit="contain"
                  />
                ) : (
                  <Icon name="document" color="text-zinc-400" />
                )}
              </div>
              <input
                ref={thumbnailsRef}
                id="dropzone-file"
                type="file"
                className="hidden border-none outline-none"
                onChange={handleThumbnailsChange}
              />
            </label>
          </div>
        </div>
        <div className="flex mt-5 justify-between">
          <p>공개 여부</p>
          <Switch
            checked={isPrivateState === 'open' ? true : false}
            onClick={() =>
              setIsPrivateState(isPrivateState === 'open' ? 'private' : 'open')
            }
          />
        </div>
        <div className="flex mt-5 justify-between">
          <p>제목</p>
        </div>
        <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
          <input
            {...register('title', {
              required: true,
            })}
            className="outline-none border-none bg-transparent w-full h-full text-primary"
            placeholder="아티클 제목을 입력해주세요"
          />
        </div>
        <p
          className={cn(
            `text-xs mb-1 ${
              errors.title ? 'text-destructive' : 'text-cyan-600'
            }`,
          )}
        >
          {errors.title && errors.title.message}
        </p>
        <div className="flex justify-between">
          <p>설명</p>
        </div>
        <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
          <input
            {...register('description', {
              required: true,
            })}
            className="outline-none border-none bg-transparent w-full h-full text-primary"
            placeholder="아티클을 설명해주세요"
          />
        </div>
        <p
          className={cn(
            `text-xs mb-1 ${
              errors.description ? 'text-destructive' : 'text-cyan-600'
            }`,
          )}
        >
          {errors.description && errors.description.message}
        </p>
        <div className="flex justify-between">
          <p>태그</p>
        </div>
        <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
          <input
            type="text"
            className="outline-none border-none bg-transparent w-full h-full"
            maxLength={150}
            disabled
            placeholder="태그 입력 기능은 개발중입니다.."
          />
        </div>
        <div className="flex items-center justify-between w-full gap-4 mt-auto mb-4">
          <Button
            name="temporary"
            variant="secondary"
            className="flex-1"
            disabled={isDisabled}
            type="submit"
          >
            임시 저장
          </Button>
          <Button
            variant="default"
            name="publish"
            className="flex-1 text-white font-semibold"
            disabled={isDisabled}
            type="submit"
          >
            작성 하기
          </Button>
        </div>
      </form>
    </div>
  );
};
