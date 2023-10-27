import React from 'react';

const data = [
{
    title:"Apply to the Partner Program",
    text:"Submit your application to join the partner program. The Egirls.ai team will review your application and notify you once your application is accepted."
},
{
    title:"Upload Photos and Voice Files",
    text:"Once accepted, you can start uploading your own photos and voice files. These will be used to train AI models that will emulate your appearance and voice accurately."
},
{
    title:"Engage with the Community",
    text:"Interact with other creators within the Egirls.ai community. Participate in discussions, share your experiences, and collaborate to enhance your AI modeling skills and discover new possibilities."
},
{
    title:"Customize Your AI Models",
    text:"You gain access to a dedicated support team that is committed to addressing your needs promptly and efficiently. Whether you have technical questions, need assistance with customization."
},
{
    title:"Engage with your audience",
    text:"Create and post content that will captivate your fans. Use your analytics tools to see which content is working for you, iterate with ease."
}

]
function HowItWorkSteps() {
  return (
    <>
      <div className='pt-3 text-[27px] font-black text-white' id='how_it_works'>
        How it works?
      </div>
      <p className='text-[16px] text-[#979797]'>
        Start your onboarding journey with beginner-friendly tips that will have you create your own unique characters.
      </p>
      <div className='grid grid-cols-2 gap-4 mt-4'>
      {
        data.map((ele,index)=>{
            return(
                <div key={index} className='rounded-[20px] border border-white/[0.16] p-5 h-[213px]'>
                    <div className='text-[#515151] text-[13px] font-bold uppercase'>step {index+1}</div>
                    <div className='text-[18px] font-black pt-2'>{ele.title}</div>
                    <div className='text-[15px] text-[#979797] pt-1'>{ele.text}</div>
                </div>
            )
        })
      }
      </div>
    </>
  );
}

export default HowItWorkSteps;
