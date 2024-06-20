'use client';
import { useEditorValue } from '@/app/_store/editorValue';
import { ArticleViewEditor } from '@/widgets/article-detail';

export const ArticleDetail = ({ params }: { params: { slug: string } }) => {
  const value = useEditorValue((state) => state.editorValue);

  return (
    <div className="w-full flex">
      <ArticleViewEditor />
    </div>
  );
};
