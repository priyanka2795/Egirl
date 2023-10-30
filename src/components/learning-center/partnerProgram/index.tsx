import React from 'react';
import BreadCrumbs from '../BreadCrumbs';
import Image from 'next/image';
import partnerProgramBanner from '../../../../public/assets/learning-center/partnerProgramBanner.png';
import partnerProgram from '../../../../public/assets/learning-center/Partner Program.png';
import PartnerProgramAccordion from './PartnerProgramAccordion';
import PartnerProgramContent from './PartnerProgramContent';
import HowItWorkSteps from './HowItWorkSteps';
import CreatorAccordion from './CreatorAccordion';
import EligibleCharacters from './EligibleCharacters';
function PartnerProgramIndex() {
  return (
    <div className='px-6 pb-6'>
      <div className='flex gap-4'>
        <div>
          <BreadCrumbs title='Partner Program' />
          <div className=''>
            {/* banner section */}
            <div className='pt-2 pb-10'>
              <Image src={partnerProgramBanner} alt='' />
            </div>
            {/* benefit section */}
            <PartnerProgramAccordion />

            {/* how it work section */}
            <HowItWorkSteps />

            {/* creators section */}
            <CreatorAccordion />

            {/* eligible characters */}
            <EligibleCharacters />
            
            {/* bottom banner section */}
            <div className='pt-4 '>
              <Image src={partnerProgram} alt='' />
            </div>
          </div>
        </div>
        <PartnerProgramContent />
      </div>
    </div>
  );
}
export default PartnerProgramIndex;
