import { CopyIcon } from '@radix-ui/react-icons';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
  IconList,
  Input,
  Label,
} from '@/shared';
import React from 'react';

export function SocialIconsDialog({
  name,
  src,
}: {
  name: IconList;
  src: string;
}) {
  const copyToClipboard = async (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="smallIcon" variant="secondary" className="rounded-sm">
          <Icon name={name} color="text-zinc-500" size={5} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Social Link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={src} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => copyToClipboard(src)}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
