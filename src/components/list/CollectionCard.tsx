import React, { useState } from 'react';
import blueTick from '../../../public/assets/badge-check.png';
import ThreeDotsIcon from '../../../public/assets/svgImages/three-dots.svg';
import Image from 'next/image';
import CardDropdown from './CardDropdown';

interface CollectionCardProps {
  cardMainImg: any;
  characterName: string;
  cardImgClasses?: string;
  dropdownState?: boolean;
  toggleDropdown?: any;
  cardId?: string;
}
const CollectionCard = ({
  cardMainImg,
  characterName,
  cardImgClasses,
  toggleDropdown,
  dropdownState,
  cardId
}: CollectionCardProps) => {
  const [selectedCardId, setSelectedCardId] = useState('');
  return (
    <div className='flex flex-col items-start self-stretch overflow-hidden group rounded-2xl bg-white/10'>
      <div
        className={`flex h-full max-h-[180px] w-full justify-center self-stretch overflow-hidden ${cardImgClasses}`}
      >
        <Image className='object-cover' src={cardMainImg} alt={''} />
        {cardImgClasses && (
          <div
            id={`${cardId}`}
            className='${cardId} invisible absolute right-[15px] top-3 flex h-10 w-10 cursor-pointer items-start justify-start gap-3.5 rounded-full bg-black bg-opacity-40 p-2 opacity-0 group-hover:visible group-hover:opacity-100'
            onClick={(e) => {
              toggleDropdown(!dropdownState);
              setSelectedCardId(e.currentTarget.id);
            }}
          >
            <ThreeDotsIcon />
          </div>
        )}
        {dropdownState === true && cardId === selectedCardId ? (
          <>
            <CardDropdown />
            {console.log(selectedCardId)}
          </>
        ) : null}
      </div>
      <div className='flex flex-col items-start self-stretch gap-2 p-4'>
        <div className='flex items-center self-stretch gap-1'>
          <div className='text-sm font-semibold text-[#FFFFFF]'>
            {characterName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
