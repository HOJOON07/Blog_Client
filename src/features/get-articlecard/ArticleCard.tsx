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

{
  /* <div className="w-4 h-4 left-[79px] top-[265px] absolute"></div>
      <img
        className="w-[18px] h-1 left-[267px] top-[33px] absolute"
        src="https://via.placeholder.com/18x4"
      />
      <div className="left-[15px] top-[297px] absolute">
        <span className="text-white text-xs font-normal font-['Avenir']">
          Liked by
        </span>
        <span className="text-white text-xs font-extrabold font-['Avenir']">
          Yen and 127 others
        </span>
        <span className="text-white text-xs font-medium font-['Avenir']"></span>
      </div>
      <div className="w-[115px] h-8 left-[15px] top-[323px] absolute">
        <div className="w-[93px] h-4 left-0 top-0 absolute">
          <div className="left-[13px] top-0 absolute text-white text-xs font-medium font-['Avenir Next']">
            Lazy Weekend
          </div>
        </div>
        <div className="left-[14px] top-[18px] absolute text-zinc-500 text-[10px] font-medium font-['Avenir']">
          Wed, 26 January 2021
        </div>
      </div>
      <img
        className="w-[290px] h-[180px] left-[5px] top-[70px] absolute rounded-[15px]"
        src="https://via.placeholder.com/290x180"
      />
      <img
        className="w-10 h-10 left-[15px] top-[15px] absolute rounded-full"
        src="https://via.placeholder.com/40x40"
      />
      <div className="w-[35px] h-[15px] left-[250px] top-[296px] absolute">
        <img
          className="w-[15px] h-[15px] left-[20px] top-0 absolute rounded-full border border-neutral-900"
          src="https://via.placeholder.com/15x15"
        />
        <img
          className="w-[15px] h-[15px] left-[10px] top-0 absolute rounded-full border border-neutral-900"
          src="https://via.placeholder.com/15x15"
        />
        <img
          className="w-[15px] h-[15px] left-0 top-0 absolute rounded-full border border-neutral-900"
          src="https://via.placeholder.com/15x15"
        />
      </div>
      <div className="w-[75px] h-[33px] left-[65px] top-[19px] absolute">
        <div className="left-0 top-[19px] absolute text-zinc-500 text-[10px] font-medium font-['Avenir']">
          New Delhi, India
        </div>
        <div className="left-0 top-0 absolute text-white text-sm font-medium font-['Avenir Next']">
          codyfisher
        </div>
      </div> */
}
