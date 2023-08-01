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
  const [removingCard, setRemovingCard] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const [TinderCard, setTinderCard] = useState<any>();
  const [removedDirectionState, setRemovedDirectionState] = useState('');
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

  const swiped = (direction: any, nameToDelete: any, index: any) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    console.log(direction , "derwererfsefrf" )
  };


  useEffect(() => {
    setInitialRenderComplete(true);
    if (typeof window !== 'undefined') {
      const tinderCard = require('react-tinder-card');
      setTinderCard(tinderCard);
    }
  }, []);
  const outOfFrame = (name: any, idx: any) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: any) => {
    console.log(dir, 'dir test');
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const removeCard = (dir: any, index: number) => {
    setRemovingCard(index);
    setRemovedDirectionState(dir);
  };
  // console.log('direction', removedDirectionState);

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  if (!initialRenderComplete) return <></>;

  return (
    <div className='mt-[40px]'>
      <div className='app-test mx-auto flex w-full max-w-[600px] flex-col items-center justify-center'>
        <div className='cardContainer'>
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className='swipe'
              key={character.name}
              onSwipe={(dir: any) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{
                  backgroundImage: `url(${cardImg.src})`,
                  width: '437px',
                  height: '735px'
                }}
                className={`card relative ${removingCard}`}
              >
                {removingCard === index ? (
                 <div className="absolute top-0 right-0 w-full h-full ml-auto">
                 <div className='flex items-center justify-start h-24 gap-4 px-8 py-5 border-2 border-orange-700 w-44 rounded-3xl rotate-[12deg] ml-auto mr-5 mt-[47px]'>
                    <div className='text-4xl font-bold text-orange-700 uppercase'>
                      Nope
                    </div>
                  </div>
                 </div>
                ) : (                 
                  <></>
                )} 
                <CardSlider />

                <button
                  className='margin-0 z-7 absolute top-0 z-30 h-[525px] w-[100%] rounded-full'
                  onClick={(dir) => removeCard(dir, index)}
                ></button>
              </div>
            </TinderCard>
          ))}
        </div>

        <div className='buttons !mt-[-108px] flex h-[84px] w-[342px] opacity-0'>
          <button
            className='margin-0 z-30 h-[84px] w-[84px] rounded-full '
            onClick={() => swipe('left')}
          >
            Swipe left!
          </button>
          {/* <button className="h-[84px] w-[84px] rounded-full margin-0 z-0" onClick={() => goBack()}>Undo swipe!</button> */}
          <button
            className='margin-0 z-30 h-[84px] w-[84px] rounded-full '
            onClick={() => swipe('right')}
          >
            Swipe right!
          </button>
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
