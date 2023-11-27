import React from 'react'
import crossIconRed from '../../../public/assets/xmark-red.png'
import creditCard from '../../../public/assets/credit-card.png'
import Image from 'next/image';
import { useRouter } from 'next/router';


interface errorPageProp {
    closeErrorPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const ErrorPage = ({ closeErrorPage }: errorPageProp) => {
    const router = useRouter();
    return (

        <div className=''>
            <div className='flex flex-col items-center justify-center gap-10 p-8 grow'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex justify-center items-center pt-[26px] pb-6 px-6 rounded-full bg-[#FF5336]/[0.16]'>
                        <Image className='w-8 h-8' src={crossIconRed} alt={''} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Something went wrong</div>
                        <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>
                            <p>Error code: ######</p>
                            <p>Check your details or try again later</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-3 py-6'>
                <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#FFFFFF14] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={()=>closeErrorPage(false)} >Close</button>
                <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => closeErrorPage(false)}>Try again</button>
            </div>
        </div>

    )
}

export default ErrorPage;
