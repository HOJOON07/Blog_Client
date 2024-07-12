import { useQuery } from '@tanstack/react-query';
import { getUserInfoApi } from './get-userInfo-api';

export const useGetUserProfilesQuery = (devName: string) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users/info', devName],
    queryFn: () => getUserInfoApi(devName),
  });
  return { user, isLoading, isError };
};
