import { ProfileEditor } from '@/widgets/profiles';
import GitHubCalendar from 'react-github-calendar';

export const Overview = () => {
  return (
    <>
      <ProfileEditor />
      <div className="bg-zinc-950 px-4 py-10 border rounded-lg">
        <GitHubCalendar username="hojoon07" />
      </div>
    </>
  );
};
