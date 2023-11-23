import React,{useState} from 'react';

interface props{
  setImageDimension:any
}
const ImageDimension = ({setImageDimension}:props) => {
  const [selectedDimension, setSelectedDimension] = useState<number>()
  const imageDimesions = [
    {
      id: 1,
      area: {width:512,height:512},
      text: 'post'
    },
    {
      id: 2,
      area: {width:1076,height:200},
      text: 'banner'
    }
  ];

  const handleDimension = (height:number, width:number,index:number)=>{
  let dimension = {width:width, height:height};
    setImageDimension(dimension)
    setSelectedDimension(index)
  }

  return (
    <div className='flex flex-col gap-[10px] border-b border-white/[0.08] px-5 pb-5'>
      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
        Image Dimensions
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {imageDimesions.map((items, index) => {
          return (
            <div
              key={index}
              className={`${items.id} rounded-[12px] border border-[#515151] px-3 py-[10px] text-center cursor-pointer ${selectedDimension === index ? 'bg-[#1f1b3f]' : ''}`}
              onClick={()=> handleDimension(items.area.height,items.area.width, index)}
            >
              <h6 className='text-[14px] font-bold leading-5 text-white'>
                   {items.area.width} X {items.area.height}
              </h6>
              <p className='text-[12px] font-normal leading-4 text-[#979797]'>
                {items.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDimension;
