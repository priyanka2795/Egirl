import React, { useState, useRef, useMemo, useEffect } from 'react';
import mikaChanImg from '../../../public/assets/mikaChan.png';
import cardImg from '../../../public/assets/explore/explore-img.png';
import CardSlider from './CardSlider';
import TinderLikeBtn from './TinderLikeBtn';
import TinderNopeBtn from './TinderNopeBtn';
import SubscriptionPlan from './SubscriptionPlan';

const db = [
  {
    name: 'Richard Hendricks',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg  },
  {
    name: 'Erlich Bachman',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg    
  },
  {
    name: 'Monica Hall',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg    
  },
  {
    name: 'Jared Dunn',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
  },
  {
    name: 'Dinesh Chugtai',
    url: '../../../public/assets/mikaChan.png',
    userImg: mikaChanImg
  }
];
const TinderCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [removingCard, setRemovingCard] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const [removeCardIndex, setRemoveCardIndex] = useState(-1);
  const [TinderCard, setTinderCard] = useState<any>();
  const [removedDirectionState, setRemovedDirectionState] = useState('');
  const [checkForDrag , setCheckForDrag] = useState(-1);
  const [checkSecondaryDrag, setCheckSecondaryDrag] = useState(-1)
  const [infoModal , setInfoModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    left: '',
    top: ''
    })
  const [subscriptionModalState, setSubscriptionModalState] = useState(false);
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
    // console.log(direction, 'derwererfsefrf');
    setRemoveCardIndex(index);
  };

  useEffect(() => {
    setInitialRenderComplete(true);
    if (typeof window !== 'undefined') {
      const tinderCard = require('react-tinder-card');
      setTinderCard(tinderCard);
    }
  }, []);
  const outOfFrame = (name: any, idx: any) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: any) => {
    console.log(dir, 'dir test');
    // setLastDirection(dir);
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const removeCard = (direction: any, index: number) => {
    setRemovingCard(index);
    setRemovedDirectionState(direction);
    console.log('removed card', removedDirectionState);
    setRemoveCardIndex(index);
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  const preventHold = (event: any) => {
    event.preventDefault();
  };

  const mouseDown =(e:any) =>{
    setCheckForDrag(e.clientX);
  //  console.log('test mouseDown')
  }

  const mouseUp =(e:any) =>{
    setCheckSecondaryDrag(e.clientX);
    console.log(e.clientX , "mouse up")
    if(checkForDrag > checkSecondaryDrag){
      swipe('left')
    }else if(checkForDrag < checkSecondaryDrag){
      swipe('right')
    }else{
      null
    }
   
    // console.log('test Up key' , checkForDrag , checkSecondaryDrag)
   }
   const mouseLeave = (e:any)=>{
    // console.log('mouse leave fire')
   }
 
 const MouseOver= function(event:any) {
  console.log("inside mouse over")
    setMousePosition({
    left: event.pageX,
    top: event.pageY
          });
  }
  console.log(mousePosition)
  const updatedTransform = { 
    transform: `translate3d(${mousePosition.left}px, ${mousePosition.top}px , 0px) rotate(20deg) !important` ,
    background: 'red'
};


  if (!initialRenderComplete) return <></>;

  return (<>
    <div className='mt-[40px]'>
      <div className='app-test mx-auto flex w-full max-w-[600px] flex-col items-center justify-center relative'>
        <div className='cardContainer'>
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className={`swipe ${
                removeCardIndex === index ? lastDirection : ''
              }`}
              style={
                updatedTransform                
                // transform: `translate3d(${mousePosition.left}, ${mousePosition.top}, 0px) rotate(20deg) !important`,
                // transform: `translate(${mousePosition.left}px, ${mousePosition.top}px) rotate(20deg) !important` 
              }
              key={character.name}
              onSwipe={(dir: any) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
              // draggable={false}
            >
              <div
                draggable={false}
                onContextMenu={preventHold} // Disable context menu (right-click) which can initiate holding behavior on some devices
                onPointerDown={preventHold} // Disable touch event that initiates holding behavior
                onPointerMove={preventHold} // Disable touch move event
                onMouseDown={preventHold} // Disable mouse down event
                style={updatedTransform}
                className={`card relative ${removingCard}`}
              >
                {lastDirection === 'left'
                  ? removeCardIndex === index && (                    
                      <TinderNopeBtn/>
                    )
                  : lastDirection === 'right'
                  ? removeCardIndex === index && (
                      <TinderLikeBtn/>
                    )
                  : null}
                <CardSlider infoModalCard={infoModal} setInfoModalCard={setInfoModal}/>

              
              </div>
              {/* <button
                  className='margin-0 z-7 absolute top-0 z-30 h-[525px] w-[100%] rounded-full'               
                  // onClick={() => swipe('left')}
                  onMouseDown={(e) => mouseDown(e)} onMouseUp={(e:any) => mouseUp(e)}
                ></button>  */}
            </TinderCard>
          ))}
        </div>

        <div className='card-bottom-button buttons !mt-[-108px] flex h-[84px] w-[342px] opacity-0'>
          <button
            className='margin-0 z-30 h-[84px] w-[84px] rounded-full '
            onClick={() => swipe('left')}
          >
            Swipe left!
          </button>
          <button className="h-[84px] w-[84px] rounded-full margin-0 z-0" onClick={() =>{setSubscriptionModalState(true)}}>Undo swipe!</button>
          <button
            className='margin-0 z-30 h-[84px] w-[84px] rounded-full '
            onClick={() => swipe('right')}
          >
            Swipe right!
          </button>
        </div>
     
      <div className="absolute top-0 left-0 w-full h-[520px]" 
      onMouseDown={(e) => mouseDown(e)} 
      onMouseUp={(e:any) => mouseUp(e)}  
      onMouseLeave={(e:any) => mouseLeave(e)}
      onMouseOver={(e:any) => MouseOver(e)}
      ></div>
      </div>
    </div>

    {
      subscriptionModalState &&
    <SubscriptionPlan closeDefaulModal={setSubscriptionModalState} />
    }
    
</>
  );
};

export default TinderCardSlider;
