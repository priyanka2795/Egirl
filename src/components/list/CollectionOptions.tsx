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
import buttonPlusIcon from '../../../public/assets/plus-large.png';
import CreateCollectionModal from './CreateCollectionModal';

interface CollectionOptionsProps {
  setShowRealistic: any;
}

const CollectionOptions = ({setShowRealistic}:CollectionOptionsProps) => {
  const [createCollectionModal, setCreateCollectionModal] = useState(false);
  const [imageDropdownId, setImageDropdownId] = useState('');
  const [selectedCardId, setSelectedCardId] = useState('false');
  const [filterByType , setFilterByType] = useState(false);
  const [titleText , setTitleText] = useState("");
  
  const handleFilterContent = (e:any) => {
    setFilterByType(true);
    setTitleText(e.target.innerHTML);
  }
  return (
    <>
    
      { filterByType === true ?
      <CollectionFilterContent titleText={titleText} clearFilter={setFilterByType}/> :
  <>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='text-white text-[22px] font-bold leading-8'>All collections</div>
            <button className='bg-[#5848BC] flex items-center justify-center gap-[6px] rounded-[12px] px-4 py-[10px]' onClick={() => {setCreateCollectionModal(true)}}>
              <Image className='h-[18px] w-[18px]' src={buttonPlusIcon} alt={''} />
              Create
            </button>
          </div>
          <ListFilter />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {/* <div className='flex flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#121212]'>
        <Image src={plusIcon} alt='' className='object-contain mb-4' />
        <div
          className='flex flex-col items-center justify-center cursor-pointer'
          onClick={() => setCreateCollectionModal(true)}
        >
          <h5 className='mb-[20px] text-sm font-semibold'>
            Create a new collection{' '}
          </h5>
          <div className='w-max rounded-[10px] bg-white/[0.08] px-4 py-[7px] text-xs font-bold text-white'>
            Create
          </div>
        </div>
          </div> */}
     
     <CollectionCard
        cardMainImg={model2}
        characterName='Realistic'
        cardImgClasses='relative !max-h-[308px]'
        cardId='card-1'
        getCardId={setImageDropdownId}
        dropdownCardId={imageDropdownId} 
        filterFunction={(e : any) => handleFilterContent(e)}
        setShowRealistic={setShowRealistic}
      />

      <CollectionCard
        cardMainImg={micaChan}
        characterName='Catgirls'
        cardImgClasses='relative !max-h-[308px]'
        cardId='card-2'
        getCardId={setImageDropdownId}
        dropdownCardId={imageDropdownId}
        filterFunction={(e : any) => handleFilterContent(e)}
        setShowRealistic={setShowRealistic}
      />
         
      <CollectionCard
        cardMainImg={mirandal}
        characterName='Realistic'
        cardImgClasses='relative !max-h-[308px]'
        cardId='card-3'
        getCardId={setImageDropdownId}
        dropdownCardId={imageDropdownId}
        filterFunction={(e : any) => handleFilterContent(e)}
        setShowRealistic={setShowRealistic}
      />
      </div>
      </div>
  </>
    }
      {createCollectionModal && (
        <CreateCollectionModal closeModalItem={setCreateCollectionModal} />
      )}
    </>
  );
};

export default CollectionOptions;
