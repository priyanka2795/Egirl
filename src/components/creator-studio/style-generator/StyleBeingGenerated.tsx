import React from 'react'
import ClockSvg from "../../../../public/assets/svgImages/clock-img.svg"

const StyleBeingGenerated = () => {
  return (
    <div className="p-6 bg-white/[0.05] rounded-[14px] flex justify-between items-center">
        <div className="flex gap-4">
            <div className="bg-white/[0.08] p-4 w-max rounded-full">
               <ClockSvg/>
            </div>
            <div className="flex flex-col justify-start">
                <h5 className="text-[18px] font-weight text-white">Styles Being Generated</h5>
                <p className="text-sm text-[#979797]">You don’t have any generating styles.</p>
            </div>
        </div>
        <div className="text-[15px] text-[#979797]">0 styles</div>
    </div>
  )
}

export default StyleBeingGenerated