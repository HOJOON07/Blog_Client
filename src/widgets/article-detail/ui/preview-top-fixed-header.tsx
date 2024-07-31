'use client';

import {
  Icon,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
  Skeleton,
} from '@/shared';
import { useParams, useRouter } from 'next/navigation';
import { useEscapePreview } from '../hooks/useEscapePreview';
import { forwardRef } from 'react';
import { useGetArticlesAuthorQuery } from '../tanstack-query/useGetArticlesAuthorQuery';
import Link from 'next/link';
import redirectURL from '@/app/(apps)/@modal/_action/redirect';

export const PreviewTopFixedHeader = forwardRef<HTMLDivElement>(
  (props, ref) => {
    const router = useRouter();
    const handleClosePreview = () => {
      router.back();
    };
    const { articleId } = useParams<{ articleId: string }>();
    const { article, isError, isLoading } =
      useGetArticlesAuthorQuery(articleId);

    useEscapePreview(() => {
      router.back();
    });

    return (
      <div ref={ref} className="sticky top-0 h-12 z-50 bg-black">
        <div className="max-w-[1000px] mx-auto flex justify-between px-7 items-center h-14">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              redirectURL(
                `/profiles?devName=${article?.author.devName}` as string,
              );
            }}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src="/avatar.jpeg" alt="avatar" />
              <AvatarFallback>
                <Skeleton className="h-6 w-6 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <p className="text-cyan-500">{article?.author.devName}</p>
          </div>
          <Icon
            name="close"
            className="cursor-pointer"
            onClick={handleClosePreview}
          />
        </div>
      </div>
    );
  },
);

PreviewTopFixedHeader.displayName = 'PreviewTopFixedHeader';
