'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Icon,
  Skeleton,
} from '@/shared';
import { RelatedArticles } from './user-related-articles';

export const ArticleUserInfo = () => {
  return (
    <div className="w-[400px] fixed right-0 top-[72px] mx-auto px-6 flex flex-col items-center h-screen overflow-auto">
      <Avatar className="w-20 h-20 mb-4">
        <AvatarImage src="/avatar.jpeg" alt="avatar" />
        <AvatarFallback>
          <Skeleton className="h-8 w-8 rounded-full" />
        </AvatarFallback>
      </Avatar>
      <p className="text-white text-2xl font-medium mb-2">Kim Ho Joon</p>
      <div className="text-zinc-500 text-[12px] font-medium flex gap-2 mb-3">
        FrontEnd, Seoul
        <Icon name="locationPin" color="text-zinc-500" size={4} />
      </div>
      <div className="w-full flex justify-center gap-10">
        <Icon
          name="github"
          href="https://github.com/HOJOON07"
          color="text-zinc-500"
          size={6}
        />
        <Icon
          name="instagram"
          href="https://www.instagram.com/hzoxjcnv/"
          color="text-zinc-500"
          size={6}
        />
        <Icon
          name="linkedin"
          href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
          color="text-zinc-500"
          size={6}
        />
      </div>
      <div className="mt-5 mb-4 w-full flex justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt
          deleniti, ipsum sed sint nostrum similique at tempore. Sed porro eum,
          fugiat commodi nemo atque numquam cumque iste cupiditate molestiae.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        <Button variant="secondary" className="rounded-[4px]">
          팔로잉
        </Button>
        <Button variant="secondary" className="rounded-[4px]">
          채팅하기
        </Button>
      </div>
      <div className="flex justify-start w-full">
        <h2 className="text-2xl my-4 text-slate-600">More Articles</h2>
      </div>
      <RelatedArticles />
    </div>
  );
};
