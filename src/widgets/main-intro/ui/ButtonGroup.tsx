import { MovingBorderButton } from '@/shared';

export const ButtonGroup = () => {
  return (
    <div className="flex mb-[40px]">
      <MovingBorderButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-4 px-8"
        pathName="/new"
      >
        시작하기
      </MovingBorderButton>
    </div>
  );
};
