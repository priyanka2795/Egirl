import React, { useState } from 'react'
import LogOut from "./svg/log-out.svg"
import SubscriptionModal from '../SubscriptionModal';

interface UserDetailModalProps{
  styleClasses: string,
  setUserAccountMenu : any,
  userAccountMenu: boolean
}
const UserDetailModal = ({styleClasses, setUserAccountMenu, userAccountMenu} : UserDetailModalProps) => {
  const [showSubscription, setshowSubscription] = useState(false);
  const closeState = () => {
    setUserAccountMenu(false)
    setshowSubscription(false)
  }
  return (
    <div className={`${showSubscription ? "hidden" : ""} bottom-[80px] w-[218px] text-white bg-[#1A1A1A] rounded-[14px] ${styleClasses}`}>
      <div className="px-4 pt-4 pb-3 border-b border-white border-opacity-10">
        <h6 className="text-white text-opacity-30 text-[15px] font-normal leading-tight">Your balance</h6>
        <div className="flex items-end gap-2 mb-2">
            <p className="text-4xl font-bold">234</p>
            <span className="text-neutral-400 text-[15px] font-normal leading-tight">Tokens</span>
        </div>
        <button className="w-full px-3 py-[7px] bg-white bg-opacity-10 text-neutral-400 text-xs font-bold leading-[18px] rounded-[10px]" onClick={() => setshowSubscription(true)}>Get more</button>
      </div>
        <div className="px-4 py-[10px] flex gap-2">
          <LogOut/>
             <p className="text-[#FF5336] text-sm font-normal leading-[18px]">Log out</p>
        </div>

        {
          showSubscription &&
          <SubscriptionModal showSubscription={showSubscription} closeState={() => closeState()} />
        }

</div>
  )
}

export default UserDetailModal
