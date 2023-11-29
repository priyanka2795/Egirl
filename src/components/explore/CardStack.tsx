import React, { useState } from 'react';
import CardSlider from './CardSlider';

const cloudUrl = 'https://djjjk9bjm164h.cloudfront.net/';

const dataCard = [
  {
    img: `${cloudUrl}tender01.jpg`,
  },
  {
    img: `${cloudUrl}tender02.jpg`,
  },
  {
    img: `${cloudUrl}tender03.jpg`,
  },
  {
    img: `${cloudUrl}tender04.jpg`,
  }
];

interface CardStackprops {
  showSingleProfile:  React.Dispatch<React.SetStateAction<boolean>>
}
const Card = ({ data, onLike, onHate , zIndex , isActive ,showSingleProfile}: any) => {
 
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [animation , setAnimation] = useState('');

  const onPointerDown = (event: any) => {
    setStartX(event.clientX);
    setStartY(event.clientY);
    setIsSwiping(true);
  };

  const onPointerMove = (event: any) => {
    if (isSwiping) {
      setMoveX(event.clientX - startX);
      setMoveY(event.clientY - startY);
    }
    // console.log(moveX , 'moveX')
    // console.log(moveY , 'moveY')
  };

  const onPointerUp = () => {
    setIsSwiping(false);
    if (
      Math.abs(moveX) > window.innerWidth / 6 ||
      Math.abs(moveY) > window.innerHeight / 6
    ) {
      if (Math.abs(moveX) > Math.abs(moveY)) {
        if (moveX > 0) {
          onLike();
        } else {         
          onHate();
        }
      }
    }
    setMoveX(0);
    setMoveY(0);
  };

  const handleLikeBtn =() => {
    setIsSwiping(true);
    setAnimation('animation-added-right');
  }

  const handleHateBtn = () => {
    setIsSwiping(true);
    setAnimation('animation-added-left');
  }

  const cardStyle = {
    backgroundImage: `url(${data.img})`,
    transform: `translate3d(${moveX}px, ${moveY}px , 0) rotate(${(moveX / window.innerWidth) * 50}deg)`,
    zIndex:  zIndex  
  };
  // const cardContent = isActive && moveY < 0 ? 'Test' : '';

  return (
    <div
      className={`card ${animation}`}
      style={cardStyle}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <CardSlider
        infoModalCard={infoModal}
        setInfoModalCard={setInfoModal}
        showSingleProfile={showSingleProfile}
      />
      
      <div className={`is-like ${moveX > 0 || animation === "animation-added-right" ? 'like' : moveX < 0 || animation === "animation-added-left" ? 'nope': ''} ${Math.abs((moveX / innerWidth * 2.1))}`}
       ></div>
      <div className='relative w-full h-[84px] mb-6'>
        <div id='like' className="w-[84px] h-full absolute right-[61px] z-50" onClick={handleLikeBtn}/>        
        <div id='hate' className="w-[84px] h-full absolute left-[61px] z-50" onClick={handleHateBtn}/>
      </div>
      {/* <div className="card-content">{cardContent}</div> */}
    </div>
  );
};

const CardStack = ({showSingleProfile}: CardStackprops ) => {
   
  const [cardData, setCardData] = useState(dataCard);
  const [currentCard, setCurrentCard] = useState(0);

  let cards=[];
  const onLike = () => {   
    setCurrentCard((prevCard) => (prevCard + 1) % cardData.length );
    cards = [...cardData] 
    cards.shift();
    setCardData(cards)  
    setCurrentCard(0)
  };

  const onHate = () => { 
    setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);  
    cards = [...cardData] 
    cards.shift();
    setCardData(cards) 
    setCurrentCard(0)
  };

  return (
    <div className='card-holder'>
      <div className='frame'>
        {cardData.map((item, index) => {       
            return (                
              <Card 
              key={index} 
              data={item} 
              onLike={onLike} 
              onHate={onHate}
              zIndex={cardData.length-index} 
              isActive = {index === currentCard}         
              showSingleProfile={showSingleProfile}  
              />              
            );      
        })}
      </div>
    </div>
  );
};

export default CardStack;
