import { create } from 'zustand';

type ViewModeType = 'Document' | 'Series' | 'Calendar' | 'Graph';

const ViewModeList: Record<ViewModeType, ViewModeType> = {
  Document: 'Document',
  Series: 'Series',
  Calendar: 'Calendar',
  Graph: 'Graph',
};

interface State {
  viewMode: ViewModeType;
}
interface Actions {
  changeViewMode: (mode: ViewModeType) => void;
}

export const useViewModeStore = create<State & Actions>((set) => ({
  viewMode: 'Document',
  changeViewMode: (mode) => set({ viewMode: ViewModeList[mode] }),
}));
