'use client';
import { useUserStore } from '@/app/_store/user-store';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Icon,
  Skeleton,
} from '@/shared';

import { getUserInfo } from '@/shared/api/get-user-info-api';
import { useQuery } from '@tanstack/react-query';
import { useUserState } from '../../lib/useUserSate';

export const ProfileSection = () => {
  // const { user } = useUserStore();
  const { data: user } = useUserState();
  console.log(user);
  // console.log(data);

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
          FrontEnd
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
          24 팔로워 · 20 팔로잉
        </p>
        <p className="text-zinc-400 text-[14px] font-medium items-center flex">
          <Icon
            name="locationPin"
            color="text-zinc-400"
            className="mr-2"
            size={4}
          />
          Seoul
        </p>
      </div>
      <p className="text-base font-medium mb-2 line-clamp-1 text-ellipsis">
        프론트엔드 개발자 김호준입니다.
      </p>
      <Button className="w-full rounded-[6px] mb-4">프로필 수정</Button>
      <div className="flex gap-2">
        <Button size="smallIcon" variant="secondary" className="rounded-sm">
          <Icon
            name="github"
            href="https://github.com/HOJOON07"
            color="text-zinc-500"
            size={5}
          />
        </Button>
        <Button size="smallIcon" variant="secondary" className="rounded-sm">
          <Icon
            name="instagram"
            href="https://www.instagram.com/hzoxjcnv/"
            color="text-zinc-500"
            size={5}
          />
        </Button>
        <Button size="smallIcon" variant="secondary" className="rounded-sm">
          <Icon
            name="linkedin"
            href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
            color="text-zinc-500"
            size={5}
          />
        </Button>
      </div>
    </section>
  );
};
