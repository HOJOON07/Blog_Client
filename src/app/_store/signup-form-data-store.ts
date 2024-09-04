import { create } from 'zustand';

interface State {
  email: string;
}

interface Actions {
  setEmail: (email: string) => void;
  resetEmail: (email: string) => void;
}

export const useSignupFormDataStore = create<State & Actions>((set) => ({
  email: 'default.email',
  setEmail: (email) => set({ email }),
  resetEmail: (email) => set({ email: 'default.email' }),
}));
