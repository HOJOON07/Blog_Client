'use client';
import {
  CreateArticleFormData,
  CreateArticleSchema,
} from '@/features/write-editor/model/create-article-schema';
import { useCreateArticleMutation } from '@/features/write-editor/tanstack-query/useCreateArticleMutation';
// import { useEditorValue } from '@/app/_store/editorValue';
import { Button, Icon, Switch, cn } from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditorState } from '@udecode/plate-common';
import Image from 'next/image';
import React, { EventHandler, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  DetailArticleFormData,
  DetailArticleSchema,
} from '../../model/detail-settting-from-schema';
import { useWorkspaceArticleEditMutation } from '../../tanstack-query/useWorkspaceArticleEditMutation';
import { useParams } from 'next/navigation';

type isPrivateType = 'private' | 'open';
type isPublishType = 'publish' | 'temporary';

export const DetailSetting = ({
  title,
  description,
  isPrivate,
  isPublish,
  articleImage,
}: {
  title?: string;
  description?: string;
  isPrivate?: isPrivateType;
  isPublish?: isPublishType;
  articleImage?: string;
}) => {
  const editor = useEditorState();
  const thunbnailSrc =
    articleImage &&
    `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${articleImage}`;

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isPrivateState, setIsPrivateState] = useState<
    isPrivateType | undefined
  >(isPrivate);
  const [isPublishState, setIsPublishState] = useState<
    isPublishType | undefined
  >(isPublish);
  const thumbnailsRef = useRef<HTMLInputElement>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>();
  const { articleId } = useParams<{ articleId: string }>();
  const { editWorkspaceArticle } = useWorkspaceArticleEditMutation(
    parseInt(articleId),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailArticleFormData>({
    resolver: zodResolver(DetailArticleSchema),
    defaultValues: {
      title,
      description,
    },
  });

  const onSubmit: SubmitHandler<DetailArticleFormData> = async (
    formData,
    event,
  ) => {
    const submitEvent = event as unknown as React.BaseSyntheticEvent & {
      nativeEvent: SubmitEvent;
    };
    const { name } = submitEvent.nativeEvent.submitter as HTMLButtonElement;
    const { title, description } = formData;

    let publish: isPublishType = 'publish';

    if (name === 'temporary') {
      publish = 'temporary';
    } else if (name === 'publish') {
      publish = 'publish';
    }

    // const isPublish = name === 'publish';
    // const isPrivateState = isPrivate ? 'private' : 'open';
    // const isPublishState = isPublish ? 'publish' : 'temporary';

    editWorkspaceArticle({
      articleId: parseInt(articleId),
      profileEditData: {
        title,
        description,
        contents: editor.children,
        isPrivate: isPrivateState as isPrivateType,
        isPublish: publish,
      },
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
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[330px] px-5 py-3 right-0 top-0 sticky h-screen flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <p className="w-full mb-5 text-primary">미리보기</p>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-solid border rounded-lg cursor-pointer hover:bg-zinc-900 relative"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {thunbnailSrc ? (
                  <Image src={thunbnailSrc} alt="썸네일 미리보기" fill />
                ) : thumbnailPreview ? (
                  <Image src={thumbnailPreview} alt="썸네일 미리보기" fill />
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
