import { useEffect, useRef } from 'react';

//https://usehooks-ts.com/react-hook/use-on-click-outside
function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () =>
      document.removeEventListener('mousedown', handleOutsideClick);
  }, [callback, ref]);

  return ref;
}

export default useOutsideClick;
