'use client';
import { useUserState } from '@/app/_store/useUserState';
import { MovingBorderButton } from '@/shared';

export const ButtonGroup = () => {
  const { user } = useUserState();
  return (
    <div className="flex gap-5 2xl:mt-3">
      <MovingBorderButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
        pathName="/articles"
      >
        Get Started
      </MovingBorderButton>
      {user ? null : (
        <MovingBorderButton
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
          pathName="/signin"
        >
          Create Account
        </MovingBorderButton>
      )}
    </div>
  );
};
