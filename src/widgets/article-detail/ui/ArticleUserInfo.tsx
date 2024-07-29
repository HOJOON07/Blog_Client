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
import { useGetArticlesAuthorQuery } from '../tanstack-query/useGetArticlesAuthorQuery';
import { useUserState } from '@/app/_store/useUserState';

export const ArticleUserInfo = ({ articleId }: { articleId: string }) => {
  const { article, isError, isLoading } = useGetArticlesAuthorQuery(articleId);
  const { user } = useUserState();

  return (
    <section className="fixed h-screen w-[380px] right-0 px-10">
      <div className="pt-[72px]">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-8 w-8 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div>
            <span className="text-white text-xl font-medium mr-2">
              {article?.author.devName}
            </span>
            <span className="text-zinc-500 text-[12px] font-medium gap-2">
              {article?.author.position ?? 'Position'}
            </span>
          </div>
          <p className="text-zinc-500 text-[12px] font-medium mr-11">
            {/* { 24 "팔로워" · 20 "팔로잉"} */}
            {`${article?.author.followerCount} 팔로워 · ${article?.author.followeeCount} 팔로잉`}
            <Icon
              name="userGroup"
              className="inline ml-2"
              color="text-zinc-500"
            />
          </p>
          <p className="text-zinc-500 text-[12px] font-medium flex gap-2">
            {article?.author.location ?? 'location'}
            <Icon name="locationPin" color="text-zinc-500" size={4} />
          </p>
          <div className="w-full flex mb-5 gap-3">
            <Icon
              name="github"
              href="https://github.com/HOJOON07"
              color="text-zinc-500"
              size={5}
            />
            <Icon
              name="instagram"
              href="https://www.instagram.com/hzoxjcnv/"
              color="text-zinc-500"
              size={5}
            />
            <Icon
              name="linkedin"
              href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
              color="text-zinc-500"
              size={5}
            />
          </div>
        </div>
        {user?.id ? (
          <div className="grid grid-cols-1 w-full mb-11">
            <Button variant="secondary" className="rounded-[4px]">
              프로필 보기
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 w-full mb-11">
            <Button variant="secondary" className="rounded-[4px]">
              팔로우
            </Button>
            <Button variant="secondary" className="rounded-[4px]">
              채팅하기
            </Button>
          </div>
        )}
        <RelatedArticles articles={article?.articles} />
      </div>
    </section>
  );
};
