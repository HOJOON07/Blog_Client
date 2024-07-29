import { useSearchParams } from 'next/navigation';
import { useGetUserOverviewQuery } from '../../tanstack-query/useGetUserOverviewQuery';
import { ProfileReadmeEditor } from './profile-editor';
import GitHubCalendar from 'react-github-calendar';

export const ProfileOverview = () => {
  const devName = useSearchParams()?.get('devName') as string;
  const { overview, isLoading, isError } = useGetUserOverviewQuery(devName);

  if (isLoading) {
    return <div>데이터를 불러오는 중입니다.</div>;
  }

  if (isError) {
    return <div>데이터를 불러오는 도중에 에러가 발생했습니다.</div>;
  }

  return (
    <>
      <ProfileReadmeEditor readme={overview?.readme} />
      <div className="bg-zinc-950 px-4 py-10 border rounded-lg">
        {overview?.github ? (
          <GitHubCalendar username={overview.github} />
        ) : (
          <p>깃허브 아이디를 알려주세요!</p>
        )}
      </div>
    </>
  );
};
