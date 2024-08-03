import { Button, Icon } from '@/shared';
import React, { ButtonHTMLAttributes, useRef, useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { useS3FileUploadMutation } from '@/shared/tanstack-query/useS3fileUploadMutation';
import { formDataType } from '@/shared/api/aws-s3-file-upload';

interface ProfilesImageProps {
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  bio: string | null;
  devName: string | null;
  image: string | null;
}

export const ProfilesImage = ({
  bio,
  devName,
  uploading,
  setUploading,
  image,
}: ProfilesImageProps) => {
  const imageSrc = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${image}`;
  const [profilesImageFileToS3, setProfilesImageFileToS3] =
    useState<File | null>(null);
  const profilesImageRef = useRef<HTMLInputElement>(null);
  const [profilesImagePreview, setProfilesImagePreview] = useState<
    string | null
  >(image && imageSrc);

  const { fileUpladMutaion } = useS3FileUploadMutation();

  const handleProfilesImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setProfilesImagePreview(fileReader.result);
          setProfilesImageFileToS3(file);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const uploadImageToS3 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!profilesImageFileToS3) {
      return;
    }
    const formData: formDataType = {
      file: profilesImageFileToS3,
      isPublic: 'true',
      type: 'profile',
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
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-20 h-20 rounded-full">
        <label
          htmlFor="profile-user-image"
          className="flex flex-col items-center justify-center w-full h-full border-solid border rounded-full cursor-pointer bg-zinc-900 relative"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {profilesImagePreview ? (
              <Image
                className="w-full h-full rounded-full"
                src={profilesImagePreview}
                alt="유저 프로필 이미지"
                fill
              />
            ) : (
              <Icon name="user" color="text-zinc-400" size={4} />
            )}
          </div>
          <input
            ref={profilesImageRef}
            onChange={handleProfilesImageChange}
            name="profileImage"
            id="profile-user-image"
            type="file"
            className="hidden border-none outline-none"
          />
        </label>
      </div>
      <div>
        <p className="text-2xl font-semibold leading-8">{devName}</p>
        <p>{bio ?? '한 줄 소개를 입력해주세요'}</p>
      </div>
      {image && profilesImageFileToS3 ? (
        <Button
          className="ml-auto"
          type="button"
          // onClick={uploadImageToS3}
          // disabled={uploading || profilesImageFileToS3 === null}
        >
          삭제
        </Button>
      ) : (
        <Button
          className="ml-auto"
          type="button"
          onClick={uploadImageToS3}
          disabled={uploading || profilesImageFileToS3 === null}
        >
          업로드
        </Button>
      )}
      {/* <Button
        className="ml-auto"
        type="button"
        onClick={uploadImageToS3}
        disabled={uploading || profilesImageFileToS3 === null}
      >
        업로드
      </Button> */}
    </div>
  );
};
