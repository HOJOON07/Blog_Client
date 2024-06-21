import { Icons } from '@/components/icons';
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block';
import { ELEMENT_EXCALIDRAW } from '@udecode/plate-excalidraw';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';
import { ELEMENT_LINK } from '@udecode/plate-link';
import { ELEMENT_TODO_LI } from '@udecode/plate-list';
import { ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from '@udecode/plate-media';
import { ELEMENT_TABLE } from '@udecode/plate-table';
import { LucideProps } from 'lucide-react';
import { ReactNode, SVGProps } from 'react';

type ItemType = {
  value: string;
  label: string;
  description: string;
  icon: any;
};

export type ItmesGroup = {
  items: ItemType[];
  label: string;
};

export const CommentsInsertItems: ItmesGroup[] = [
  {
    items: [
      {
        value: ELEMENT_TABLE,
        label: 'Table',
        description: 'Table',
        icon: Icons.table,
      },
      {
        value: ELEMENT_HR,
        label: 'Divider',
        description: 'Divider (---)',
        icon: Icons.hr,
      },
      {
        description: 'Todo',
        icon: Icons.todo,
        label: 'Todo',
        value: ELEMENT_TODO_LI,
      },
    ],
    label: 'Utils Block',
  },
  {
    label: 'Media',
    items: [
      {
        value: ELEMENT_CODE_BLOCK,
        label: 'Code',
        description: 'Code (```)',
        icon: Icons.codeblock,
      },
      {
        value: ELEMENT_IMAGE,
        label: 'Image',
        description: 'Image',
        icon: Icons.image,
      },
      {
        value: ELEMENT_MEDIA_EMBED,
        label: 'Embed',
        description: 'Embed',
        icon: Icons.embed,
      },
      {
        value: ELEMENT_EXCALIDRAW,
        label: 'Excalidraw',
        description: 'Excalidraw',
        icon: Icons.excalidraw,
      },
    ],
  },
  {
    label: 'Inline',
    items: [
      {
        value: ELEMENT_LINK,
        label: 'Link',
        description: 'Link',
        icon: Icons.link,
      },
    ],
  },
];
