import { Icon, Separator } from '@/shared';
import Link from 'next/link';
import Image from 'next/image';
import { UserPublicArticleType } from '../../model/get-user-articles-api.type';
import { format } from 'date-fns';

export const ArticleItems = ({
  article,
}: {
  article: UserPublicArticleType;
}) => {
  const { author, title, commentCount, createdAt, description, thumbnails } =
    article;
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-[1fr_192px] gap-4 flex-1">
        <div className="relative">
          <div className="mb-3">
            <p className="mb-2 text-xl font-bold">{title}</p>
            <p className="text-zinc-400 font-light text-base leading-6 break-all line-clamp-2 text-ellipsis min-h-[52px]">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-auto bottom-0 absolute w-full">
            <Icon name="star" size={4} color="text-zinc-400" />
            <span className="text-zinc-400 text-[12px] font-medium mr-4">
              10
            </span>
            <Icon name="comments" size={3} color="text-zinc-400" />
            <span className="text-zinc-400 text-[12px] font-medium mr-4">
              {commentCount}
            </span>
            <span className="text-zinc-400 text-[12px] font-medium ml-auto">
              {format(createdAt, 'yyyy년 MM월 dd일')}
            </span>
          </div>
        </div>
        <Link href={''} className="shrink-0 relative w-48 h-28 rounded-md">
          <Image
            src={thumbnails[0] ?? '/post-thumbnail.jpeg'}
            alt="post-thumbnail"
            className="absolute inset-0 w-full h-full rounded-md"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Separator className="bg-primary/40" />
    </div>
  );
};
