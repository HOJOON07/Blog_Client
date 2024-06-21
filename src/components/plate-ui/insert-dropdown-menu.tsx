'use client';

import React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import {
  focusEditor,
  insertEmptyElement,
  useEditorRef,
} from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { Icons } from '@/components/icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from './toolbar';
import {
  ELEMENT_CODE_BLOCK,
  insertEmptyCodeBlock,
} from '@udecode/plate-code-block';
import {
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  insertMedia,
} from '@udecode/plate-media';
import { ELEMENT_TODO_LI } from '@udecode/plate-list';
import { ELEMENT_TABLE, insertTable } from '@udecode/plate-table';
import { ELEMENT_LINK, triggerFloatingLink } from '@udecode/plate-link';
import { ELEMENT_EXCALIDRAW } from '@udecode/plate-excalidraw';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';
import { ItmesGroup } from '@/features/comments-editor/model/comments-insert-dropdown';

export function InsertDropdownMenu({ items }: { items: ItmesGroup[] }) {
  const editor = useEditorRef();
  const openState = useOpenState();
  const props: DropdownMenuProps = {};

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton isDropdown pressed={openState.open} tooltip="Insert">
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ icon: Icon, label: itemLabel, value: type }) => (
                <DropdownMenuItem
                  className="min-w-[180px]"
                  key={type}
                  onSelect={async () => {
                    switch (type) {
                      case ELEMENT_CODE_BLOCK: {
                        insertEmptyCodeBlock(editor);

                        break;
                      }
                      case ELEMENT_IMAGE: {
                        await insertMedia(editor, { type: ELEMENT_IMAGE });

                        break;
                      }
                      case ELEMENT_MEDIA_EMBED: {
                        await insertMedia(editor, {
                          type: ELEMENT_MEDIA_EMBED,
                        });

                        break;
                      }
                      case 'ul':
                      case 'ol': {
                        insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                          select: true,
                          nextBlock: true,
                        });
                        break;
                      }
                      case ELEMENT_TABLE: {
                        insertTable(editor);

                        break;
                      }
                      case ELEMENT_LINK: {
                        triggerFloatingLink(editor, { focused: true });

                        break;
                      }
                      default: {
                        insertEmptyElement(editor, type, {
                          nextBlock: true,
                          select: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className="mr-2 size-5" />
                  {itemLabel}
                </DropdownMenuItem>
              ),
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
