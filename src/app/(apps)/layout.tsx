import { Navigation } from '@/widgets/main-navigation';
import React from 'react';

export default function GroupLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      {modal}
    </>
  );
}
