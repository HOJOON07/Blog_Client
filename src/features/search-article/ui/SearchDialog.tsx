import { Dialog, DialogContent, DialogTitle, cn } from '@/shared';
import { type DialogProps } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';
interface CommandDialogProps extends DialogProps {}
export const SearchDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTitle hidden>Searh Command Dialog</DialogTitle>
      <DialogContent className="overflow-hidden p-0">{children}</DialogContent>
    </Dialog>
  );
};

export const SearchDialogInput = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center border-b px-3">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search Articles by title and description..."
        onChange={onChange}
      />
    </div>
  );
};

export const SearchDialogList = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    className="max-h-[300px] overflow-y-auto overflow-x-hidden"
    {...props}
  >
    {children}
  </div>
));

export const SearchDialogGroup = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
    {...props}
  >
    {children}
  </div>
));

export const SearchDialogGroupHeader = ({ heading }: { heading: string }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left text-xs px-2 pb-1 text-muted-foreground">
    {heading}
  </div>
);

export const SearchDialogItem = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; onClick: () => void }
>(({ children, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className="relative flex h-10 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 hover:bg-accent hover:text-accent-foreground"
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
));

export const SearchDialogEmptyItem = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => (
  <div ref={ref} className="py-6 text-center text-sm" {...props}>
    {children}
  </div>
));
