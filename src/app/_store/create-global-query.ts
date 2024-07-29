import { getMyInfo } from '@/shared/api/get-my-info-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function createGlobalUserState<T>(
  queryKey: unknown,
  initialData: T | undefined = undefined,
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
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchIntervalInBackground: true,
      retry: 3,
    });

    function setData(data: Partial<T>) {
      queryClient.setQueryData([queryKey], data);
    }

    function resetData() {
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
      // queryClient.removeQueries({ queryKey: [queryKey], exact: true });
      // queryClient.invalidateQueries({ queryKey: [queryKey] });
    }
    return { user, setData, resetData, isLoading, isError, isSuccess };
  };
}
