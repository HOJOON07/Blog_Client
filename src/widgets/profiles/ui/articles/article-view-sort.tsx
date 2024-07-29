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
import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
type SortedType = '최신순' | '인기순' | '오래된순';

type Checked = DropdownMenuCheckboxItemProps['checked'];
export const ArticleViewSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<SortedType>('최신순');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

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
            router.replace(
              pathname + '?' + createQueryString('order__createdAt', 'DESC'),
            );
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
            router.replace(
              pathname + '?' + createQueryString('order__createdAt', 'ASC'),
            );
            setSelectedSort('오래된순');
          }}
        >
          오래된순
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
