import { Icon, IconList, buttonVariants, cn } from '@/shared';

interface SidebarDocumentsProps {
  className: string;
  icon: IconList;
  children?: React.ReactNode;
  isSeries?: boolean;
  title?: string;
}

export default function SidebarItem({
  className,
  icon,
  isSeries,
  title,
  children,
}: SidebarDocumentsProps) {
  return (
    <div className={cn(buttonVariants({ variant: 'ghost' }), `${className}`)}>
      {isSeries ? <Icon name="rightArrow" width={4} height={4}></Icon> : null}
      <Icon name={icon} width={5} height={5} />
      <p className="font-light">{title}</p>
      {children}
    </div>
  );
}
