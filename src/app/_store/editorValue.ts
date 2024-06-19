import { TDescendant, TElement, UnknownObject } from '@udecode/plate-common';
import { create } from 'zustand';

interface State {
  editorValue: TElement[];
}

interface Actions {
  savedEditorValue: (editorValue: State['editorValue']) => void;
}

export const useEditorValue = create<State & Actions>((set) => ({
  editorValue: [],
  savedEditorValue: (editorValue) => set(() => ({ editorValue })),
}));
