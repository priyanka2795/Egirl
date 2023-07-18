import React,{useState} from 'react'
import Card from '../common/Card';
import sarahScarlet from '../../../public/assets/sarahScarlet.png'
import mirandal from '../../../public/assets/mirandalImg.png'
import model2 from '../../../public/assets/golden-shoulder-girl.png'
import micaChan from '../../../public/assets/mikaChan.png'
import plusIcon from '../../../public/assets/plus-block-icon.png'
import Image from 'next/image';
import NewCollectionModal from './NewCollectionModal';
const CollectionOptions = () => {
        const [newCollectionModal , setNewCollectionModal]=useState(false)
  return (
    <>
        <div className="grid grid-cols-4 gap-4">
        <div className="border border-white/[0.08] bg-[#121212] flex flex-col justify-center items-center rounded-[16px]">
        
           <Image src={plusIcon} alt="" className="object-contain mb-4"/>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => setNewCollectionModal(true)}>
            <h5 className="text-sm font-semibold mb-[20px]">Create a new collection </h5>
            <div className='text-xs px-4 py-[7px] font-bold text-white bg-white/[0.08] rounded-[10px] w-max'>
                Create
            </div>
            </div>
         
        </div>
       <Card cardMainImg={model2} verified={false} characterName="Realistic"/>              
       <Card cardMainImg={micaChan} verified={false} characterName="Realistic"/>        
       <Card cardMainImg={mirandal} verified={false} characterName="Realistic"/>        
    </div>
    {
        newCollectionModal &&
        <NewCollectionModal closeModalItem={setNewCollectionModal}/>
    }
    </>

  )
}

export default CollectionOptions
