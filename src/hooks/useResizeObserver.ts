import { RefObject, useEffect, useState } from 'react';
import { useIsMounted } from './useIsMounted';

interface Options<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T>;
}

export function useResizeObserver({ ref }: Options) {
  const [width, setWidth] = useState();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === 'undefined' || 'ResizeObserver' in window) return;

    const observer = new ResizeObserver(([entry]) => {
      console.log(entry.contentBoxSize);
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
}
