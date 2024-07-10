import { getUserInfo } from '@/shared/api/get-user-info-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function createGlobalUserState<T>(
  queryKey: unknown,
  initialData: T | null = null,
) {
  return function () {
    const queryClient = useQueryClient();

    const { data: user } = useQuery({
      queryKey: [queryKey],
      queryFn: getUserInfo,
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
    return { user, setData, resetData };
  };
}
