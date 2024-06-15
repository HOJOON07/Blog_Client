import { Avatar, AvatarFallback, AvatarImage, Icon, Skeleton } from '@/shared';
import { BookmarkFilledIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export const ArticleCard = () => {
  return (
    <div className="flex flex-col w-[340px] h-[360px] relative bg-zinc-900 rounded-[10px] shadow border border-zinc-800">
      <div className="flex items-center w-full h-14 px-4">
        <Avatar className="w-8 h-8 mr-[10px]">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-8 w-8 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white text-sm font-medium">HoJoon Kim</p>
          <p className="text-zinc-500 text-[10px] font-medium">
            FrontEnd, Seoul
          </p>
        </div>
        <Icon name="dots" className="ml-auto" />
      </div>
      <Link href={''} className="w-full h-[190px] overflow-hidden relative">
        <Image fill src="/post-thumbnail.jpeg" alt="post-thumbnail" />
      </Link>
      <div className="flex items-center text-white text-[18px] font-medium px-4 pt-2 pb-1">
        이건 아티클 제목입니다.
      </div>
      <div className="flex px-4 text-sm pb-2 font-light text-zinc-300 flex-1 break-all text-ellipsis line-clamp-2">
        이건 본문 설명 부분입니다.이건 본문 설명 부분입니다.이건 본문 설명
        부분입니다.이건 본문 설명 부분입니다.
      </div>
      <div className="mb-auto flex items-center px-4 gap-1 h-8">
        <HeartFilledIcon className="w-[19px] h-[19px] text-neutral-700" />
        <span className="text-zinc-500 text-[12px] font-medium">10</span>
        <Icon name="comments" size={4} />
        <span className="text-zinc-500 text-[12px] font-medium">10</span>
        <span className="text-zinc-500 text-[12px] font-medium ml-auto">
          2024년 6월 13일
        </span>
        <BookmarkFilledIcon className="text-neutral-700 w-[20px] h-[20px]" />
      </div>
    </div>
  );
};
