import { createGlobalUserState } from '@/app/_store/create-global-query';

interface InitUserProfileType {
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
}

const initialState: InitUserProfileType = {
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
};

export const useUserState = createGlobalUserState<InitUserProfileType>(
  'user',
  initialState,
);
