'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Icon,
  Skeleton,
} from '@/shared';
import { UserProfileType } from '@/widgets/profiles';
import { SocialIcons } from './profile-social-icons';
import { useUserState } from '@/app/_store/useUserState';
import { useRouter } from 'next/navigation';

interface ProfileSectionProps {
  user: UserProfileType;
}

export const ProfileSection = ({ user }: ProfileSectionProps) => {
  const router = useRouter();
  const { user: myInfo } = useUserState();
  const socials = {
    github: user?.github,
    instagram: user?.instagram,
    linkedin: user?.linkedin,
    socialEmail: user?.email,
    socialLink: user?.socialEtc,
  };

  return (
    <section className="flex flex-col w-[280px]">
      <div>
        <Avatar className="w-[280px] h-[280px] mb-4`">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="w-[240px] h-[240px] rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-2 items-baseline mb-1">
        <span className="text-2xl font-semibold">{user?.devName}</span>
        <span className="text-slate-600 text-[14px] font-medium gap-2">
          {user?.position ?? '포지션을 입력해주세요'}
        </span>
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <p className="text-zinc-400 text-[14px] font-medium">
          <Icon
            name="userGroup"
            className="inline mr-2"
            size={4}
            color="text-zinc-400"
          />
          {'24 팔로워 · 20 팔로잉'}
        </p>
        <p className="text-zinc-400 text-[14px] font-medium items-center flex">
          <Icon
            name="locationPin"
            color="text-zinc-400"
            className="mr-2"
            size={4}
          />
          {user?.location ?? '거주지'}
        </p>
      </div>
      <p className="text-base font-medium mb-2 line-clamp-1 text-ellipsis">
        {user?.bio ?? `${user?.devName}님을 한 줄로 표현해주세요`}
      </p>

      {user?.devName === myInfo?.devName ? (
        <Button
          className="w-full rounded-[6px] mb-4"
          onClick={() => {
            router.push(`/profiles/edit/${myInfo?.devName}`);
          }}
        >
          프로필 수정
        </Button>
      ) : (
        <Button className="w-full rounded-[6px] mb-4">팔로우</Button>
      )}

      <SocialIcons socials={socials} />
    </section>
  );
};
