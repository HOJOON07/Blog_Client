import { TElement } from '@udecode/plate-common';

export interface CreateArticleType {
  title: string;
  contents: TElement[];
  description: string;
  isPrivate: 'private' | 'open';
  isPublish: 'publish' | 'temporary';
  thumbnails?: string;
}
