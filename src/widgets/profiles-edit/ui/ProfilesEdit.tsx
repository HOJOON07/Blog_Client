'use client';

import { ProfileEditForm } from './profile-edit-form';
import { useUserState } from '@/app/_store/useUserState';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export const ProfilesEdit = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { user } = useUserState();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    // user와 params.id가 모두 존재할 때만 로직을 실행
    if (user && params.id) {
      if (!user.id) {
        // 로그인하지 않은 사용자
        router.push('/signin');
      } else if (user.id !== parseInt(params.id)) {
        // 로그인했지만 자신의 프로필 페이지가 아닌 경우
        router.push('/articles');
      } else {
        // 로그인했고 자신의 프로필 페이지인 경우
        setIsAuthorized(true);
      }
    }
  }, [user, params.id, router]);

  if (!isAuthorized) {
    return <div>접근할 수 없는 프로필 페이지입니다.</div>;
  }

  return (
    <main className="relative">
      <div className="max-w-[1100px] w-full mx-auto my-0">
        <div className="py-12 grid grid-cols-1">
          <p className="text-4xl font-bold mb-10">프로필</p>
          <ProfileEditForm user={user} />
        </div>
      </div>
    </main>
  );
};
