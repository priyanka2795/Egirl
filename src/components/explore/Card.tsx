import React, { useEffect, useMemo, useRef, useState } from 'react';
// import TinderCard from 'react-tinder-card';
import cardImg from '../../../public/assets/explore/explore-img.png';
import Image from 'next/image';

import RedCloseIcon from './svg/red-cross-icon.svg';
import UserIcon from './svg/user-icon.svg';
import GreenHeartIcon from './svg/green-heart-icon.svg';
import VerifiedIcon from './svg/verified-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import dynamic from 'next/dynamic';
const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});

const db = [
  {
    name: 'Richard Hendricks',
    image: cardImg
  },
  {
    name: 'Erlich Bachman',
    image: cardImg
  },
  {
    name: 'Monica Hall',
    image: cardImg
  },
  {
    name: 'Jared Dunn',
    image: cardImg
  },
  {
    name: 'Dinesh Chugtai',
    image: cardImg
  }
];

type Direction = 'left' | 'right' | 'up' | 'down';

export interface API {
  swipe(dir?: Direction): Promise<void>;
  restoreCard(): Promise<void>;
}

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
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

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {window &&
          typeof window !== 'undefined' &&
          db.length > 0 &&
          db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className='swipe'
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <Image src={character.image} alt='' />
              <h3>{character.name}</h3>
            </TinderCard>
          ))}
      </div>

      <div className='buttons'>
        <button className='' onClick={() => swipe('left')}>
          Swipe left!
        </button>
        <button onClick={() => goBack()}>Undo swipe!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
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
  );
};

export default Card;
