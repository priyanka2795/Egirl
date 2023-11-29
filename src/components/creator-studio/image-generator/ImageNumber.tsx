import React,{useState} from 'react';

interface imageNumber{
  setNumOfImages:any
}
const ImageNumber = ({setNumOfImages}:imageNumber) => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selectedItem, setSelectedItem] = useState<number>()
  const handleImageNumbers =(item:number)=>{
    setSelectedItem(item)
    setNumOfImages(item)
   }
  return (
    <div className='px-5 pt-5 pb-6'>
      <h6 className='text-[13px] font-semibold text-[#979797]'>
        Number of Images
      </h6>
      <div className='grid grid-cols-4 gap-2 mt-2'>
        {numberArray.map((items, index) => {
          return (
            <div
              key={index}
              className={`rounded-[16px] border border-white/[0.32] w-12 h-12 flex justify-center items-center text-white text-[18px] font-bold leading-6 cursor-pointer ${selectedItem === items ? 'bg-[#1f1b3f]' : ''}`}
              onClick={()=> handleImageNumbers(items)}
            >
              {items}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageNumber;
