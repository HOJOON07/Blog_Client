interface ArticleCardResponseType {
  author: {
    avatarImage: string;
    devName: string;
    location: string;
    position: string;
    image: string;
  };
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  thumbnails?: [];
  id: number;
  articleImage: string;
}

export interface getArticlesApiResponseType {
  data: ArticleCardResponseType[];
  count: number;
  cursor: {
    after: number;
  };
  next: number | null;
}
