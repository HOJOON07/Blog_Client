import { Icon, Separator } from '@/shared';
import Link from 'next/link';
import Image from 'next/image';

export const ArticleItems = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div>
          <div className="mb-3">
            <p className="mb-2 text-xl font-bold">
              프로필 페이지 그만 끝내고 싶다.
            </p>
            <p className="text-zinc-400 font-light text-base leading-6 break-all line-clamp-3 text-ellipsis">
              제발 말줄임좀 되어라제발 말줄임좀 되어라제발 말줄임좀 되어라제발
              말줄임좀 되어라제발 말줄임좀 되어라제발 말줄임좀 되어라제발
              말줄임좀 되어라제발 말줄임좀 되어라제발 말줄임좀 되어라제발
              말줄임좀 되어라제발 말줄임좀 되어라 되어라제발 말줄임좀
              되어라되어라제발 말줄임좀 되어라되어라제발 말줄임좀 되어라
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="star" size={4} color="text-zinc-400" />
            <span className="text-zinc-400 text-[12px] font-medium mr-4">
              10
            </span>
            <Icon name="comments" size={3} color="text-zinc-400" />
            <span className="text-zinc-400 text-[12px] font-medium mr-4">
              10
            </span>
            <span className="text-zinc-400 text-[12px] font-medium ml-auto">
              2024년 6월 22일
            </span>
          </div>
        </div>
        <Link href={''} className="shrink-0 relative w-48 h-28 rounded-md">
          <Image
            src="/post-thumbnail.jpeg"
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
