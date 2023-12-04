import { Modal } from '@components/modal/modal';
import React, { useState,useEffect } from 'react';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { createCollection } from 'services/services';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useRouter } from 'next/router'
interface CollectionModalProp {
  closeModalItem: any;
  collectionUpdate:boolean;
  setCollectionUpdate:any;
}
const CreateCollectionModal = ({ closeModalItem ,collectionUpdate, setCollectionUpdate}: CollectionModalProp) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const token:any = Cookies.get('accessToken');
  const refreshTokenData:any = useAppSelector((state)=> state.tokenRefresh?.tokenData)

  const [listName, setListName] = useState('')
  const [listNameErr, setListNameErr] = useState('')
  
  useEffect(()=>{
    if(refreshTokenData){
      Cookies.set("accessToken", refreshTokenData)
    }
  },[refreshTokenData, router.pathname])

  const handleCreate = ()=>{
    if(!listName){
      setListNameErr("required")
      return
    }
    createCollection(listName, token)
    .then((res:any)=>{
      console.log("create collection res---",res)
      if(res.status === 200){
        closeModalItem(false)
        setCollectionUpdate(!collectionUpdate)
        if(res?.response?.status === 401){
          dispatch(tokenRefresh())
        }
      }
    })
    .catch((err)=>{
      console.log("create collection err----",err)
    })
  }
  
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
      closeModal={() => closeModalItem(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex w-full items-center justify-between border-b border-white/[0.08] p-6'>
        <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
          Custom List
        </div>
        <div
          className='h-[24px] w-[24px] object-contain'
          onClick={() => closeModalItem(false)}
        >
          <CloseIcon />
        </div>
      </div>

      <div className='flex flex-col w-full gap-6 px-6 pt-3 pb-6'>
        <div className='flex flex-col gap-[6px]'>
          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Name of List
          </div>
          <input
            type='text'
            placeholder='Cat girls'
            className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#FFFFFF] placeholder:text-white focus:ring-0'
            onChange={(e)=> {setListName(e.target.value),setListNameErr("")}}
          />
          <p className='text-red-400'>{listNameErr}</p>
        </div>
        <div className='flex w-full gap-[12px]'>
          <button
            className='font-bold w-1/2 rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'
            onClick={() => closeModalItem(false)}
          >
            Cancel
          </button>
          <button
            className='font-bold w-1/2 rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-white'
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCollectionModal;
