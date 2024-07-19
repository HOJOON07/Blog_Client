export interface WorkspaceArticlesType {
  id: number;
  title: string;
  updatedAt: string;
  createdAt: string;
}

export interface getWorkspaceArticlesApiResponseType {
  data: WorkspaceArticlesType[];
  count: number;
  cursor: {
    after: number;
  };
  next: number | null;
}
