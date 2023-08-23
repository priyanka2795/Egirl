import React from 'react'
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';

const MultiStepProgressBar = () => {
    const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;
const step4Content = <h1>Step 4 Content</h1>;

// setup step validators, will be called before proceeding to the next step
function step2Validator() {
  // return a boolean
}
 
function step3Validator() {
  // return a boolean
}
function step4Validator() {
    // return a boolean
  }
 
function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}
  return (
    <>
     <StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Step 1',
      subtitle: '10%',
      name: 'A',
      content: step1Content
    },
    {
      label: 'Step 2',
      subtitle: '25%',
      name: 'B',
      content: step2Content,
    //   validator: step2Validator,
    },
    {
      label: 'Step 3',
      subtitle: '50%',
      name: 'C',
      content: step3Content,
    //   validator: step3Validator,
    },
    {
        label: 'Step 4',
        subtitle: '100%',
        name: 'C',
        content: step4Content,
      //   validator: step3Validator,
      }
  ]}
/>
    </>
  )
}

export default MultiStepProgressBar