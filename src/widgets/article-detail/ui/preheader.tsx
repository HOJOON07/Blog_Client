import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Icon,
  Separator,
  Skeleton,
} from '@/shared';
import { BookmarkIcon } from '@radix-ui/react-icons';
export const ArticleUserInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 mt-10 h-12 sticky">
      <div className="flex items-center">
        <Avatar className="w-10 h-10 mr-4">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-8 w-8 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div>
          <span className="text-white text-md font-medium mr-2">
            Kim Ho Joon
          </span>
          <span className="text-zinc-500 text-[10px] font-medium">
            FrontEnd, Seoul
          </span>
          <p className="text-zinc-500 text-[12px] font-medium">
            2024년 6월 20일
          </p>
        </div>
      </div>
      <div className="items-center justify-end gap-3 flex h-full">
        <Icon name="github" href="https://github.com/HOJOON07" />
        <Icon name="instagram" href="https://www.instagram.com/hzoxjcnv/" />
        <Icon
          name="linkedin"
          href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
        />
        <Separator orientation="vertical" className="h-[65%]" />
        <BookmarkIcon className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};
