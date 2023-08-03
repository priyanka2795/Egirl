import React, { useState } from 'react';
import CardSlider from './CardSlider';

const cloudUrl = 'https://djjjk9bjm164h.cloudfront.net/';

const dataCard = [
  {
    img: `${cloudUrl}tender01.jpg`,
    // name: 'Korean Fried',
    // price: '20',
    // distance: '2'
  },
  {
    img: `${cloudUrl}tender02.jpg`,
    // name: 'Grilled',
    // price: '23',
    // distance: '5'
  },
  {
    img: `${cloudUrl}tender03.jpg`,
    // name: 'Fried',
    // price: '25',
    // distance: '11'
  },
  {
    img: `${cloudUrl}tender04.jpg`,
    // name: 'Deep Fried',
    // price: '23',
    // distance: '6'
  }
];

const Card = ({ data, onLike, onHate , zIndex , isActive ,animation}: any) => {
 
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [infoModal, setInfoModal] = useState(false);


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

  const cardStyle = {
    backgroundImage: `url(${data.img})`,
    transform: `translate3d(${moveX}px, ${moveY}px , 0) rotate(${(moveX / window.innerWidth) * 50}deg)`,
    // transition: isActive ? "transform 0.5s ease-out" : "",
    zIndex:  zIndex  // Set higher z-index for active card, 0 for others
  };

  return (
    <div
      className={`card ${isActive ? animation :''}`}
      style={cardStyle}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}

    >
      <CardSlider infoModalCard={infoModal} setInfoModalCard={setInfoModal} />
      <div className={`is-like ${moveX > 0 ? 'like' : 'nope'} ${Math.abs((moveX / innerWidth * 2.1))}`}
       ></div>
      {/* <div className='bottom'>
        <div className='title'>
          <span>{data.name}</span>
          <span>
            <b>$</b>
            {data.price}
          </span>
        </div>
        <div className='info'>{data.distance} miles away</div>
      </div> */}
    </div>
  );
};

const CardStack = () => {
    // const [startX, setStartX] = useState(0);
    // const [startY, setStartY] = useState(0);
    // const [moveX, setMoveX] = useState(0);
    // const [moveY, setMoveY] = useState(0);
    // const [isSwiping, setIsSwiping] = useState(false);
    // const [infoModal, setInfoModal] = useState(false);
  
  
    // const onPointerDown = (event: any) => {
    //   setStartX(event.clientX);
    //   setStartY(event.clientY);
    //   setIsSwiping(true);
    // };
  
    // const onPointerMove = (event: any) => {
    //   if (isSwiping) {
    //     setMoveX(event.clientX - startX);
    //     setMoveY(event.clientY - startY);
    //   }
    // };
  
    // const onPointerUp = () => {
    //   setIsSwiping(false);
    //   if (
    //     Math.abs(moveX) > window.innerWidth / 6 ||
    //     Math.abs(moveY) > window.innerHeight / 6
    //   ) {
    //     if (Math.abs(moveX) > Math.abs(moveY)) {
    //       if (moveX > 0) {
    //         onLike();
    //       } else {
    //         onHate();
    //       }
    //     }
    //   }
    //   setMoveX(0);
    //   setMoveY(0);
    // };
  
   
  

    // const Card = ({ data, onLike, onHate , zIndex , isActive ,animation}: any) => {
 
    //     const cardStyle = {
    //         backgroundImage: `url(${data.img})`,
    //         transform: `translate3d(${moveX}px, ${moveY}px , 0) rotate(${(moveX / window.innerWidth) * 50}deg)`,
    //         // transition: isActive ? "transform 0.5s ease-out" : "",
    //         zIndex:  zIndex  // Set higher z-index for active card, 0 for others
    //       };
    //     return (
    //       <div
    //         className={`card ${isActive ? animation :''}`}
    //         style={cardStyle}
    //         onPointerDown={onPointerDown}
    //         onPointerMove={onPointerMove}
    //         onPointerUp={onPointerUp}
    //         onPointerLeave={onPointerUp}
      
    //       >
    //         <CardSlider infoModalCard={infoModal} setInfoModalCard={setInfoModal} />
    //         <div className={`is-like ${moveX > 0 ? 'like' : 'nope'} ${Math.abs((moveX / innerWidth * 2.1))}`}
    //          ></div>
    //         {/* <div className='bottom'>
    //           <div className='title'>
    //             <span>{data.name}</span>
    //             <span>
    //               <b>$</b>
    //               {data.price}
    //             </span>
    //           </div>
    //           <div className='info'>{data.distance} miles away</div>
    //         </div> */}
    //       </div>
    //     );
    //   };

    const [cardData, setCardData] = useState(dataCard);
  const [currentCard, setCurrentCard] = useState(0);
  const [animation , setAnimation] = useState('');
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
              animation={animation}
              />              
            );      
        })}
      </div>
      <div className='icons'>      
        <div style={{}} id='hate' onClick={() => { setAnimation('right-animation'), onLike()}} className={animation}>Like</div>
        <div id='like' onClick={() => { setAnimation('left-animation'), onHate()}}  className={animation}>Hate</div>        
      </div>
    </div>
  );
};

export default CardStack;
