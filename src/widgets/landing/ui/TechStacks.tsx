import { Icon } from '@/shared';

export const TechStacks = () => {
  return (
    <div className="flex mt-5 gap-4 justify-start items-center fixed bottom-12">
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
  );
};
