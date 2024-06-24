import { Avatar, AvatarFallback, AvatarImage, Icon, Skeleton } from '@/shared';
import { BookmarkFilledIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleCardProps {
  user: {
    avatarImage: string;
    name: string;
    addres: string;
    job: string;
  };
  title: string;
  subTitle: string;
  likeCount: number;
  commentCount: number;
  date: string;
}

export const ArticleCard = ({
  user,
  title,
  subTitle,
  likeCount,
  commentCount,
  date,
}: ArticleCardProps) => {
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
          <p className="text-white text-sm font-medium">{user.name}</p>
          <p className="text-zinc-500 text-[10px] font-medium">
            {user.job}, {user.addres}
          </p>
        </div>
        <Icon name="dots" className="ml-auto" />
      </div>
      <Link href={''} className="relative w-full h-0 pb-[50%] overflow-hidden">
        <Image fill src="/post-thumbnail.jpeg" alt="post-thumbnail" />
      </Link>
      <div className="flex items-center text-white text-[18px] font-medium pt-2 pb-1 mt-1">
        {title}
      </div>
      <div className="flex text-sm font-light text-zinc-300 flex-1 break-all text-ellipsis line-clamp-2">
        {subTitle}
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
          {date}
        </span>
        <BookmarkFilledIcon className="text-neutral-700 w-[20px] h-[20px]" />
      </div>
    </div>
  );
};
