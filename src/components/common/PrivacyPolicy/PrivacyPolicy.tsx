import React, { useState } from 'react';
import PrivacyTab from './PrivacyTab';
import LegalPolicy from './CookiePolicy';
import AgreementTab from './AgreementTab';
import LicensesTab from './LicensesTab';
const policyTab = ['User Agreement', 'Privacy', 'Cookie Policy', 'Licenses'];

const PrivacyPolicy = () => {
  const [activeState, setActiveState] = useState<string>('User Agreement');

  const handleTab = (e: any) => {
    setActiveState(e);
    console.log(activeState, 'setActiveState');
  };
  return (
    <div className='mx-auto max-w-[1440px] px-[40px]'>
      <ul className='mx-auto flex items-center justify-center gap-2 border-b border-white/[40] py-3'>
        {policyTab.map((data, index) => {
          return (
            <li
              className={`${
                activeState === data ? 'text-[#5848BC]' : ''
              } font-medium mx-[15px] cursor-pointer text-[14px]`}
              key={index}
              onClick={() => setActiveState(data)}
            >
              {data}
            </li>
          );
        })}
      </ul>

      {activeState === 'User Agreement' && <AgreementTab />}
      {activeState === 'Privacy' && <PrivacyTab />}
      {activeState === 'Cookie Policy' && <LegalPolicy />}
      {activeState === 'Licenses' && <LicensesTab/>}
    </div>
  );
};

export default PrivacyPolicy;
