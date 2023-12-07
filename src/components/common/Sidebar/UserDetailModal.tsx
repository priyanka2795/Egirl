import React, { useState } from 'react'
import LogOut from "./svg/log-out.svg"
import SubscriptionModal from '../SubscriptionModal';
import { logout } from 'services/services';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import arrowLeft from '@/assets/arrow-left-orange.webp';

interface UserDetailModalProps{
  styleClasses: string;
  setUserAccountMenu: any;
  userAccountMenu: boolean;
}
const UserDetailModal = ({styleClasses, setUserAccountMenu, userAccountMenu} : UserDetailModalProps) => {
  const router = useRouter()
  const token:string|undefined = Cookies.get('accessToken')

  const [showSubscription, setshowSubscription] = useState(false);
  const closeState = () => {
    setUserAccountMenu(false);
    setshowSubscription(false);
  }
  
  return (
//     <div className={`${showSubscription ? "hidden" : ""} bottom-[80px] w-[218px] text-white bg-[#1A1A1A] rounded-[14px] ${styleClasses}`}>
//       <div className="px-4 pt-4 pb-3 border-b border-white border-opacity-10">
//         <h6 className="text-white text-opacity-30 text-[15px] font-normal leading-tight">Your balance</h6>
//         <div className="flex items-end gap-2 mb-2">
//             <p className="text-4xl font-bold">234</p>
//             <span className="text-neutral-400 text-[15px] font-normal leading-tight">Tokens</span>
//         </div>
//         <button className="w-full px-3 py-[7px] bg-white bg-opacity-10 text-neutral-400 text-xs font-bold leading-[18px] rounded-[10px]" onClick={() => setshowSubscription(true)}>Get more</button>
//       </div>
//         <div className="px-4 py-[10px] flex gap-2" onClick={()=>{ logout(),router.push("/login")}}>
//           <LogOut/>
//              <p className="text-[#FF5336] text-sm font-normal leading-[18px]" >{token ? "Log out" : "Login" }</p>
//         </div>

//         {
//           showSubscription &&
//           <SubscriptionModal showSubscription={showSubscription} closeState={() => closeState()} />
//         }

// </div>

<>
      {
        token?.length?<div className='absolute bottom-[80px]  right-0 flex w-[218px] px-0 py-2 rounded-[14px] bg-[#1A1A1A] flex-col z-[1]'>
        <div className='flex px-4 pt-1 pb-3 border-b border-white/[0.08] flex-col'>
          <div className='text-white/[0.32] text-[15px] font-normal leading-5'>Your balance</div>
          <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                  <div className='text-[#FFFFFF] text-[36px] font-bold leading-12'>234</div>
                  <div className='text-[#979797] text-[15px] font-normal leading-5 mt-[23px]'>Tokens</div>
              </div>
              <button className='px-3 py-[7px] justify-center items-center bg-white/[0.08] rounded-[10px] text-[12px] text-[#979797] font-bold leading-[18px]'>Get more</button>
          </div>
        </div>
        <div className='px-4 py-[10px] flex gap-2 bg-[#1A1A1A] cursor-pointer' onClick={()=>{ logout(),router.push("/login")}}>
          <div className='w-[18px] h-[18px]'>
              <Image className='w-full h-full' src={arrowLeft} alt={''} />
          </div>
          <div className='text-[#FF5336] text-[14px] font-normal leading-[18px]'>Log out</div>
        </div>
      </div>:<div className='absolute bottom-[80px] right-0 flex w-[218px] px-0 py-2 rounded-[14px] bg-[#1A1A1A] flex-col z-[1]'>
       
        <div className='px-4 py-[10px] flex gap-2 bg-[#1A1A1A] cursor-pointer' onClick={()=>{ logout(),router.push("/login")}}>
         
          <div className='text-green-400 text-[14px] font-normal leading-[18px]'>
            
            <Link href='/login'>
                
                  Login
                
              </Link>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default UserDetailModal
