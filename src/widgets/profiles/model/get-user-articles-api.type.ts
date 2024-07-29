export type ParamsObjType = {
  devName: string;
  order__createdAt?: string;
  where__title__i_like?: string;
  where__description__i_like?: string;
};

export interface UserPublicArticleType {
  author: {
    devName: string;
  };
  id: number;
  title: string;
  commentCount: number;
  createdAt: string;
  description: string;
  thumbnails: string[];
}

export interface getUserArticlesApiResponseType {
  data: UserPublicArticleType[];
  count: number;
  cursor: {
    after: number;
  };
  next: number | null;
}
