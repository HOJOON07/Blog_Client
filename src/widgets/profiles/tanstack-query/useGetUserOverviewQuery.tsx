import { useQuery } from '@tanstack/react-query';

import { getUserOverviewApi } from '../api/get-user-overview-api';
import { getUserOverviewResponseType } from '../model/get-user-overview-response.type';

export const useGetUserOverviewQuery = (devName: string) => {
  const {
    data: overview,
    isLoading,
    isError,
  } = useQuery<getUserOverviewResponseType, Error>({
    queryKey: ['users/readme', devName],
    queryFn: () => getUserOverviewApi(devName),
  });

  return { overview, isLoading, isError };
};
