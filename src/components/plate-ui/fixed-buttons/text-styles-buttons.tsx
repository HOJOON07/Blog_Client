import { useEditorRef } from '@udecode/plate-common';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from '../dropdown-menu';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { Icons, iconVariants } from '@/components/icons';
import { ToolbarButton } from '../toolbar';
import { MARK_BG_COLOR, MARK_COLOR } from '@udecode/plate-font';
import { MarkToolbarButton } from '../mark-toolbar-button';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { ColorDropdownMenu } from '../color-dropdown-menu';

const items = [
  {
    nodeType: MARK_BOLD,
    label: 'Bold',
    description: 'Bold',
    icon: Icons.bold,
    tooltip: 'Bold (⌘+B)',
    isDropDown: false,
  },
  {
    nodeType: MARK_ITALIC,
    label: 'Italic',
    description: 'Italic',
    icon: Icons.italic,
    tooltip: 'Italic (⌘+I)',
    isDropDown: false,
  },
  {
    description: 'Underline',
    icon: Icons.underline,
    label: 'Underline',
    nodeType: MARK_UNDERLINE,
    tooltip: 'Underline (⌘+U)',
    isDropDown: false,
  },
  {
    description: 'StrikeThrough',
    icon: Icons.strikethrough,
    label: 'StrikeThrough',
    nodeType: MARK_STRIKETHROUGH,
    tooltip: 'Strikethrough (⌘+⇧+M)',
    isDropDown: false,
  },
  {
    description: 'Code',
    icon: Icons.code,
    label: 'Code',
    nodeType: MARK_CODE,
    tooltip: 'Code (⌘+E)',
    isDropDown: false,
  },
  {
    description: 'Text Color',
    icon: Icons.color,
    label: 'Text Color',
    nodeType: MARK_COLOR,
    tooltip: 'Text Color',
    isDropDown: true,
  },
  {
    description: 'Highlight Color',
    icon: Icons.bg,
    label: 'Highlight Color',
    nodeType: MARK_BG_COLOR,
    tooltip: 'Highlight Color',
    isDropDown: true,
  },
];

export default function TextStylesButtons(props: DropdownMenuProps) {
  const openState = useOpenState();

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          isDropdown
          pressed={openState.open}
          tooltip="Text Styles"
        >
          <Icons.textStyles />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
      >
        <DropdownMenuLabel>Text Styles</DropdownMenuLabel>
        {items.map(
          ({ nodeType, label, icon: Icon, description, tooltip, isDropDown }) =>
            isDropDown === true ? (
              <ColorDropdownMenu
                nodeType={nodeType}
                tooltip={tooltip}
                key={description}
                className="w-full justify-start gap-[10px]"
              >
                <Icon className={iconVariants({ variant: 'toolbar' })} />
                {label}
              </ColorDropdownMenu>
            ) : (
              <MarkToolbarButton
                tooltip={tooltip}
                nodeType={nodeType}
                className="w-full justify-start"
                key={description}
              >
                <Icon className="mr-2 size-5" />
                {label}
              </MarkToolbarButton>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
