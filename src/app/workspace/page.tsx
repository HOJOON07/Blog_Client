import {
  DocumentHeader,
  Documents,
  TagFilter,
  WorkspaceHeader,
} from '@/widgets/workspace';
import { getWorkspaceArticlesApi } from '@/widgets/workspace/api/get-workspace-articles-api';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

const INITIAL_URL = 'http://localhost:5500/articles/workspace';

export default async function WorkspacePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['workspace'],
    queryFn: ({ pageParam }) => getWorkspaceArticlesApi(pageParam),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage: any) => lastPage.next || undefined,
  });
  return (
    <div className="flex flex-col flex-1">
      <div className="border-l h-full relative">
        <div className="mt-6 w-full max-h-[80%]">
          <div className="flex items-center justify-between mb-6 px-4">
            <p className="font-medium text-[20px] text-gray-500">모든 페이지</p>
            <TagFilter />
          </div>
          <DocumentHeader />
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Documents />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
}
