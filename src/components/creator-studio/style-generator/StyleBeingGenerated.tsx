import React from 'react'
import ClockSvg from "../../../../public/assets/svgImages/clock-img.svg"

interface StyleBeingGeneratedProps{
  setGeneratedStyle?: any;
}

const StyleBeingGenerated = ({setGeneratedStyle} : StyleBeingGeneratedProps) => {
  return (
    <div className="p-6 bg-white/[0.05] rounded-[14px] flex justify-between items-center">
        <div className="flex items-center gap-4">
            <div className="flex bg-white/[0.08] p-4 w-max rounded-full">
               <ClockSvg/>
            </div>
            <div className="flex flex-col gap-[6px]">
                <h5 className="text-[18px] font-bold text-white leading-6">Styles Being Generated</h5>
                <p className="text-[14px] font-normal text-[#979797] leading-[18px]">You don’t have any generating styles.</p>
            </div>
        </div>
        <div className="cursor-pointer text-[15px] text-[#979797]" onClick={() => {setGeneratedStyle(true)}}>4 styles</div>
    </div>
  )
}

export default StyleBeingGenerated;