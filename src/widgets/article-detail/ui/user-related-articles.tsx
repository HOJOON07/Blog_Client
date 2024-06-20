import { ArticleItems } from './user-article-items';

export const RelatedArticles = () => {
  return (
    <div className="flex flex-col gap-4">
      <ArticleItems />
      <ArticleItems />
      <ArticleItems />
    </div>
  );
};
