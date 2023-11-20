import React from 'react';

const AgreementTab = () => {
  return (
    <>
        <h2 className='text-[64px]'>Legal</h2>
      <div className='flex gap-[40px]'>
      <div className="max-w-[70%] w-full">
          <h4 className='text-[44px]'>Coinbase User Agreement</h4>
          <div className='border-b-[5px] border-white/[40] pb-5 font-semibold text-[#5b616e]'>
            Last updated: November 8, 2023
          </div>

          <div className='pt-5 content'>
            <p className='text-[13px]'>Welcome to Coinbase!</p>
            <p className='text-[13px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              impedit quidem iure, repudiandae unde molestiae sint nemo nihil
              maxime odio distinctio ullam, a veniam earum eos sequi porro
              asperiores? Quaerat, amet. Beatae fugiat placeat enim unde
              mollitia dolorum, nihil asperiores id inventore esse consectetur
              quas labore tempore vitae fuga saepe!
            </p>
            <p className='text-[13px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              debitis corrupti laudantium atque minima. Facere, sed sit unde
              nihil sapiente modi ipsa velit! Tenetur dolor, fugiat libero
              aspernatur aliquid repudiandae quibusdam repellat enim? Quisquam
              facere debitis odit ratione ut dignissimos a corporis recusandae
              molestiae! Repudiandae nostrum repellat maxime labore, accusamus
              ab, repellendus possimus laborum doloremque harum dolore quasi vel
              eum odio ipsum nisi odit ducimus. Voluptas, laborum similique?
              Aspernatur, ipsum.
            </p>
          </div>
        </div>
        <div className="bg-black/[40] p-[32px] max-w-[30%] w-full">
            <ul>
              <li className='pb-3 text-sm font-medium text-[#eef0f3]'>APPENDIX 1: Additional Services</li>
              <li className='pb-3 text-sm font-medium text-[#eef0f3]'>APPENDIX 2: Additional Services</li>
              <li className='pb-3 text-sm font-medium text-[#eef0f3]'>APPENDIX 3: Additional Services</li>
              <li className='pb-3 text-sm font-medium text-[#eef0f3]'>APPENDIX 4: Additional Services</li>
             
            </ul>
        </div>
      </div>
    </>
  );
};

export default AgreementTab;
