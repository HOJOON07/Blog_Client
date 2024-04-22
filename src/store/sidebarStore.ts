import { create } from 'zustand';

interface State {
  expand: boolean;
}

interface Actions {
  handleSidebarSize: () => void;
}

export const useSidebarStore = create<State & Actions>((set) => ({
  expand: true,
  handleSidebarSize: () => set((state) => ({ expand: !state.expand })),
}));
