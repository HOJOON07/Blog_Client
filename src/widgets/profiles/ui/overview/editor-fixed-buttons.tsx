import React from 'react';

import { useEditorReadOnly } from '@udecode/plate-common';
import { ListStyleType } from '@udecode/plate-indent-list';
import { EmojiDropdownMenu } from '@/components/plate-ui/emoji-dropdown-menu';
import { IndentListToolbarButton } from '@/components/plate-ui/indent-list-toolbar-button';
import { IndentToolbarButton } from '@/components/plate-ui/indent-toolbar-button';
import { MoreDropdownMenu } from '@/components/plate-ui/more-dropdown-menu';
import { OutdentToolbarButton } from '@/components/plate-ui/outdent-toolbar-button';
import { TableDropdownMenu } from '@/components/plate-ui/table-dropdown-menu';
import { ToolbarGroup } from '@/components/plate-ui/toolbar';
import { InsertDropdownMenu } from '@/components/plate-ui/insert-dropdown-menu';
import { TurnIntoDropdownMenu } from '@/components/plate-ui/turn-into-dropdown-menu';
import TextStylesButtons from '@/components/plate-ui/fixed-buttons/text-styles-buttons';
import { ProfilesInsertItems } from '@/widgets/profiles';

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: 'translateX(calc(-1px))',
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <InsertDropdownMenu items={ProfilesInsertItems} />
              <TurnIntoDropdownMenu />
              <TextStylesButtons />
            </ToolbarGroup>

            <ToolbarGroup>
              <IndentListToolbarButton nodeType={ListStyleType.Disc} />
              <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
              <TableDropdownMenu />
              <EmojiDropdownMenu />
              <MoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}
        <div className="grow" />
      </div>
    </div>
  );
}
