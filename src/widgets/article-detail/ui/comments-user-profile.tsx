import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Icon,
  Separator,
  Skeleton,
} from '@/shared';
import {
  ArticleCommentsType,
  Author,
} from '../model/article-comments-response.type';
import { format } from 'date-fns';
import { useUserState } from '@/app/_store/useUserState';

interface CommentsUserProfileProps
  extends Author,
    Pick<ArticleCommentsType, 'createdAt'> {
  onClick: () => void;
}

export const CommentsUserProfile = ({
  id,
  devName,
  createdAt,
  onClick,
}: CommentsUserProfileProps) => {
  const { user: myInfo } = useUserState();

  return (
    <div className="flex items-center w-full gap-2">
      <Avatar className="w-6 h-6">
        <AvatarImage src="/avatar.jpeg" alt="avatar" />
        <AvatarFallback>
          <Skeleton className="h-8 w-8 rounded-full" />
        </AvatarFallback>
      </Avatar>
      <p className="font-medium text-xl">{devName}</p>
      <div className="ml-auto flex items-center gap-1">
        <p className="text-zinc-500 text-[12px] font-medium">
          {format(createdAt, 'yyyy년 MM월 dd일')}
        </p>
        {myInfo?.id === id ? (
          <Button
            className="ml-auto"
            variant="ghost"
            size="icon"
            onClick={onClick}
          >
            <Icon name="edit" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};
