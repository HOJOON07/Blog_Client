import { create } from 'zustand';

type TabModeType = 'Overview' | 'Articles' | 'Stars' | 'BookMarks';

const TabModeList: Record<TabModeType, TabModeType> = {
  Overview: 'Overview',
  Articles: 'Articles',
  Stars: 'Stars',
  BookMarks: 'BookMarks',
};

interface State {
  tabMode: TabModeType;
}
interface Actions {
  changeTabMode: (mode: TabModeType) => void;
}

export const useProfilesTabModeStore = create<State & Actions>((set) => ({
  tabMode: 'Overview',
  changeTabMode: (mode) => set({ tabMode: TabModeList[mode] }),
}));
