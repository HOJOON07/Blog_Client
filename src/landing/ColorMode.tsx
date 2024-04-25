'use client';

import Icon from '@/components/icon/Icon';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface ColorMode {
  dark: string;
  light: string;
}

const colorMode: ColorMode = {
  dark: 'moon',
  light: 'sun',
};

export default function ColorMode() {
  const { theme, setTheme } = useTheme();

  const colorHandle = (theme: string | undefined) => {
    if (theme === 'light') {
      return 'dark';
    } else {
      return 'light';
    }
  };

  return (
    <div
      onClick={() => setTheme(colorHandle(theme))}
      className="cursor-pointer"
    >
      {theme === 'light' ? <Icon name="sun" /> : <Icon name="moon" />}
    </div>
  );
}
