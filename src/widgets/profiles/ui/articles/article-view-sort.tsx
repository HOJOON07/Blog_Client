'use client';
import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Button,
} from '@/shared';

import { ChevronDownIcon } from '@radix-ui/react-icons';
type SortedType = '최신순' | '인기순' | '오래된순';

type Checked = DropdownMenuCheckboxItemProps['checked'];
export const ArticleViewSort = () => {
  const [selectedSort, setSelectedSort] = React.useState<SortedType>('최신순');

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-sm h-full w-[128px] text-zinc-400"
        >
          {selectedSort}
          <ChevronDownIcon className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          onCheckedChange={() => {
            setSelectedSort('최신순');
          }}
        >
          최신순
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onCheckedChange={() => {
            setSelectedSort('인기순');
          }}
        >
          인기순
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onCheckedChange={() => {
            setSelectedSort('오래된순');
          }}
        >
          오래된순
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
