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
  return (
    <div
      data-name="block"
      className="hover:translate-y-[8px] rounded-[4px] shadow-md transition-all flex overflow-hidden flex-col 2xl:w-[calc(25% - 32px)]"
    >
      <Link className="relative w-full h-0 pb-[50%]" href={''}>
        <Image
          src="/post-thumbnail.jpeg"
          layout="fill"
          alt="post-thumbnail"
          objectFit="cover"
          className="rounded-lg rounded-b-none"
        />
      </Link>
      <div data-name="content">
        <Link href={''}>
          <h4></h4>
          <div data-name="description-wrapper">
            <p></p>
          </div>
        </Link>
        <div data-name="sub-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div data-name="footer">
        <Link href={''}>
          <Image src={''} alt="" />
          <span>
            by <b>user</b>
          </span>
        </Link>
        <div data-nam="likes">LikeIcon 태그 들어오고 Like 수</div>
      </div>
    </div>
  );
}
{
  /* <div className="shadow-2xl rounded-lg" tag-name="Block">
<div className="relative w-full h-0 pb-[50%]">
  <Image
    src="/post-thumbnail.jpeg"
    layout="fill"
    alt="post-thumbnail"
    objectFit="cover"
    className="rounded-lg rounded-b-none"
  />
</div>
<div className="p-1">
  <h1>{title}</h1>
  <div>
    <p>{subTitle}</p>
    <p>{date}</p>
  </div>
</div>
<div className="px-[0.625rem] py-1">{userName}</div>
</div> */
}
