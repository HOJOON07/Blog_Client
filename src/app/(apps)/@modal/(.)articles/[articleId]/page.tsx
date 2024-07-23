import { ArticleHeader, ArticleViewEditor } from '@/widgets/article-detail';
import React from 'react';

export default function InterceptArticlesDetailPage() {
  return (
    <div className="w-screen h-screen overflow-y-auto inset-0 z-50 items-center absolute backdrop-blur-sm">
      <div className="max-w-[820px] mx-auto">
        <ArticleHeader />
        <ArticleViewEditor />
      </div>
    </div>
  );
}

// z-index: 32;
// background: rgba(0, 0, 0, 0.6);
// animation: 150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running overlayShow;
// position: fixed;
// inset: 0px;
// display: flex;
// overflow-y: auto;
// -webkit-box-pack: center;
// justify-content: center;
// align-items: flex-start;
