import { Icon, Separator } from '@/shared';
import { TagFilter } from './tag-filter';
import { DocumentHeader, DocumentItem } from '@/widgets/workspace';

export const Documents = () => {
  return (
    <div className="px-6 mt-6 w-full">
      <div className="flex items-center justify-between mb-6">
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
  );
};

{
  /* <div
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
</div> */
}
