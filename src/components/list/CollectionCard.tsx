import React, { useState } from 'react';
import blueTick from '@/assets/badge-check.webp';
import ThreeDotsIcon from '@/assets/svgImages/three-dots.svg';
import Image from 'next/image';
import CardDropdown from './CardDropdown';
import CollectionFilterContent from './CollectionFilterContent';

interface CollectionCardProps {
  cardMainImg: any;
  characterName: string;
  cardImgClasses?: string;
  imageDropdownId?: any;
  setImageDropdownId?: any;
  cardId?: number | undefined;
  filterFunction?: any;
  subscription?: string;
  setShowRealistic: any;
  collectionId?:number
}
const CollectionCard = ({
  cardMainImg,
  characterName,
  cardImgClasses,
  setImageDropdownId,
  imageDropdownId,
  cardId,
  filterFunction,
  setShowRealistic,
  collectionId
}: CollectionCardProps) => {   
  const [filterByType , setFilterByType] = useState(false);
  let filterTitle = "";
  const handleFilterContent = (e:any) =>{
    setFilterByType(true);
    filterTitle= e.target.innerHTML;
  }

  const handleDropDownId = (cardId:number | undefined)=>{
    setImageDropdownId((prev :any) => (prev === cardId ? null : cardId))
  }
  
  return (<>
    <div className='flex flex-col items-start self-stretch overflow-hidden group rounded-2xl bg-white/10'>
      <div
        className={`flex h-full max-h-[180px] w-full justify-center self-stretch overflow-hidden ${cardImgClasses}`}
      >
        <Image className='object-cover' src={cardMainImg} alt={''}  onClick={() => {setShowRealistic(true)}}/>
        {cardImgClasses && (
          <div
            id={`${cardId}`}
            className='${cardId} invisible absolute right-[15px] top-3 flex h-10 w-10 cursor-pointer items-start justify-start gap-3.5 rounded-full bg-black bg-opacity-40 p-2 opacity-0 group-hover:visible group-hover:opacity-100'
            onClick={()=>handleDropDownId(cardId)}
          >
            <ThreeDotsIcon />
          </div>
        )}
        {imageDropdownId === cardId ? (
          <>
            <CardDropdown closeDropdown={setImageDropdownId} collectionId={collectionId} />
          </>
        ) :  null}
      </div>
      <div className='flex items-start w-full cursor-pointer'>     
          <div className='w-full gap-2 p-4 text-sm font-semibold text-white ' onClick={(e) => filterFunction(e)}>
            {characterName}
          </div>        
      </div>
    </div>
  
    </>
  );
};

export default CollectionCard;
