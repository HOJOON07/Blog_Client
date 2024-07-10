// 'use client';
// import { getUserInfo } from '@/shared/api/get-user-info-api';
// import { useQuery } from '@tanstack/react-query';
// import { useUserStore } from '../_store/user-store';
// import { useEffect } from 'react';

// interface Props {
//   children: React.ReactNode;
// }

// export default function AuthProvider({ children }: Props) {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['user'],
//     queryFn: getUserInfo,
//     retry: 1,
//   });

//   const { setUser, clearUser, user } = useUserStore();

//   useEffect(() => {
//     if (data) {
//       setUser(data);
//       console.log(user);
//     }
//   }, [data, setUser, clearUser, error]);

//   return <>{children}</>;
// }
