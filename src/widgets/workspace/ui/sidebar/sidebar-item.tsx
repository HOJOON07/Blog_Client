import { Icon, IconList, buttonVariants, cn } from '@/shared';

interface SidebarDocumentsProps {
  icon: IconList;
  children?: React.ReactNode;
  isSeries?: boolean;
  title?: string;
}

export const SidebarItem = ({
  icon,
  isSeries,
  title,
  children,
}: SidebarDocumentsProps) => {
  return (
    <div
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'relative justify-start gap-2',
      )}
    >
      {isSeries ? (
        <Icon name="rightArrow" size={4} className="absolute left-0"></Icon>
      ) : null}
      <Icon name={icon} size={4} />
      <p className="font-light">{title}</p>
      {children}
    </div>
  );
};
