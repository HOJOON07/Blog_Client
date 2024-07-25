export interface AuthorType {
  id: number;
  email: string;
  devName: string;
  position: string | null;
  bio: string | null;
  location: string | null;
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
  socialEtc: string | null;
  followerCount: number;
  followeeCount: number;
}

export interface AuthorContainer {
  id: number;
  author: AuthorType;
}

export interface Articles {
  id: number;
  createdAt: string;
  title: string;
  description: string;
}

export interface getArticleAuthorResponseType {
  author: AuthorContainer;
  articles: Articles[];
  articleId: number;
}

export interface getArticleAuthorQueryType {
  author: AuthorType;
  articles: Articles[];
  articleId: number;
}
