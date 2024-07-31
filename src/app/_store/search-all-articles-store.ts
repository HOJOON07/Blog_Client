import { create } from 'zustand';

interface QueryParams {
  where__title__i_like: string | null;
  where__description__i_like: string | null;
  take: string;
}

interface State {
  query: QueryParams;
}

interface Actions {
  setSearchQuery: (query: string | null) => void;
}

export const useSearchQueryStore = create<State & Actions>((set) => ({
  query: {
    where__description__i_like: null,
    where__title__i_like: null,
    take: '10',
  },
  setSearchQuery: (query) =>
    set((state) => ({
      query: {
        ...state.query,
        where__title__i_like: query,
        where__description__i_like: query,
      },
    })),
}));
