import Image from 'next/image';
import React,{useState, useEffect} from 'react';
import subscriptionImage1 from '@/assets/list-subscription1.webp';
import subscriptionImage2 from '@/assets/list-subscription2.webp';
import subscriptionImage3 from '@/assets/list-subscription3.webp';
import Card from '../common/Card';
import ListFilter from './ListFilter';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { getSubscribed } from 'services/services';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useRouter } from 'next/router'
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
interface SubscriptionOptionsProps {
  showProfile: React.Dispatch<React.SetStateAction<boolean>>;
  component?: any;
}



  // const decodedToken = jwt.decode(token);
  // const userId = decodedToken?.sub
  // console.log(userId,"userId")
const SubscriptionOptions = ({ showProfile, component }: SubscriptionOptionsProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const token:any = Cookies.get('accessToken');
  const refreshTokenData:any = useAppSelector((state)=> state.tokenRefresh?.tokenData)
  const [allSubscriptions, setSubscriptions] = useState([])

  useEffect(()=>{
    if(refreshTokenData){
      Cookies.set("accessToken", refreshTokenData)
    }

    getSubscribed(1,10, token)
    .then((res:any)=>{
      console.log("get subscription res---",res)
      setSubscriptions(res.data)
      if(res?.response?.status === 401){
        dispatch(tokenRefresh())
      }
    })
    .catch((err)=>{
      console.log("err----",err)
    })
  },[refreshTokenData, router.pathname]);
  const sidebarCollapse =  sessionStorage.getItem('sideBarCollapse');
  
  return (
    <div className={`flex flex-col items-start self-stretch ${component === 'RealisticPage' ? 'gap-6' : 'gap-4'}`}>
      {/* <div className='flex items-center gap-[33rem] justify-between'>
            <div className='flex flex-col w-[320px] items-start justify-center gap-[6px] shrink-0 rounded-[12px]'>
                <div className='flex items-start self-stretch gap-2 py-[10px] pl-[14px] pr-[12px] rounded-[12px] bg-white/10'>
                    <Image className='w-[20px] h-[20px]' src={searchIcon} alt={''}/>
                    <div className='text-[#979797] text-sm font-normal'>Search</div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Image className='w-[20px] h-[20px]' src={arrowDownArrowUp} alt={''}/>
                <Image className='w-[20px] h-[20px]' src={filterIcon} alt={''}/>
            </div>
        </div> */}
      <ListFilter />
      <div className={`grid w-full ${sidebarCollapse? 'grid-cols-4':'grid-cols-3'} gap-4`}>
        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage1}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage2}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage3}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage1}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage2}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)} className='max-h-[390px]'>
          <Card
            cardMainImg={subscriptionImage3}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOptions;
