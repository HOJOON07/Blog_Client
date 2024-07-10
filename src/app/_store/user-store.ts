import { create } from 'zustand';

interface UserProfileType {
  bio: string | null;
  devName: string;
  email: string;
  id: number;
  instagram: string | null;
  linkedin: string | null;
  location: string | null;
  position: string | null;
  role: string;
  socialEtc: string | null;
}

interface State {
  user?: UserProfileType;
}

interface Actions {
  setUser: (user: UserProfileType) => void;
  clearUser: () => void;
}

export const useUserStore = create<State & Actions>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: undefined }),
}));
