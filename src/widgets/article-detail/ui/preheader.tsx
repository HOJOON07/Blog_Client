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
    <div className="sticky h-4 right-0 top-0 mx-auto px-6">
      <div className="flex items-end w-full h-14 mt-6">
        <Avatar className="w-14 h-14 mr-5">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-8 w-8 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1">
          <div>
            <span className="text-white text-2xl font-medium mr-2">
              Kim Ho Joon
            </span>
            <span className="text-zinc-500 text-[10px] font-medium">
              FrontEnd, Seoul
            </span>
          </div>
          <div className="flex items-center">
            <p className="text-zinc-500 text-[12px] font-medium mr-11">
              24 팔로워 · 20 팔로잉
            </p>
            <div className="items-center gap-3 flex h-full">
              <Icon
                name="github"
                href="https://github.com/HOJOON07"
                color="text-zinc-500"
              />
              <Icon
                name="instagram"
                href="https://www.instagram.com/hzoxjcnv/"
                color="text-zinc-500"
              />
              <Icon
                name="linkedin"
                href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
                color="text-zinc-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt
        deleniti, ipsum sed sint nostrum similique at tempore. Sed porro eum,
        fugiat commodi nemo atque numquam cumque iste cupiditate molestiae.
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="secondary" className="rounded-[4px]">
          팔로잉
        </Button>
        <Button variant="secondary" className="rounded-[4px]">
          채팅하기
        </Button>
      </div>
      <h2 className="text-2xl my-4 text-slate-600">More Articles</h2>
      <RelatedArticles />
    </div>
  );
};
