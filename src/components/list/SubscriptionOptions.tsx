import Image from 'next/image';
import React,{useState, useEffect} from 'react';
import subscriptionImage1 from '../../../public/assets/list-subscription1.png';
import subscriptionImage2 from '../../../public/assets/list-subscription2.png';
import subscriptionImage3 from '../../../public/assets/list-subscription3.png';
import Card from '../common/Card';
import ListFilter from './ListFilter';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { getSubscribed } from 'services/services';
interface SubscriptionOptionsProps {
  showProfile: React.Dispatch<React.SetStateAction<boolean>>;
  component?: any;
}

const token:any = Cookies.get('accessToken');
  // const token = `${accessToken}`;
  // const decodedToken = jwt.decode(token);
  // const userId = decodedToken?.sub
  // console.log(userId)
const SubscriptionOptions = ({ showProfile, component }: SubscriptionOptionsProps) => {
  const [allSubscriptions, setSubscriptions] = useState([])
  useEffect(()=>{
    getSubscribed(1,10, token)
    .then((res:any)=>{
      console.log("get subscription res---",res)
      setSubscriptions(res.data)
    })
    .catch((err)=>{
      console.log("err----",err)
    })
  },[])
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
      <div className='grid grid-cols-3 gap-4 '>
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
