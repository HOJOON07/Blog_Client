import { Icon, buttonVariants, cn } from '@/shared';

interface SidebarDocumentsProps {
  className: string;
  icon?: string;
  children: React.ReactNode;
}

export default function SidebarDocuments({
  className,
  icon,
  children,
}: SidebarDocumentsProps) {
  return (
    <div
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'justify-start gap-2',
      )}
    >
      <div>
        <Icon name="folder" width={5} height={5} />
      </div>
      <p className="font-light">모든 페이지</p>
    </div>
  );
}
