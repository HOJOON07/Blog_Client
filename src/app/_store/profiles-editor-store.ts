import { create } from 'zustand';

interface State {
  isReadOnly: boolean;
}

interface Actions {
  setIsReadOnly: () => void;
}

export const useProfilesEditorReadOnlyStore = create<State & Actions>(
  (set) => ({
    isReadOnly: true,
    setIsReadOnly: () => set((state) => ({ isReadOnly: !state.isReadOnly })),
  }),
);
