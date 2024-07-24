import {
  ArticleMainContents,
  ArticleUserInfo,
  FixedButtons,
} from '@/widgets/article-detail';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <FixedButtons />
      <Suspense>
        <ArticleMainContents />
      </Suspense>
    </>
  );
}
