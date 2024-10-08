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
    image: string;
  };
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  articleImage: string;
  id: number;
}

export const ArticleCard = ({
  author,
  title,
  description,
  likeCount,
  commentCount,
  createdAt,
  articleImage,
  id,
}: ArticleCardProps) => {
  const thunbnailSrc = articleImage
    ? `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${articleImage}`
    : DEFAULT_THUMBNAIL_SRC;
  const imageSrc =
    author.image &&
    `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${author.image}`;
  return (
    <div className="flex flex-col relative bg-background rounded-[10px] aspect-articleCard z-10">
      <Link href={`/profiles?devName=${author?.devName}`}>
        <div className="flex items-center w-full h-14">
          <Avatar className="w-8 h-8 mr-[10px]">
            <AvatarImage src={imageSrc ?? '/avatar.jpeg'} alt="avatar" />
            <AvatarFallback>
              <Skeleton className="h-8 w-8 rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-white text-sm font-medium">{author.devName}</p>
            <p className="text-zinc-500 text-[10px] font-medium">
              {author.position ?? 'Position'}, {author.location ?? 'Location'}
            </p>
          </div>
          <Icon name="dots" className="ml-auto" />
        </div>
      </Link>
      <Link
        href={`/articles/${id}`}
        className="relative w-full h-0 pb-[50%] overflow-hidden"
        scroll={false}
      >
        <Image
          fill
          src={thunbnailSrc}
          alt="post-thumbnail"
          sizes="300px"
          // priority
        />
      </Link>
      <Link href={`/articles/${id}`} scroll={false}>
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
      </Link>
    </div>
  );
};
