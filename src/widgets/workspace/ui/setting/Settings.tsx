'use client';
// import { useEditorValue } from '@/app/_store/editorValue';
import { Button, Icon, Switch } from '@/shared';
import { useEditorMounted, useEditorState } from '@udecode/plate-common';
import { useEffect, useRef, useState } from 'react';

export const Settings = () => {
  const editor = useEditorState();
  const [isPrivate, setIsPrivate] = useState<'private' | 'open'>('private');
  const titleRef = useRef<string | null>(null);
  const descriptionRef = useRef<string | null>(null);
  const tagRef = useRef<string | null>(null);

  console.log(isPrivate);

  // const isMounted = useEditorMounted();
  // const editorValue = useEditorValue((state) => state.editorValue);
  // const savedEditorValue = useEditorValue((state) => state.savedEditorValue);

  return (
    <div className="w-[330px] px-5 py-3 right-0 top-0 sticky h-screen flex flex-col">
      <div className="flex flex-col">
        <p className="w-full mb-5 text-primary">미리보기</p>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-solid border rounded-lg cursor-pointer hover:bg-zinc-900"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Icon name="document" color="text-zinc-400" />
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden border-none outline-none"
            />
          </label>
        </div>
      </div>
      <div className="flex mt-5 justify-between">
        <p>공개 여부</p>
        <Switch
          onClick={() => {
            setIsPrivate(isPrivate === 'private' ? 'open' : 'private');
          }}
        />
      </div>
      <div className="flex mt-5 justify-between">
        <p>제목</p>
      </div>
      <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
        <input
          type="text"
          className="outline-none border-none bg-transparent w-full h-full"
          maxLength={100}
          placeholder="아티클을 설명해주세요"
        />
      </div>
      <div className="flex justify-between">
        <p>설명</p>
      </div>
      <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
        <input
          type="text"
          className="outline-none border-none bg-transparent w-full h-full"
          maxLength={200}
          placeholder="아티클을 설명해주세요"
        />
      </div>
      <div className="flex justify-between">
        <p>태그</p>
      </div>
      <div className="inline-flex items-center rounded-lg border border-solid text-sm h-11 px-3 my-3 relative w-full text-zinc-400 focus-within:border-primary">
        <input
          type="text"
          className="outline-none border-none bg-transparent w-full h-full"
          maxLength={150}
          placeholder="태그를 입력하세요"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-4 mt-auto mb-4">
        <Button variant="secondary" className="flex-1">
          임시 저장
        </Button>
        <Button
          variant="default"
          className="flex-1 text-white font-semibold"
          onClick={() => {
            console.log('!!!', editor.children);
          }}
        >
          작성 하기
        </Button>
      </div>
    </div>
  );
};
