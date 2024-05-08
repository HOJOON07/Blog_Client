// 'use client';

// import { ThemeProvider } from '@/theme/theme-provider';
// import { usePathname } from 'next/navigation';

// interface Props {
//   children: React.ReactNode;
// }

// export const ColorModeProvider = ({ children }: Props) => {
//   const pathname = usePathname();

//   const forcedThemeFromPathname = pathname === '/' ? 'dark' : undefined;
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="light"
//       enableSystem
//       disableTransitionOnChange
//       forcedTheme={forcedThemeFromPathname}
//     >
//       {children}
//     </ThemeProvider>
//   );
// };

'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();
  const forcedThemeFromPathname = pathname === '/' ? 'dark' : undefined;

  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      forcedTheme={forcedThemeFromPathname}
    >
      {children}
    </NextThemesProvider>
  );
}
