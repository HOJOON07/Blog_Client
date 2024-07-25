import { Button } from '@/shared';
import { useEditorState } from '@udecode/plate-common';
import { useParams } from 'next/navigation';
import { useCreateCommentsMutation } from '../tanstack-query/useCreateCommentsMutation';

export const CommentsWriteButton = () => {
  const { articleId } = useParams() as { articleId: string };
  const editor = useEditorState();
  const { writeComments } = useCreateCommentsMutation();

  const handleWriteCommentsButton = () => {
    writeComments({ articleId, comment: editor.children });
  };

  return (
    <div className="flex justify-end">
      <Button className="ml-auto my-2" onClick={handleWriteCommentsButton}>
        댓글 작성
      </Button>
    </div>
  );
};
