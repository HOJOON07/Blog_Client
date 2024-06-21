import React from 'react';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { Icons } from '@/components/icons';

export type TurnIntoItemType = {
  value: string;
  label: string;
  description: string;
  icon: any;
};
export const WorkspaceTurnIntoItems: TurnIntoItemType[] = [
  {
    value: ELEMENT_PARAGRAPH,
    label: 'Paragraph',
    description: 'Paragraph',
    icon: Icons.paragraph,
  },
  {
    value: ELEMENT_H1,
    label: 'Heading 1',
    description: 'Heading 1',
    icon: Icons.h1,
  },
  {
    value: ELEMENT_H2,
    label: 'Heading 2',
    description: 'Heading 2',
    icon: Icons.h2,
  },
  {
    value: ELEMENT_H3,
    label: 'Heading 3',
    description: 'Heading 3',
    icon: Icons.h3,
  },
  {
    value: 'ul',
    label: 'Bulleted list',
    description: 'Bulleted list',
    icon: Icons.ul,
  },
  {
    value: 'ol',
    label: 'Numbered list',
    description: 'Numbered list',
    icon: Icons.ol,
  },
  {
    value: ELEMENT_BLOCKQUOTE,
    label: 'Quote',
    description: 'Quote (⌘+⇧+.)',
    icon: Icons.blockquote,
  },
];
