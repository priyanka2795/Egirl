import React , {useState} from 'react';
import Image from 'next/image';
import creditCard from '../../../public/assets/credit-card.png'
import cardCircles from '../../../public/assets/card-circles.png';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import DeleteModal from './DeleteModal';
import AddCardForm from './AddCardForm';

const AddCard = () => {
    const [deleteCardState , setDeleteCardState] = useState(false);
    const [showSuccessPage , setShowSuccessPage] = useState(false);
    const [showErrorPage , setShowErrorPage] = useState(false)
  return (
    <>
    <div className='flex'>
        <div className='border-r border-white/[0.08] bg-[#121212] w-full h-full'>
            <div className='w-full px-8 pt-[18px] pb-[14px] border-b border-white/[0.08]'>
                <div className='flex gap-3'>
                    <div className='px-4 py-2 rounded-[12px] bg-white/[0.16] text-[#FFFFFF] text-[15px] font-bold leading-5'>Add card</div>
                    <div className='px-4 py-2 rounded-[12px] text-[#979797] text-[15px] font-bold leading-5'>Latest transactions</div>
                </div>
            </div>
            {
                showSuccessPage ?
                <SuccessPage closeSuccessPage={setShowSuccessPage}/> : ( 
                showErrorPage ? <ErrorPage closeErrorPage={setShowErrorPage} /> : <AddCardForm showSucess={setShowSuccessPage} showError={setShowErrorPage}/> )
            } 
        </div>
      
        <div className='flex flex-col gap-4 p-4'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Added cards</div>
            {
                showSuccessPage ? (
                    <div className='flex flex-col items-start justify-between gap-3 px-6 py-8 rounded-[16px] bg-white/[0.05]'>
                        <Image className='w-10 h-[25px]' src={cardCircles} alt={''} />
                        <div className='flex flex-col items-start gap-2'>
                            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>
                                <p>Long Name</p>
                                <p>and Surname</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <div className='flex flex-col gap-[2px]'>
                                <div className='text-[#979797] text-[12px] font-normal leading-[16px]'>Mastercard</div>
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-[20px]'>**1234</div>
                            </div>
                            <div className='flex flex-col gap-[2px]'>
                                <div className='text-[#979797] text-[12px] font-normal leading-[16px]'>Expires:</div>
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-[20px]'>6/2025</div>
                            </div>
                        </div>
                    </div>
                ) : ( 
                showErrorPage ? (
                    <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                        <div className='flex p-5 bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={creditCard} alt={''} />
                        </div>
                        <div className='text-[creditCard] text-center text-[14px] font-semibold leading-[18px]'>Added cards will be displayed here</div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                        <div className='flex p-5 bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={creditCard} alt={''} />
                        </div>
                        <div className='text-[creditCard] text-center text-[14px] font-semibold leading-[18px]'>Added cards will be displayed here</div>
                    </div>
                ))
            }
            
        </div>
    </div>
    
    <p onClick={() => setDeleteCardState(true)}>delete card</p>
    {deleteCardState &&
      <DeleteModal closeDeleteModal={setDeleteCardState}/>
    }
  
    </>
  )
}

export default AddCard;
