import React from 'react';
import BreadCrumbs from '../BreadCrumbs';
import Image from 'next/image';
import partnerProgramBanner from '../../../../public/assets/learning-center/partnerProgramBanner.png';
import PartnerProgramAccordion from './PartnerProgramAccordion';
import PartnerProgramContent from './PartnerProgramContent';


function PartnerProgramIndex() {
  return (
    <div className='px-6 pb-6'>
      <div className='flex gap-4'>
        <div>
          <BreadCrumbs title='Partner Program' />
          <div className=''>
            <div className='pt-2 pb-10'>
              <Image src={partnerProgramBanner} alt='' />
            </div>
            {/* SECTION ONE */}
            <div
              className='pb-2 text-[27px] font-black text-white'
              id='character_profile'
            >
              Benefits of Joining the Partner Program
            </div>
            <PartnerProgramAccordion/>
          </div>
        </div>
        <PartnerProgramContent/>
      </div>
    </div>
  );
}

export default PartnerProgramIndex;
