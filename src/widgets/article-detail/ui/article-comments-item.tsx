'use client';
import { Separator } from '@/shared';
import CommentsViewerEditor from '@/features/comments-editor/ui/CommentsViewerEditor';
import { CommentsUserProfile } from './comments-user-profile';
import { ArticleCommentsType } from '../model/article-comments-response.type';
import { useState } from 'react';

export const ArticleCommentsItem = ({
  comment,
}: {
  comment: ArticleCommentsType;
}) => {
  const [readOnlyState, setReadOnlyState] = useState<boolean>(true);
  const handleCommentsEdit = () => {
    setReadOnlyState(!readOnlyState);
  };
  return (
    <div key={comment.id}>
      <CommentsUserProfile
        devName={comment.author.devName}
        id={comment.author.id}
        createdAt={comment.createdAt}
        onClick={handleCommentsEdit}
      />
      <div className="max-h-[350px] overflow-auto my-4 flex flex-col gap-8">
        <CommentsViewerEditor
          readOnlyState={readOnlyState}
          comment={comment.comment}
          userId={comment.author.id}
        />
      </div>
      <Separator className="bg-primary" />
    </div>
  );
};
