'use client';
import { Button, Icon } from '@/shared';
import { SocialInfoBox, UserInfoBox } from '@/widgets/profiles';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  ProfileEditFormData,
  ProfilesEditSchema,
} from '../model/profile-edit-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDuplicateMutaion } from '@/widgets/profiles/lib/useDuplicateMutation';
import { useProfileEditMutation } from '@/widgets/profiles/lib/useProfileEditMutaion';
import { MyProfileType } from '../model/my-profile-type';
import { useRef, useState } from 'react';
import Image from 'next/image';

const convertNullToUndefined = (obj: { [key: string]: any }) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value === null ? undefined : value,
    ]),
  );
};

export const ProfileEditForm = ({ user }: { user: MyProfileType }) => {
  const profilesImageRef = useRef<HTMLInputElement>(null);
  const [profilesImagePreview, setProfilesImagePreview] = useState<
    string | null
  >(
    'https://devworld-bucket-seoul-hojoon.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%92%E1%85%A9%E1%84%8C%E1%85%AE%E1%86%AB.jpg',
  );
  const { isDuplicateDevName } = useDuplicateMutaion();
  const { profileEditMutation } = useProfileEditMutation();

  const methods = useForm<ProfileEditFormData>({
    resolver: zodResolver(ProfilesEditSchema),
    defaultValues: convertNullToUndefined({
      devName: user?.devName,
      position: user?.position,
      bio: user?.bio,
      location: user?.location,
      github: user?.github,
      email: user?.email,
      linkedin: user?.linkedin,
      instagram: user?.instagram,
      socialEtc: user?.socialEtc,
    }),
  });
  const onSubmit: SubmitHandler<ProfileEditFormData> = (data) => {
    console.log(data);

    const undefinedToNull = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value ?? null]),
    );

    if (user?.id !== null) {
      profileEditMutation({
        userId: user.id,
        profileEditData: undefinedToNull,
      });
    } else {
      console.error('user id is null');
    }
  };

  const handleProfilesImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setProfilesImagePreview(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-7"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-4">
          {/* 유저 프로필 이미지 */}
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
                      'https://devworld-bucket-seoul-hojoon.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%92%E1%85%A9%E1%84%8C%E1%85%AE%E1%86%AB.jpg'
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
          {/* 유저 이름, 한 줄 설명 */}
          <div>
            <p className="text-2xl font-semibold leading-8">{user?.devName}</p>
            <p>{user?.bio ?? '한 줄 소개를 입력해주세요'}</p>
          </div>
          <Button className="ml-auto" type="submit">
            수정 완료
          </Button>
        </div>
        <UserInfoBox
          name="devName"
          placeholder="DevWorld ID"
          title="데브월드 이름"
          mutedText="DevWorld 에서 보여지는 이름입니다."
        >
          <Button
            className="ml-auto"
            variant="secondary"
            type="button"
            onClick={() => {
              const value = methods.getValues('devName');
              isDuplicateDevName(value);
            }}
          >
            중복 확인
          </Button>
        </UserInfoBox>
        <UserInfoBox
          name="position"
          placeholder="포지션"
          title="포지션"
          mutedText="DevWorld 에서 보여지는 포지션입니다."
        />
        <UserInfoBox
          name="bio"
          placeholder="저는 프론트엔드 개발자 김호준입니다."
          title="한 줄 소개"
          mutedText="당신을 한 줄로 소개하는 내용을 적어주세요."
        />
        <UserInfoBox
          name="location"
          placeholder="Seoul"
          title="거주지"
          mutedText="거주지 정보를 입력해주세요."
        />
        <div className="flex flex-col gap-3">
          <p className="font-semibold">소셜 정보</p>
          <SocialInfoBox
            name="github"
            icon="github"
            placeholder="깃허브 이름을 알려주세요"
          />
          <SocialInfoBox
            name="email"
            icon="socialEmail"
            placeholder="이메일 주소를 알려주세요"
          />
          <SocialInfoBox
            name="linkedin"
            icon="linkedin"
            placeholder="링크드인 주소를 알려주세요"
          />
          <SocialInfoBox
            name="instagram"
            icon="instagram"
            placeholder="인스타그램 주소를 알려주세요"
          />

          <SocialInfoBox
            name="socialEtc"
            icon="socialLink"
            placeholder="개인 홈페이지, 블로그, 다른 SNS 주소를 알려주세요"
          />
          <p className="text-sm text-muted-foreground">
            소셜 정보를 입력하면 프로필에 표시됩니다.
          </p>
        </div>
      </form>
    </FormProvider>
  );
};
