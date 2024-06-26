import CommentsEditor from '@/features/comments-editor/ui/CommentsEditor';
import CommentsViewerEditor from '@/features/comments-editor/ui/CommentsViewerEditor';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
  Skeleton,
} from '@/shared';
import { ArticleHeader, ArticleViewEditor } from '@/widgets/article-detail';

export const ArticleMainContents = () => {
  return (
    <div>
      <ArticleHeader />
      <ArticleViewEditor />
      <div className="px-4 w-full">
        <Separator className="mb-4" />
      </div>

      <div className="px-4 my-5">
        <p className="font-medium text-lg">댓글 4개</p>
      </div>

      <div className="px-4 mb-6 flex flex-col gap-7">
        <div>
          <div className="flex items-center w-full gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/avatar.jpeg" alt="avatar" />
              <AvatarFallback>
                <Skeleton className="h-8 w-8 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <p className="font-medium text-xl">김호준</p>
            <p className="text-zinc-500 text-[12px] font-medium ml-auto">
              2024년 6월 21일
            </p>
          </div>
          <div className="max-h-[350px] overflow-auto my-4 flex flex-col gap-8">
            <CommentsViewerEditor />
          </div>
          <Separator className="bg-primary" />
        </div>
      </div>

      <div className="px-4">
        <CommentsEditor />
      </div>
    </div>
  );
};
