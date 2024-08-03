import { TElement } from '@udecode/plate-common';

export type isPrivateType = 'private' | 'open';
export type isPublishType = 'publish' | 'temporary';

export interface getWorkspaceDetailsArticleResponseType {
  title: string;
  contents: TElement[];
  description: string;
  isPrivate: isPrivateType;
  isPublish: isPublishType;
  articleImage?: string;
}
