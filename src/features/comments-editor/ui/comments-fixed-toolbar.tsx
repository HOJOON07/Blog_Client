import { Toolbar } from '@/components/plate-ui/toolbar';
import { withCn } from '@udecode/cn';

export const CommentsFixedToolbar = withCn(
  Toolbar,
  'supports-backdrop-blur:bg-background/60 sticky left-0 top-0 z-50 w-full justify-between overflow-x-auto rounded-t-lg bg-background/95 backdrop-blur',
);
