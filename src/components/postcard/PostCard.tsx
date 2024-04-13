import Image from 'next/image';
import Link from 'next/link';
export interface PostCardProps {
  title: string;
  subTitle: string;
  date: string;
  userName: string;
}

export default function PostCard({
  title,
  subTitle,
  date,
  userName,
}: PostCardProps) {
  const test = true;
  return (
    <div className="flex flex-col hover:translate-y-[-12px] rounded-[4px] shadow-md transition-all overflow-hidden aspect-postCard">
      {test && (
        <Link className="relative w-full h-0 pb-[48%]" href={''}>
          <Image
            src="/post-thumbnail.jpeg"
            layout="fill"
            alt="post-thumbnail"
            objectFit="cover"
            className="rounded-lg rounded-b-none"
          />
        </Link>
      )}
      <div className="p-2 flex flex-col flex-1">
        <div>{title}</div>
        <div className="flex-1 mt-2">{subTitle}</div>
        <div className="mt-auto">나는 푸터</div>
      </div>
    </div>
  );
}
