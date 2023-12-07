import React, { useEffect, useState } from 'react';
import sarahScarlet from '@/assets/sarahScarlet.webp';
import mirandal from '@/assets/mirandalImg.webp';
import model2 from '@/assets/gallery-tab-img.webp';
import micaChan from '@/assets/mikaChan.webp';
import plusIcon from '@/assets/plus-block-icon.webp';
import Image from 'next/image';
import NewCollectionModal from './NewCollectionModal';
import ListFilter from './ListFilter';
import CollectionCard from './CollectionCard';
import CollectionFilterContent from './CollectionFilterContent';
import buttonPlusIcon from '@/assets/plus-large.webp';
import CreateCollectionModal from './CreateCollectionModal';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { getAllCollections } from 'services/services';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useRouter } from 'next/router'
interface CollectionOptionsProps {
  setShowRealistic: any;
}

const collectionImg = [model2, micaChan, mirandal, model2];
const CollectionOptions = ({ setShowRealistic }: CollectionOptionsProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const token:any = Cookies.get('accessToken');
  const refreshTokenData:any = useAppSelector((state)=> state.tokenRefresh?.tokenData)
  const [createCollectionModal, setCreateCollectionModal] = useState(false);
  const [imageDropdownId, setImageDropdownId] = useState('');
  const [selectedCardId, setSelectedCardId] = useState('false');
  const [filterByType, setFilterByType] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [allCollections, setAllCollections] = useState([]);
  const [collectionUpdate, setCollectionUpdate] = useState(false)

  const handleFilterContent = (e: any) => {
    setFilterByType(true);
    setTitleText(e.target.innerHTML);
  };

  useEffect(() => {
    if(refreshTokenData){
      Cookies.set("accessToken", refreshTokenData)
    }
    getAllCollections(1, 10, token)
      .then((res: any) => {
        console.log('all collection res--', res);
        setAllCollections(res.data);
        if(res?.response?.status === 401){
          dispatch(tokenRefresh())
        }
      })
      .catch((err) => {
        console.log('all collection err---', err);
      });
  }, [collectionUpdate,refreshTokenData, router.pathname]);

  const sidebarCollapse =  sessionStorage.getItem('sideBarCollapse');

  return (
    <>
      {filterByType === true ? (
        <CollectionFilterContent
          titleText={titleText}
          clearFilter={setFilterByType}
        />
      ) : (
        <>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='font-bold text-[22px] leading-8 text-white'>
                  All collections
                </div>
                <button
                  className='flex items-center justify-center gap-[6px] rounded-[12px] bg-[#5848BC] px-4 py-[10px]'
                  onClick={() => {
                    setCreateCollectionModal(true);
                  }}
                >
                  <Image
                    className='h-[18px] w-[18px]'
                    src={buttonPlusIcon}
                    alt={''}
                  />
                  Create
                </button>
              </div>
              <ListFilter />
            </div>
            <div className={`grid w-full ${sidebarCollapse? 'grid-cols-4':'grid-cols-3'} gap-4`}>
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
              {allCollections?.map((e:any, i) => {
                return (
                  <CollectionCard
                    cardMainImg={collectionImg[i]}
                    characterName={e?.collection_name}
                    cardImgClasses='relative !max-h-[308px]'
                    cardId={i}
                    setImageDropdownId={setImageDropdownId}
                    imageDropdownId={imageDropdownId}
                    filterFunction={(e: any) => handleFilterContent(e)}
                    setShowRealistic={setShowRealistic}
                    key={i}
                    collectionId = {e?.id}
                  />
                );
              })}

              {/* <CollectionCard
                cardMainImg={micaChan}
                characterName='Catgirls'
                cardImgClasses='relative !max-h-[308px]'
                cardId='card-2'
                getCardId={setImageDropdownId}
                dropdownCardId={imageDropdownId}
                filterFunction={(e: any) => handleFilterContent(e)}
                setShowRealistic={setShowRealistic}
              />

              <CollectionCard
                cardMainImg={mirandal}
                characterName='Realistic'
                cardImgClasses='relative !max-h-[308px]'
                cardId='card-3'
                getCardId={setImageDropdownId}
                dropdownCardId={imageDropdownId}
                filterFunction={(e: any) => handleFilterContent(e)}
                setShowRealistic={setShowRealistic}
              /> */}
            </div>
          </div>
        </>
      )}
      {createCollectionModal && (
        <CreateCollectionModal closeModalItem={setCreateCollectionModal} collectionUpdate={collectionUpdate} setCollectionUpdate={setCollectionUpdate} />
      )}
    </>
  );
};

export default CollectionOptions;
