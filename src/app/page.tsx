import {
  DevWorld,
  LandingHeader,
  Sparkles,
  Spotlight,
  TypingEffect,
} from '@/widgets/landing';
import { ButtonGroup } from '@/widgets/landing';
import { TechStacks } from '@/widgets/landing';

export default function Page() {
  return (
    <div className="h-screen w-screen dark:bg-black bg-white relative flex justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-screen w-[88rem] bg-black flex flex-col items-center overflow-hidden rounded-md relative">
        <DevWorld />
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <Sparkles
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <TypingEffect />
        <ButtonGroup />
        <TechStacks />
      </div>
    </div>
  );
}
