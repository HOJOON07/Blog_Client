import { Icon, Separator } from '@/shared';
import { TagFilter } from './tag-filter';
import { DocumentHeader, DocumentItem } from '@/widgets/workspace';

export const Documents = () => {
  return (
    <div className="border-l">
      <div className="mt-6 w-full">
        <div className="flex items-center justify-between mb-6 px-4">
          <p className="font-medium text-[20px] text-gray-500">모든 페이지</p>
          <TagFilter />
        </div>
        <DocumentHeader />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
    </div>
  );
};
