import { MovingBorderButton } from '@/shared';

export const ButtonGroup = () => {
  return (
    <div className="flex mt-3 gap-5">
      <MovingBorderButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
        pathName="/articles"
      >
        Get Started
      </MovingBorderButton>
      <MovingBorderButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
        pathName="/signin"
      >
        Create Account
      </MovingBorderButton>
    </div>
  );
};
