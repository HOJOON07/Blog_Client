'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Icon,
  Skeleton,
} from '@/shared';
export const ProfilesSection = () => {
  return (
    <section className="flex flex-col w-[280px]">
      <div>
        <Avatar className="w-[280px] h-[280px] mb-4">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="w-[240px] h-[240px] rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-2 items-baseline mb-2">
        <span className="text-2xl font-semibold">김호준</span>
        <span className="text-zinc-500 text-[14px] font-medium gap-2">
          FrontEnd
        </span>
      </div>
      <p className="text-zinc-500 text-[14px] font-medium mb-3">
        <Icon
          name="userGroup"
          className="inline mr-2"
          size={6}
          color="text-zinc-500"
        />
        24 팔로워 · 20 팔로잉
      </p>
      <p className="text-zinc-500 text-[14px] font-medium items-center flex mb-3">
        <Icon
          name="locationPin"
          color="text-zinc-500"
          className="mr-2"
          size={6}
        />
        Seoul
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
