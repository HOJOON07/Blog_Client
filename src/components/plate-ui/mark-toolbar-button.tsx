'use client';

import React from 'react';

import { withRef } from '@udecode/cn';
import {
  useMarkToolbarButton,
  useMarkToolbarButtonState,
} from '@udecode/plate-common';

import { ToolbarButton } from './toolbar';

export const MarkToolbarButton = withRef<
  typeof ToolbarButton,
  {
    clear?: string | string[];
    nodeType: string;
  }
>(({ clear, nodeType, ...rest }, ref) => {
  const state = useMarkToolbarButtonState({ clear, nodeType });
  const {
    props: { pressed, onClick, onMouseDown },
  } = useMarkToolbarButton(state);
  return (
    <ToolbarButton
      ref={ref}
      onClick={onClick}
      onMouseDown={onMouseDown}
      pressed={pressed}
      {...rest}
    ></ToolbarButton>
  );
});
