import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

import Image from 'next/image';
import { Fragment } from 'react';

interface Props {
  expand: boolean;
}

export default function UserCard({ expand }: Props) {
  return (
    <div className="relative flex flex-col items-center my-4 mx-2 rounded-2xl">
      <div className="relative flex w-full h-[66] bg-blue-50 justify-center rounded-xl bg-cover">
        {expand && (
          <Image
            src="/userCardBack.png"
            alt="user_background"
            width={240}
            height={66}
            className="rounded-xl bg-cover"
          />
        )}
        <Avatar className="absolute -bottom-5 w-8 h-8">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback>
            <Skeleton className="h-12 w-12 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
      {expand ? (
        <Fragment>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white mt-6">
              Kim Ho Joon
            </h4>
            <p className="text-sm font-light text-gray-600">
              FrontEnd Developer
            </p>
          </div>
          <div className="mt-4 mb-2 flex w-full gap-6 justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                17
              </p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                9.7K
              </p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                434
              </p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}
