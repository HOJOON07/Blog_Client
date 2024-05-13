import { cn } from '@udecode/cn';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      {children}
    </TooltipProvider>
  );
}
