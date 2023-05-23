import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState<number>(window.pageYOffset);
  const [direction, setDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (lastScrollY < currentScrollY) {
        setDirection('down');
      } else if (lastScrollY > currentScrollY) {
        setDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // this effect depends on the lastScrollY state

  return direction;
};

export default useScrollDirection;
