import { TElement } from '@udecode/plate-common';

export interface Author {
  id: number;
  devName: string;
}

export interface ArticleCommentsType {
  author: Author;
  comment: TElement[];
  id: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleCommentsResponseType {
  data: ArticleCommentsType[];
  count: number;
  cursor: {
    after: number;
  };
  next: number | null;
}
