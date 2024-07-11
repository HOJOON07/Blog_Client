import { ProfileEditor } from '@/widgets/profiles';
import GitHubCalendar from 'react-github-calendar';

export const Overview = ({ username }: { username: string }) => {
  return (
    <>
      <ProfileEditor />
      <div className="bg-zinc-950 px-4 py-10 border rounded-lg">
        {username ? (
          <GitHubCalendar username={username} />
        ) : (
          <p>깃허브 아이디를 알려주세요!</p>
        )}
      </div>
    </>
  );
};
