'use client';

import { plugins } from '@/features/write-editor/plugin/plate-plugins';
import { Plate } from '@udecode/plate-common';
import { CursorOverlay } from '@udecode/plate-cursor';
import { Editor } from '@/components/plate-ui/editor';
import { useRef } from 'react';
import { cn } from '@udecode/cn';
import { getArticleDetailsResponseType } from '../model/article-detail-response.type';
import { useParams } from 'next/navigation';
import { useGetArticlesDetailsQuery } from '../tanstack-query/useGetArticleDetailsQuery';
type ArticleViewEditorProps = Pick<getArticleDetailsResponseType, 'contents'>;
export const ArticleViewEditor = () => {
  const containerRef = useRef(null);
  const { articleId } = useParams<{ articleId: string }>();
  const { articlesDetail, isError, isLoading } =
    useGetArticlesDetailsQuery(articleId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Plate plugins={plugins} initialValue={articlesDetail?.contents} readOnly>
      <div
        ref={containerRef}
        className={cn(
          'relative',
          // Block selection
          '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
        )}
      >
        <Editor
          className="px-5 pt-5 min-h-[100vh]"
          autoFocus
          focusRing={false}
          variant="ghost"
          size="md"
        />
        <CursorOverlay containerRef={containerRef} />
      </div>
    </Plate>
  );
};
