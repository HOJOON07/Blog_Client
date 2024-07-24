import { ArticleUserInfo } from '@/widgets/article-detail';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <ArticleUserInfo />;
    </Suspense>
  );
}
