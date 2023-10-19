import React, { useState } from 'react';

function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['1', ' 2', ' 3'];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <h1>Custom Stepper</h1>
      <div className='flex flex-col items-center px-[150px]'>
        <div className='mb-[20px] flex w-full gap-4'>
          {steps.map((step, index) => (
            <div className='flex items-center gap-4'>
              <div
                key={step}
                className={`step flex h-12 w-12 items-center justify-center rounded-full  text-white ${
                  index === activeStep
                    ? 'active bg-[#5848BC] '
                    : 'bg-[#FFFFFF14] '
                }`}
              >
                <p> {step}</p>
              </div>
              <div>
                <p className='text-[15px]'>
                  Profile info <span className='pl-1 text-[#979797]'>2/4</span>
                </p>
                <div className='mt-1 h-1 w-[155px] rounded-xl bg-[#5848BC] bg-opacity-[40%]'>
                  <div className={`h-1 w-0 rounded-xl bg-[#5848BC] `}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='step-content mt-10 w-[300px] border-2 border-[#ccc] p-3 text-center'>
          {activeStep === 0 && <Step1Content />}
          {activeStep === 1 && <Step2Content />}
          {activeStep === 2 && <Step3Content />}
        </div>
      </div>

      <div className='step-buttons flex w-[300px] justify-between'>
        <button
          className='cursor-pointer rounded-[5px] border-none bg-[#0074d9] px-[20px] py-[10px] text-white '
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        <button
          className='cursor-pointer rounded-[5px] border-none bg-[#0074d9] px-[20px] py-[10px] text-white disabled:cursor-not-allowed disabled:bg-[#ccc] '
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Step1Content() {
  return <div>Step 1 Content</div>;
}

function Step2Content() {
  return <div>Step 2 Content</div>;
}

function Step3Content() {
  return <div>Step 3 Content</div>;
}

export default CustomStepper;
