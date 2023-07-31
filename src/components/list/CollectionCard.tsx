import React, { useState } from 'react';
import blueTick from '../../../public/assets/badge-check.png';
import ThreeDotsIcon from '../../../public/assets/svgImages/three-dots.svg';
import Image from 'next/image';
import CardDropdown from './CardDropdown';
import CollectionFilterContent from './CollectionFilterContent';

interface CollectionCardProps {
  cardMainImg: any;
  characterName: string;
  cardImgClasses?: string;
  dropdownCardId?: any;
  getCardId?: any;
  cardId?: string;
  filterFunction?: any;
  subscription?: string;
}
const CollectionCard = ({
  cardMainImg,
  characterName,
  cardImgClasses,
  getCardId,
  dropdownCardId,
  cardId,
  filterFunction
}: CollectionCardProps) => {   
  const [filterByType , setFilterByType] = useState(false);
  let filterTitle = "";
  const handleFilterContent = (e:any) =>{
    setFilterByType(true);
    filterTitle= e.target.innerHTML;
  }
  
  return (<>
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
              getCardId(e.currentTarget.id);             
            }}
          >
            <ThreeDotsIcon />
          </div>
        )}
        {dropdownCardId === cardId ? (
          <>
            <CardDropdown closeDropdown={getCardId}/>
          </>
        ) :  null}
      </div>
      <div className='flex items-start w-full cursor-pointer'>     
          <div className='w-full gap-1 gap-2 p-4 text-sm font-semibold text-white ' onClick={(e) => filterFunction(e)}>
            {characterName}
          </div>        
      </div>
    </div>
  
    </>
  );
};

export default CollectionCard;
