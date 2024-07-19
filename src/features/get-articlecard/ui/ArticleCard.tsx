import { Avatar, AvatarFallback, AvatarImage, Icon, Skeleton } from '@/shared';
import { BookmarkFilledIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const DEFAULT_THUMBNAIL_SRC = '/post-thumbnail.jpeg';

export interface ArticleCardProps {
  author: {
    avatarImage: string;
    devName: string;
    location: string;
    position: string;
  };
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  thumbnails?: string[];
}

export const ArticleCard = ({
  author,
  title,
  description,
  likeCount,
  commentCount,
  createdAt,
  thumbnails,
}: ArticleCardProps) => {
  const thunbnailSrc =
    thumbnails && thumbnails.length > 0 ? thumbnails[0] : DEFAULT_THUMBNAIL_SRC;

  return (
    <div className="flex flex-col relative bg-background rounded-[10px] aspect-articleCard z-10">
      <div className="flex items-center w-full h-14">
        <Avatar className="w-8 h-8 mr-[10px]">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-8 w-8 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white text-sm font-medium">{author.devName}</p>
          <p className="text-zinc-500 text-[10px] font-medium">
            {author.position}, {author.location}
          </p>
        </div>
        <Icon name="dots" className="ml-auto" />
      </div>
      <Link href={''} className="relative w-full h-0 pb-[50%] overflow-hidden">
        <Image
          fill
          src={thunbnailSrc}
          alt="post-thumbnail"
          sizes="300px"
          priority
        />
      </Link>
      <div className="flex items-center text-white text-[18px] font-medium pt-2 pb-1 mt-1">
        {title}
      </div>
      <div className="flex text-sm font-light text-zinc-300 flex-1 break-all text-ellipsis line-clamp-2">
        {description}
      </div>
      <div className="mb-auto flex items-center gap-1 h-8 my-2">
        <Icon name="star" size={5} color="text-neutral-700" />
        <span className="text-zinc-500 text-[12px] font-medium">
          {likeCount}
        </span>
        <Icon name="comments" size={4} color="text-neutral-700" />
        <span className="text-zinc-500 text-[12px] font-medium">
          {commentCount}
        </span>
        <span className="text-zinc-500 text-[12px] font-medium ml-auto">
          {format(createdAt, 'yyyy년 MM월 dd일')}
        </span>
        <BookmarkFilledIcon className="text-neutral-700 w-[20px] h-[20px]" />
      </div>
    </div>
  );
};
