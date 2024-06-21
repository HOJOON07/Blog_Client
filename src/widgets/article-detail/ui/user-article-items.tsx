import Image from 'next/image';

export const ArticleItems = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col justify-around">
        <p className="text-[18px] font-medium line-clamp-1 overflow-hidden leading-5">
          react-query의 fetchQuery과 prefetchQuery
        </p>
        <p className="text-sm line-clamp-2 overflow-hidden text-zinc-500">
          next.js 의 pages router 기준으로 작성되었어요.next.js서버사이드에서
          데이터를 prefetch하기 위해서 리액트쿼리에서 제안하는 방식은 크게
          두가지가 존재한다.데이터 패칭을 한 뒤에 serverSideProps의 props로
          넘겨주는 방식서버사이드에서 queryClient에 데이터를 저장하고,
          queryClient자체를 dehydrate
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
  );
};
