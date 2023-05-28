// import React, { useEffect, useState, useRef } from 'react';

// const useScroll = () => {
//   const [lastScrollY, setLastScrollY] = useState<number>(window.pageYOffset);
//   const [sticky, setSticky] = useState<boolean>(false);
//   const [animate, setAnimate] = useState<boolean>(false);

//   const navHeight = 108;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.pageYOffset;

//       // scrolled past nav
//       if (currentScrollY > navHeight) {
//         setAnimate(true);
//         console.log('can animate');
//       } else {
//         setAnimate(false);
//         console.log('can not animate');
//       }

//       // scrolled up or down
//       if (currentScrollY > lastScrollY) {
//         setSticky(false);
//         console.log('not sticky');
//       } else {
//         setSticky(true);
//         console.log('sticky');
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return [sticky, animate];
// };

// export default useScroll;

import React, { useEffect, useState, useRef } from 'react';

const useScroll = () => {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [sticky, setSticky] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const navHeight = 108;

  useEffect(() => {
    setLastScrollY(window.pageYOffset);

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // scrolled past nav
      if (currentScrollY > navHeight) {
        setAnimate(true);
        console.log('can animate');
      } else {
        setAnimate(false);
        console.log('can not animate');
      }

      // scrolled up or down
      if (currentScrollY > lastScrollY) {
        setSticky(false);
        console.log('not sticky');
      } else {
        setSticky(true);
        console.log('sticky');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return [sticky, animate];
};

export default useScroll;
