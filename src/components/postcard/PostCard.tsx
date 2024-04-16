import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  HeartFilledIcon,
} from '@radix-ui/react-icons';
export interface PostCardProps {
  title: string;
  subTitle: string;
  date: string;
  userName: string;
  category?: string;
  commentCount?: number;
}

export default function PostCard({
  title,
  subTitle,
  date,
  userName = '김호준',
  commentCount = 5,
  category = 'React',
}: PostCardProps) {
  const test = true;
  return (
    <div className="flex flex-col hover:translate-y-[-12px] rounded-[4px] shadow-md transition-all overflow-hidden aspect-postCard">
      <Link className="relative w-full h-0 pb-[48%]" href={''}>
        <Image
          src="/post-thumbnail.jpeg"
          layout="fill"
          alt="post-thumbnail"
          objectFit="cover"
          className="rounded-lg rounded-b-none"
        />
      </Link>
      <div className="flex flex-col flex-1">
        <p className="text-emerald-500 font-semibold text-lg px-4 py-2">
          {category}
        </p>
        <h2 className="font-semibold text-2xl px-4">{title}</h2>
        <div className="basis-0 grow mt-2 break-all px-4 text-gray-400 overflow-hidden">
          {subTitle}
        </div>
        <div className="px-4 py-2 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            {date} {`${commentCount}개의 댓글`}
          </p>
          {/* <BookmarkIcon className="w-[1.5rem] h-[1.5rem]" /> */}
          <BookmarkFilledIcon className="w-[1.5rem] h-[1.5rem]" />
        </div>
        <Separator />
        <div className="mt-auto flex px-4 py-2 items-center">
          <div className="rounded-full h-5 w-5 bg-black mr-2"></div>
          <span className="text-gray-400 font-light mr-[2px]">by</span>
          <span>{userName}</span>
          <HeartFilledIcon className="w-[1.4rem] h-[1.4rem] ml-auto" />
        </div>
      </div>
    </div>
  );
}
