import { MainFeed } from '@/widgets/main-feed';
import { MainIntro } from '@/widgets/main-intro';
import { Navigation } from '@/widgets/main-navigation';

export const Home = () => {
  return (
    <>
      <Navigation />
      {/* <MainIntro /> */}
      <MainFeed />
    </>
  );
};
