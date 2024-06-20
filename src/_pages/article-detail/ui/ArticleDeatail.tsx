import { ArticleMainContents, ArticleUserInfo } from '@/widgets/article-detail';

export const ArticleDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="grid grid-cols-[250px_1fr_400px] h-screen overflow-auto">
      <div className="sticky h-4 left-0 top-0">toc</div>
      <ArticleMainContents />
      <ArticleUserInfo />
    </div>
  );
};
