import Image from 'next/image';
import Link from 'next/link';
import { PostCardProps } from './PostCard';

export default function PostCard({
  title,
  subTitle,
  date,
  userName,
}: PostCardProps) {
  // props 받는 방식을 변경하자
  // return (
  //   <div
  //     data-name="block"
  //     className="hover:translate-y-[-8px] rounded-[4px] shadow-md transition-all flex overflow-hidden flex-col 2xl:w-[calc(25% - 32px)]"
  //   >
  //     <Link className="relative w-full h-0 pb-[50%]" href={''}>
  //       <Image
  //         src="/post-thumbnail.jpeg"
  //         layout="fill"
  //         alt="post-thumbnail"
  //         objectFit="cover"
  //         className="rounded-lg rounded-b-none"
  //       />
  //     </Link>
  //     <div data-name="content" className="p-1 flex flex-1 flex-col">
  //       <Link href={''}>
  //         <h4 className="text-base m-auto mb-[0.25rem] break-all">{title}</h4>
  //         <div data-name="description-wrapper" className="flex-1">
  //           <p className="m-auto break-all text-xs leading-6 max-h-12">
  //             {subTitle}
  //           </p>
  //         </div>
  //       </Link>
  //       <div data-name="sub-info" className="text-xs leading-6">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //       </div>
  //     </div>
  //     <div data-name="footer">
  //       <Link href={''}>
  //         <Image src={''} alt="" />
  //         <span>
  //           by <b>user</b>
  //         </span>
  //       </Link>
  //       <div data-nam="likes">LikeIcon 태그 들어오고 Like 수</div>
  //     </div>
  //   </div>
  // );
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
        <div className="">{subTitle}</div>
        <div className="mt-auto">나는 푸터</div>
      </div>
    </div>
  );
}
