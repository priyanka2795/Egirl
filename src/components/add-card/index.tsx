import React , {useState} from 'react';
import Image from 'next/image';
import creditCard from '../../../public/assets/credit-card.png'
import cardCircles from '../../../public/assets/card-circles.png';
import threeDotsIcon from '../../../public/assets/dots-horizontal.png';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import DeleteModal from './DeleteModal';
import AddCardForm from './AddCardForm';

const AddCard = () => {
    const tabContent = ['Add card', 'Latest transactions'];
    const [activeListTab, setActiveListTab] = useState('Add card');
    const [deleteCardState , setDeleteCardState] = useState(false);
    const [showSuccessPage , setShowSuccessPage] = useState(false);
    const [showErrorPage , setShowErrorPage] = useState(false);

    const handleExploreSelected = (e: any) => {
        //setExploreSelected(e.target.innerText);
        setActiveListTab(e.target.innerText);
      };
  return (
    <>
    <div className='flex'>
        <div className='border-r border-white/[0.08] bg-[#121212] w-full h-full'>
        <div className='w-full px-8 pt-[18px] pb-[14px] border-b border-white/[0.08]'>
            <div className='flex gap-3'>
            {tabContent.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => handleExploreSelected(e)}
                  className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                    activeListTab === items
                      ? ' bg-white bg-opacity-20 text-white  '
                      : 'text-neutral-400'
                  }`}
                >
                  {items}
                </div>
              );
            })}
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
                    <div className='relative flex flex-col h-[230px] w-[230px] justify-between px-6 py-8 rounded-[16px] bg-white/[0.05]'>
                        <div className='w-10 h-[25px]'>
                            <Image className='w-full h-full' src={cardCircles} alt={''} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>
                                <p>Long Name</p>
                                <p>and Surname</p>
                            </div>
                            <div className='flex gap-2'>
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
                        <div className='flex p-2 top-[10px] right-[14px] absolute bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={threeDotsIcon} alt={''} />
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
