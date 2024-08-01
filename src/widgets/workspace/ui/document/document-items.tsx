import { Icon } from '@/shared';
import { WorkspaceArticlesType } from '../../model/get-workspace-response.type';
import { format } from 'date-fns';
import Link from 'next/link';

interface DocumentItemProps {
  article: WorkspaceArticlesType;
}

export const DocumentItem = ({ article }: DocumentItemProps) => {
  const { id, title, createdAt, updatedAt } = article;
  return (
    <Link href={`/workspace/${id}`}>
      <div className="cursor-pointerw-full h-16 hover:bg-accent hover:text-accent-foreground cursor-pointer">
        <div className="flex items-center w-full h-full px-4">
          <div className="flex items-center gap-5 w-1/2">
            <Icon name="document" size={6} />
            <p className="text-md font-medium">{title}</p>
          </div>
          <div className="flex items-center gap-4 w-1/2 justify-end">
            <div className="flex items-center gap-3 w-[40%] justify-end">
              <p className="text-sm font-light">NEXT.js</p>
            </div>
            <div className="flex items-center gap-3 w-[20%] justify-end">
              <p className="text-xs font-light">
                {format(createdAt, 'yyyy.MM.dd')}
              </p>
            </div>
            <div className="flex items-center gap-3 w-[18%] justify-end">
              <p className="text-xs font-light">
                {format(updatedAt, 'yyyy.MM.dd')}
              </p>
            </div>
            <div className="flex items-center justify-end flex-1 gap-2">
              <Icon name="star" />
              <Icon name="dots" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
