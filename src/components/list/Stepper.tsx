import React, { useState } from 'react';

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepClick = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) {
      // If the step is already completed, don't allow clicking it.
      return;
    }

    setActiveStep(stepIndex);
    setCompletedSteps([...completedSteps, stepIndex]);
  };

  const handleNext = () => {
    // Handle next button click.
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    // Handle previous button click.
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='stepper'>
      <ul className='nav nav-tabs' role='tablist'>
        {Array.from({ length: 4 }, (_, i) => (
          <li
            key={i}
            className={`${
              i === activeStep
                ? 'active'
                : completedSteps.includes(i)
                ? 'completed'
                : 'disabled'
            }`}
          >
            <a
              className='persistant-disabled'
              href={`#stepper-step-${i + 1}`}
              data-toggle='tab'
              aria-controls={`stepper-step-${i + 1}`}
              role='tab'
              title={`Step ${i + 1}`}
              onClick={() => handleStepClick(i)}
            >
              <span className='round-tab'>{i + 1}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className='tab-content'>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`tab-pane fade ${i === activeStep ? 'in active' : ''}`}
            role='tabpanel'
            id={`stepper-step-${i + 1}`}
          >
            <h3>Step {i + 1}. Title</h3>
            <p>This is step {i + 1}</p>
            {i < 3 && (
              <ul className='list-inline pull-right'>
                {i > 0 && (
                  <li>
                    <a
                      className='btn btn-default prev-step'
                      onClick={handlePrev}
                    >
                      Back
                    </a>
                  </li>
                )}
                {i < 3 && (
                  <li>
                    <a
                      className='btn btn-primary next-step'
                      onClick={handleNext}
                    >
                      Next
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
