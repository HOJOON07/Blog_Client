import { Button, Icon } from '@/shared';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

interface ProfilesImageProps {
  profilesImageFileToS3: File | null;
  setProfilesImageFileToS3: React.Dispatch<React.SetStateAction<File | null>>;
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  bio: string | null;
  devName: string | null;
}

// 'https://devworld-bucket-seoul-hojoon.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%92%E1%85%A9%E1%84%8C%E1%85%AE%E1%86%AB.jpg',

export const ProfilesImage = ({
  profilesImageFileToS3,
  setProfilesImageFileToS3,
  bio,
  devName,
  uploading,
  setUploading,
}: ProfilesImageProps) => {
  const Bucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;
  const s3 = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });
  const profilesImageRef = useRef<HTMLInputElement>(null);
  const [profilesImagePreview, setProfilesImagePreview] = useState<
    string | null
  >();

  console.log(profilesImageFileToS3);

  const handleProfilesImageChange = (
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

  // const uploadImageToS3 = async (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   if (!profilesImageFileToS3) {
  //     return;
  //   }

  //   setUploading(true);

  //   const response = await fetch('http://localhost:3000/api/s3-upload', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       filename: profilesImageFileToS3.name,
  //       contentType: profilesImageFileToS3.type,
  //     }),
  //   });
  //   if (response.ok) {
  //     const { url, fields } = await response.json();

  //     console.log(url, fields, '!!');
  //     const formData = new FormData();
  //     Object.entries(fields).forEach(([key, value]) => {
  //       formData.append(key, value as string);
  //     });
  //     formData.append('file', profilesImageFileToS3);

  //     const uploadResponse = await fetch(url, {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (uploadResponse.ok) {
  //       alert('Upload successful!');
  //     } else {
  //       console.error('S3 Upload Error:', uploadResponse);
  //       alert('Upload failed.');
  //     }
  //   } else {
  //     alert('Failed to get pre-signed URL.');
  //   }
  //   setUploading(false);
  // };
  const uploadImageToS3 = async (e: any) => {
    if (!profilesImageFileToS3) return;
    e.preventDefault();
    // 확장자 만들고 
    const ext = profilesImageFileToS3?.name.split('.').at(-1);
    // uuid넣어주고.
    const uid = uuidv4().replace(/-/g, '');
    const fileName = `${uid}${ext ? '.' + ext : ''}`;

    try {
      const uploadToS3 = new PutObjectCommand({
        Bucket,
        Key: fileName,
        Body: profilesImageFileToS3,
        ContentDisposition: 'inline',
        ContentType: profilesImageFileToS3.type,
      });
      await s3.send(uploadToS3);
    } catch (error) {
      console.error(error);
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
                src={
                  // 'https://devworld-bucket-seoul-hojoon.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%92%E1%85%A9%E1%84%8C%E1%85%AE%E1%86%AB.jpg'
                  profilesImagePreview
                }
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
      <Button
        className="ml-auto"
        type="button"
        onClick={uploadImageToS3}
        disabled={uploading}
      >
        업로드
      </Button>
    </div>
  );
};
