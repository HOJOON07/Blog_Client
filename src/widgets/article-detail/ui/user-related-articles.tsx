import { Articles } from '../model/artcile-author-response.type';
import { ArticleItems } from './user-article-items';

export const RelatedArticles = ({ articles }: { articles?: Articles[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {articles?.map(({ id, title, description }) => (
        <ArticleItems
          key={id}
          title={title}
          description={description}
          id={id}
        />
      ))}
    </div>
  );
};
