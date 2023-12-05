import { useEffect, useState } from 'react';
import Image from 'next/image';
import arrowUp from '@/assets/arrow-up-white.webp';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    console.log('clicked');
  };

  return (
    <button
      className={`fixed bottom-10 right-7 z-[70] flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/[0.08] bg-[#121212] outline-none transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-100'
      }`}
      onClick={scrollToTop}
    >
      <Image src={arrowUp} alt='' />
    </button>
  );
};

export default ScrollToTopButton;
