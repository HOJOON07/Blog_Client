import { ProfileEditor } from '@/widgets/profiles';
import { TElement } from '@udecode/plate-common';
import GitHubCalendar from 'react-github-calendar';

export const Overview = ({
  username,
  readme,
}: {
  username: string;
  readme: TElement[];
}) => {
  return (
    <>
      <ProfileEditor readme={readme} />
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
