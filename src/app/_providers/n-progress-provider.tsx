// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const ProgressProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#5b21b6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
