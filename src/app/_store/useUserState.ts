import { createGlobalUserState } from '@/app/_store/create-global-query';

export interface UserProfileType {
  bio: string | null;
  devName: string | null;
  email: string | null;
  id: number | null;
  instagram: string | null;
  linkedin: string | null;
  location: string | null;
  position: string | null;
  role: string;
  socialEtc: string | null;
  github: string | null;
}

export const UserInitialState: UserProfileType = {
  bio: null,
  devName: null,
  email: null,
  id: null,
  instagram: null,
  linkedin: null,
  location: null,
  position: null,
  role: 'User',
  socialEtc: null,
  github: null,
};

export const useUserState = createGlobalUserState<UserProfileType>(
  'user',
  UserInitialState,
  true,
);
