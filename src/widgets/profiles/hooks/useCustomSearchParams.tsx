import { useSearchParams } from 'next/navigation';

export const useCustomSearchParams = (targetParams: string[]) => {
  const searchParams = useSearchParams();

  const paramsArray = targetParams.map(
    (param) => searchParams?.get(param) as string,
  );

  return paramsArray;
};
