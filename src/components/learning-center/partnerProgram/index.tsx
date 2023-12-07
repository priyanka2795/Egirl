import React from 'react';
import BreadCrumbs from '../BreadCrumbs';
import Image from 'next/image';
import partnerProgramBanner from '@/assets/learning-center/partnerProgramBanner.png';
import partnerProgram from '@/assets/learning-center/Partner Program.png';
import PartnerProgramAccordion from './PartnerProgramAccordion';
import PartnerProgramContent from './PartnerProgramContent';
import HowItWorkSteps from './HowItWorkSteps';
import CreatorAccordion from './CreatorAccordion';
import EligibleCharacters from './EligibleCharacters';
import Link from 'next/link';
function PartnerProgramIndex() {
  return (
    <div className='px-6 pb-6'>
      <div className='flex gap-4'>
        <div>
          <BreadCrumbs title='Partner Program' />
          <div className=''>
            {/* banner section */}
            <div className='pt-2 pb-10'>
              <Link href='/partner-program-application'>
                <Image src={partnerProgramBanner} alt='' />
              </Link>
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
              <Link href='/partner-program-application'>
                <Image src={partnerProgram} alt='' />
              </Link>
            </div>
          </div>
        </div>
        <PartnerProgramContent />
      </div>
    </div>
  );
}
export default PartnerProgramIndex;
