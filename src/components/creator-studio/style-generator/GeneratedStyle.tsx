import Image from 'next/image';
import React, { useState } from 'react';
import arrowLeft from '../../../../public/assets/arrow-left.png';
import floderImg1 from '../../../../public/assets/folder1-img1.png';
import floderImg2 from '../../../../public/assets/folder1-img2.png';
import floderImg3 from '../../../../public/assets/folder1-img3.png';
import floderImg4 from '../../../../public/assets/folder1-img4.png';
import floderImg5 from '../../../../public/assets/folder2-img1.png';
import floderImg6 from '../../../../public/assets/folder2-img2.png';
import floderImg7 from '../../../../public/assets/folder2-img3.png';
import floderImg8 from '../../../../public/assets/folder2-img4.png';
import floderImg9 from '../../../../public/assets/folder3-img1.png';
import floderImg10 from '../../../../public/assets/folder3-img2.png';
import floderImg11 from '../../../../public/assets/folder3-img3.png';
import floderImg12 from '../../../../public/assets/folder3-img4.png';
import floderImg13 from '../../../../public/assets/folder4-img1.png';
import floderImg14 from '../../../../public/assets/folder4-img2.png';
import floderImg15 from '../../../../public/assets/folder4-img3.png';
import floderImg16 from '../../../../public/assets/folder4-img4.png';
import Generatedstyle from '../view-Styles/Generatedstyle';

interface GeneratedStyleProps {
    setGeneratedStyle: any;
    setViewStyleGenerated: any;
}

const generatedStyle = [
    {
        img1: floderImg1,
        img2: floderImg2,
        img3: floderImg3,
        img4: floderImg4,
        name: 'Any Lee',
        button: 'Character',
        completed: '52% to complete',
        time: '~7 min',
        width: '52%'
    },
    {
        img1: floderImg5,
        img2: floderImg6,
        img3: floderImg7,
        img4: floderImg8,
        name: 'Red dress',
        button: 'Clothing',
        completed: '10% to complete',
        time: '~9 min',
        width: '10%'
    },
    {
        img1: floderImg9,
        img2: floderImg10,
        img3: floderImg11,
        img4: floderImg12,
        name: 'White bag',
        button: 'Accessories',
        completed: '95% to complete',
        time: '~1 min',
        width: '95%'
    },
    {
        img1: floderImg13,
        img2: floderImg14,
        img3: floderImg15,
        img4: floderImg16,
    },
];

const GeneratedStyle = ({setGeneratedStyle, setViewStyleGenerated} : GeneratedStyleProps) => {

    return(
        <>
        <div className='flex flex-col gap-5 p-8'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <Image className='object-contain' onClick={() => {setGeneratedStyle(false)}} src={arrowLeft} alt={''} />
                    <div className='text-white text-[22px] font-bold leading-8'>Styles Being Generated</div>
                </div>
                <button className='px-5 py-[13px] justify-center items-center rounded-[14px] bg-white/[0.08] text-white text-[16px] font-bold leading-[22px]' onClick={() => {setViewStyleGenerated(true)}}>View Generated</button>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {generatedStyle.map((item,index) => {
                    return(
                        <div key={index} className='overflow-hidden flex flex-col rounded-[14px]'>
                            <div className='grid grid-cols-2'>
                                <Image src={item.img1} alt={''} />
                                <Image src={item.img2} alt={''} />
                                <Image src={item.img3} alt={''} />
                                <Image src={item.img4} alt={''} />
                            </div>
                            <div className='flex flex-col gap-5 p-5 bg-[#121212]'>
                                <div className='flex justify-between'>
                                    <div className='text-white text-[18px] font-bold leading-6'>{item.name}</div>
                                    <button className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-white text-[13px] font-normal leading-[18px]'>{item.button}</button>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='flex justify-between'>
                                        <div className='text-white text-[13px] font-normal leading-[18px]'>{item.completed}</div>
                                        <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>{item.time}</div>
                                    </div>
                                    {index === 3 ? <></> :
                                    <div className='overflow-hidden h-2 bg-[#7362C6]/[0.24] rounded-[100px]'>
                                        <div className={`w-[${item.width}] h-full bg-[#7362C6]`}></div>
                                    </div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default GeneratedStyle;