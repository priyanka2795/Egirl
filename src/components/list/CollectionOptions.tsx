import React, { useState } from 'react';
import sarahScarlet from '../../../public/assets/sarahScarlet.png';
import mirandal from '../../../public/assets/mirandalImg.png';
import model2 from '../../../public/assets/gallery-tab-img.png';
import micaChan from '../../../public/assets/mikaChan.png';
import plusIcon from '../../../public/assets/plus-block-icon.png';
import Image from 'next/image';
import NewCollectionModal from './NewCollectionModal';
import ListFilter from './ListFilter';
import CollectionCard from './CollectionCard';
import CollectionFilterContent from './CollectionFilterContent';
const CollectionOptions = () => {
  const [newCollectionModal, setNewCollectionModal] = useState(false);
  const [imageDropdown, setImageDropdown] = useState('');
  const [selectedCardId, setSelectedCardId] = useState('false');
  const [filterByType , setFilterByType] = useState(false);
const [titleText , setTitleText] = useState("");
  
  const handleFilterContent = (e:any) =>{
    setFilterByType(true);
    setTitleText(e.target.innerHTML);
  }
  return (
    <>


      { filterByType === true ?
      <CollectionFilterContent titleText={titleText} clearFilter={setFilterByType}/> :
  <>
        <ListFilter />
      <div className='mt-[14px] grid grid-cols-4 gap-4'>
      <div className='flex flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#121212]'>
        <Image src={plusIcon} alt='' className='object-contain mb-4' />
        <div
          className='flex flex-col items-center justify-center cursor-pointer'
          onClick={() => setNewCollectionModal(true)}
        >
          <h5 className='mb-[20px] text-sm font-semibold'>
            Create a new collection{' '}
          </h5>
          <div className='w-max rounded-[10px] bg-white/[0.08] px-4 py-[7px] text-xs font-bold text-white'>
            Create
          </div>
        </div>
      </div>
     
     <CollectionCard
        cardMainImg={model2}
        characterName='Realistic'
        cardImgClasses='relative !max-h-[230px]'
        cardId='card-1'
        toggleDropdown={setImageDropdown}
        dropdownState={imageDropdown}
        filterFunction={(e : any) => handleFilterContent(e)}
      />

      <CollectionCard
        cardMainImg={micaChan}
        characterName='Catgirls'
        cardImgClasses='relative !max-h-[230px]'
        cardId='card-2'
        toggleDropdown={setImageDropdown}
        dropdownState={imageDropdown}
        filterFunction={(e : any) => handleFilterContent(e)}
      />
         
      <CollectionCard
        cardMainImg={mirandal}
        characterName='One more long name...'
        cardImgClasses='relative !max-h-[230px]'
        cardId='card-3'
        toggleDropdown={setImageDropdown}
        dropdownState={imageDropdown}
        filterFunction={(e : any) => handleFilterContent(e)}
      />
      </div>
  </>
    }
      {newCollectionModal && (
        <NewCollectionModal closeModalItem={setNewCollectionModal} />
      )}
    </>
  );
};

export default CollectionOptions;
