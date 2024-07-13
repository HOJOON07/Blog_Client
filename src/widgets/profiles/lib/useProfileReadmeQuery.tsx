import { useQuery } from '@tanstack/react-query';

export const useGetProfileReadMeQuery = () => {
  const {} = useQuery({
    queryKey: ['readme'],
  });
};
