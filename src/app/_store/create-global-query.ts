import { getMyInfo } from '@/shared/api/get-my-info-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function createGlobalUserState<T>(
  queryKey: unknown,
  initialData: T | null = null,
) {
  return function () {
    const queryClient = useQueryClient();

    const {
      data: user,
      isError,
      isLoading,
      isSuccess,
    } = useQuery({
      queryKey: [queryKey],
      queryFn: getMyInfo,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchIntervalInBackground: true,
      retry: 2,
    });

    function setData(data: Partial<T>) {
      queryClient.setQueryData([queryKey], data);
    }

    function resetData() {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    }
    return { user, setData, resetData, isLoading, isError, isSuccess };
  };
}
