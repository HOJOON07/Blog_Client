import { ArticleUserInfo } from '@/widgets/article-detail';
import { Suspense } from 'react';

export default function AuthorPage({
  params,
}: {
  params: { articleId: string };
}) {
  return (
    <Suspense>
      <ArticleUserInfo articleId={params.articleId} />;
    </Suspense>
  );
}
