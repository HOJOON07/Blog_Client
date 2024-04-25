import Icon from '@/components/icon/Icon';
import { LandingButton } from './LandingButton';
import LandingHeader from './LandingHeader';
import { Sparkles } from './Sparkles';
import { TypingSlogan } from './TypingSlogan';

('Create your own articles and explore with other developers.');

const words = [
  { text: 'Creat' },
  { text: 'your' },
  { text: 'own' },
  { text: 'Articles', className: 'text-blue-500 dark:text-blue-500' },
  { text: 'and', className: 'text-orange-500 dark:text-orange-500' },
  { text: 'Explore' },
  { text: 'with' },
  { text: 'other' },
  { text: 'Developers', className: 'text-blue-500 dark:text-blue-500' },
];

export default function LandingPage() {
  return (
    <div className="h-screen w-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center">
      <LandingHeader />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* 여기부터 스파클 */}
      <div className="h-screen w-[88rem] bg-black flex flex-col items-center overflow-hidden rounded-md relative">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 mt-28">
          Dev World
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          {/* Core component */}
          <Sparkles
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        {/* 여기는 타이핑 */}
        <TypingSlogan words={words} />
        <div className="flex mt-5 gap-5">
          <LandingButton
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
          >
            Get Started
          </LandingButton>
          <LandingButton
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4"
          >
            Create Account
          </LandingButton>
        </div>
        {/* 기술 스택 */}
        <div className="flex mt-5 gap-4 justify-start items-center fixed bottom-20">
          <div className="flex items-center gap-2">
            <Icon name="next" />
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
              NEXT.js
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="react" />
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
              React.js
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="tailwind" />
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
              TailwindCSS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="framerMotion" />
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
              Framer Motion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
