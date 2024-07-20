import { TElement } from '@udecode/plate-common';

export interface getArticleDetailsResponseType {
  id: number;
  createdAt: string;
  updatedAt: Date;
  title: string;
  description: string;
  contents: TElement[];
  likeCount: number;
  commentCount: number;
}

// "id": 3,
//     "createdAt": "2024-07-17T13:22:07.027Z",
//     "updatedAt": "2024-07-17T13:22:07.027Z",
//     "title": "sadasdasdsa",
//     "description": "dsadasdasdasdasdasd",
