import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const ArticleItems = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  const { articleId } = useParams<{ articleId: string }>();
  const href = id !== parseInt(articleId) ? `/articles/details/${id}` : null;
  return (
    <Link href={id !== parseInt(articleId) ? `/articles/details/${id}` : ''}>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col justify-around">
          <p className="text-[18px] font-medium line-clamp-1 overflow-hidden leading-5">
            {title}
          </p>
          <p className="text-sm line-clamp-2 overflow-hidden text-zinc-500">
            {description}
          </p>
        </div>
        <div className="relative shrink-0 w-20 h-20 rounded-[6px]">
          <Image
            width={80}
            height={80}
            src="/post-thumbnail.jpeg"
            alt="thumbnail"
            className="absolute inset-0 w-full h-full rounded-[6px]"
          />
        </div>
      </div>
    </Link>
  );
};
