'use client';
import { useEditorValue } from '@/app/_store/editorValue';

export const SerializedHTML = () => {
  const editorValue = useEditorValue((state) => state.editorValue);

  // console.log(html);
  return <div></div>;
};
