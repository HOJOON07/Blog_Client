import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export const useEscapePreview = (handleEscape: () => void) => {
  const handleESCKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleEscape();
      }
    },
    [handleEscape],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleESCKey, false);

    return () => {
      document.removeEventListener('keyup', handleESCKey, false);
    };
  }, [handleESCKey]);
};
