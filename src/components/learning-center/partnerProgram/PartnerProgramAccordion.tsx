import React from 'react';
import Image from 'next/image';
import voiceImgIcon from '../../../../public/assets/learning-center/voiceImgIcon.png';
import wallet from '../../../../public/assets/learning-center/wallet.png';
import messageCircle from '../../../../public/assets/learning-center/message-circle-heart.png';
import chart from '../../../../public/assets/learning-center/Chart.png';
import globe from '../../../../public/assets/learning-center/globe.png';
import minus from '../../../../public/assets/minus.png';
import plus from '../../../../public/assets/plus-large4.png'

const data = [
  {
    icon: voiceImgIcon,
    title: 'Fully custom images & voice',
    text: 'In addition to uploading photos, creators can also upload voice files to train AI models to emulate their voices accurately. Whether you have a distinct vocal tone or a unique accent, this feature allows you to recreate your voice in an AI model, providing an immersive experience for your audience.'
  },
  {
    icon: wallet,
    title: 'Higher revenue split',
    text: 'In addition to uploading photos, creators can also upload voice files to train AI models to emulate their voices accurately. Whether you have a distinct vocal tone or a unique accent, this feature allows you to recreate your voice in an AI model, providing an immersive experience for your audience.'
  },
  {
    icon: messageCircle,
    title: 'Priority support',
    text: 'In addition to uploading photos, creators can also upload voice files to train AI models to emulate their voices accurately. Whether you have a distinct vocal tone or a unique accent, this feature allows you to recreate your voice in an AI model, providing an immersive experience for your audience.'
  },
  {
    icon: chart,
    title: 'Partner-only opportunities',
    text: 'In addition to uploading photos, creators can also upload voice files to train AI models to emulate their voices accurately. Whether you have a distinct vocal tone or a unique accent, this feature allows you to recreate your voice in an AI model, providing an immersive experience for your audience.'
  },
  {
    icon: globe,
    title: 'Community',
    text: 'In addition to uploading photos, creators can also upload voice files to train AI models to emulate their voices accurately. Whether you have a distinct vocal tone or a unique accent, this feature allows you to recreate your voice in an AI model, providing an immersive experience for your audience.'
  }
];
function PartnerProgramAccordion() {
  return (
    <div className=''>
      {data.map((e, index) => {
        return (
          <div
            className='my-4 rounded-[20px] border border-white/[0.08] bg-white/[0.07] p-5'
            key={index}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/[0.05]'>
                  <Image src={e.icon} alt='' />
                </div>
                <span className='text-[18px] font-black text-white'>
                  {e.title}
                </span>
              </div>
              <Image src={minus} alt='' />
            </div>
            <div className='pt-3 text-[15px] text-[#979797]'>{e.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PartnerProgramAccordion;