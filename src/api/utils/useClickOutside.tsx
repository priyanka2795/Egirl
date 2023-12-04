import { useEffect, useRef, useState } from 'react';

const useClickOutside = <T extends HTMLElement>(
  initialState: boolean
): { ref: React.RefObject<T>; isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> } => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
};

export default useClickOutside;
