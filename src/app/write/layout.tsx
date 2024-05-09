import { cn } from '@udecode/cn';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        '[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10',
      )}
    >
      <TooltipProvider
        disableHoverableContent
        delayDuration={200}
        skipDelayDuration={0}
      >
        {children}
      </TooltipProvider>
    </div>
  );
}
