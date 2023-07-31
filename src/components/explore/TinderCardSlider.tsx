import React, { useState, useRef, useMemo, useEffect } from 'react';
// import TinderCard from 'react-tinder-card';
import mikaChanImg from '../../../public/assets/mikaChan.png';
import cardImg from '../../../public/assets/explore/explore-img.png';
import Image from 'next/image';
import CardSlider from './CardSlider';

const db = [
  {
    name: 'Richard Hendricks',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
  },
  {
    name: 'Erlich Bachman',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
    // url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
    // url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
    // url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
    // url: './img/dinesh.jpg'
  }
];
const TinderCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [TinderCard, setTinderCard] = useState<any>();
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo<React.RefObject<any>[]>(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: any) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction: any, nameToDelete: any, index: any) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };
 
  
  useEffect(() => {
    setInitialRenderComplete(true);
    if (typeof window !== 'undefined') {
    const tinderCard  = require('react-tinder-card');
    setTinderCard(tinderCard)
    }
    
  }, []);
  const outOfFrame = (name: any, idx: any) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir: any) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  if (!initialRenderComplete) return <></>;
 
  return (
<div className="mt-[99px]">
<link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
    <div className="flex flex-col items-center justify-center app-test">    
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir:any) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
             style={{
              backgroundImage: `url(${cardImg.src})`,
              width: '437px',
              height: '735px',
            }}
              className='relative card'
            >
            <CardSlider/>
              {/* <h3>{character.name}</h3> */}
            </div>
          </TinderCard>
        ))}
      </div>

      <div className='flex buttons !mt-[-108px] w-[342px] h-[84px] opacity-0'>
        <button className="h-[84px] w-[84px] rounded-full margin-0 z-30 " onClick={() => swipe('left')}>Swipe left!</button>
        <button className="h-[84px] w-[84px] rounded-full margin-0 z-0" onClick={() => goBack()}>Undo swipe!</button>
        <button className="h-[84px] w-[84px] rounded-full margin-0 z-30 " onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
   </div>
  );
};

export default TinderCardSlider;
