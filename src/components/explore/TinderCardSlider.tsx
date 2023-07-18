import React, { useState, useRef, useMemo, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import mikaChanImg from '../../../public/assets/mikaChan.png';

const db = [
  {
    name: 'Richard Hendricks',
    url: '../../../public/assets/mikaChan.png'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
];
const TinderCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
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
  const newTinderCard = useMemo(( ) => {
    { console.log(window , 'test')}
    {typeof window !== undefined ? (
      <>
     
       <TinderCard
         ref={childRefs[0]}
         className='swipe'
         key={character.name}
         onSwipe={(dir) => swiped(dir, "Richard Hendricks", 0)}
         onCardLeftScreen={() => outOfFrame("Richard Hendricks", 0)}
       >
         <div
          //  style={{ backgroundImage: 'url(' + "../../../public/assets/mikaChan.png" + ')' }}
           className='card'
         >
           <h3>{"Richard Hendricks"}</h3>
         </div>
       </TinderCard>
      </>
       
     ) : null}
  },[])
  
  useEffect(() => {
    setInitialRenderComplete(true);
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
    <div>
      {/* <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      /> */}
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <>
          {typeof window !== undefined &&
          newTinderCard
          }
          {/* {newTinderCard} */}
            {/* {typeof window !== undefined ? (
             <>
             { console.log(window , 'test')}
              <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  className='card'
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
             </>
              
            ) : null} */}
          </>
        ))}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
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

export default TinderCardSlider;
