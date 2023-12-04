// @ts-nocheck

import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@/assets/xmark (1).webp';
import Image1 from '@/assets/inpaint-Image.webp';
import Rest from '@/assets/rotate-cw.webp';
import ImageSquare from '@/assets/image-square-white.webp';
import BrushWhite from '@/assets/paintbrush-alt-white.webp';
import ArrowDown from '@/assets/arrow-down.webp';
import Backward from '@/assets/flip-backward-white.webp';
import Forward from '@/assets/flip-forward.webp';
import ForwardWhite from '@/assets/flip-forward-white.webp';
import RangePicker from '../common/RangePicker';
import Tooltip from '@components/common/tooltip';
import RestWhite from '@/assets/rotate-cw-white.webp';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Chart from "../svg/Chart.svg";

interface CustomCanvasRect extends CanvasRect {
  eraseAll(): void;
  clear(): void;
  undo(): void;
  redo(): void;
}

interface InpaintingModals {
  CloseInpaintingModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetInpaintingCreated: React.Dispatch<React.SetStateAction<boolean>>;
  EditInpainting: boolean;
  SavedDrawingImage: any;
  setSelectImageModal?:React.Dispatch<React.SetStateAction<boolean>>;
  selectInPaintImg:any
}
interface CustomCanvasRect extends CanvasRect {
  eraseAll(): void;
}
const InpaintingModals = ({
  CloseInpaintingModal,
  SetInpaintingCreated,
  EditInpainting,
  SavedDrawingImage,setSelectImageModal,selectInPaintImg
}: InpaintingModals) => {
  const [brushSize, setBrushSize] = useState<number[]>([10]);
  const [brushSizeToggle, setBrushSizeToggle] = useState<boolean>(false);
  const canvasRef = useRef<CustomCanvasRect>(null);

  const brushSizes: number = parseInt(brushSize[0]);
  const [Data, setData] = useState();
  const SaveImage = () => {
    const image = canvasRef?.current?.exportSvg();
    image
      .then((data: any) => {
        const Images = data;
        setData(Images);
        SavedDrawingImage(Images);
        localStorage.setItem('savedDrawingImage', Images);
      })
      .catch((e: string) => {
        console.log(e);
      });

    CloseInpaintingModal(false);
    SetInpaintingCreated(true);
  };


  

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] py-8'
      closeModal={() => CloseInpaintingModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* Header */}
      <div className='flex items-center justify-between border-b border-white/[0.08] border-b-white/[0.08] px-6 pb-6'>
        <h5 className='text-lg font-bold'>
          {EditInpainting ? 'Edit' : ''} Inpainting{' '}
        </h5>
        <button
          className='h-[24px] w-[24px]'
          onClick={() => CloseInpaintingModal(false)}
        >
          <Image src={CloseIcon} className='' />
        </button>
      </div>
      <div className='px-6 pt-6'>
        {/* <div className='h-[150px] w-[150px]'>
          <div
            dangerouslySetInnerHTML={{
              __html: `     ${Data}       `
            }}
          />
        </div> */}
        {/* <img
          src={Data || ''}
          className='object-cover w-full h-full rounded-lg'
        /> */}

        <div className='sub-banner relative m-auto h-[640px] w-[640px] rounded-lg '>
          <ReactSketchCanvas
            ref={(canvasDraw: any) => (canvasRef.current = canvasDraw)}
            strokeWidth={brushSizes}
            strokeColor={'#5848BC'}
            backgroundImage={Image1.src}
            exportWithBackgroundImage={true}
            width={640}
            height={640}
            className='w-full h-full !border-none rounded-xl overflow-auto'
          />

          <div className='absolute flex items-center gap-2 right-3 top-3'>
            <div className='relative flex items-center justify-center gap-3 rounded-[100px] bg-[#000000CC] p-3'>
              <div className='group relative h-5 cursor-pointer border-r border-[#FFFFFF3D] pr-3'>
                <Image src={ImageSquare} className='w-full h-full' onClick={()=>setSelectImageModal(true)}/>
                <div className='absolute -left-14 -top-12 w-max'>
                  <Tooltip Text={'Replace image'} />
                </div>
              </div>
              <div
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => setBrushSizeToggle(!brushSizeToggle)}
              >
                <Image src={BrushWhite} className='w-full h-full' />
                <Image src={ArrowDown} className='w-full h-full' />
              </div>
              {brushSizeToggle && (
                <div className='absolute right-0 top-12 flex h-[68px] w-[211px] items-center justify-center rounded-[14px] bg-[#121212] px-5 '>
                  <RangePicker values={brushSize} setValues={setBrushSize} />
                </div>
              )}
            </div>
            <div
              className='flex  cursor-pointer items-center gap-1 rounded-[100px] bg-[#000000CC] p-3'
              onClick={() => {
                canvasRef.current?.resetCanvas();
              }}
            >
              {EditInpainting ? (
                <Image src={RestWhite} className='w-full h-full' />
              ) : (
                <Image src={Rest} className='w-full h-full' />
              )}
              <p
                className={`${
                  EditInpainting ? 'text-white' : 'text-[#FFFFFF7A]'
                }`}
              >
                Reset
              </p>
            </div> 
            
          </div>
          <div className='absolute bottom-3 left-3 flex items-center justify-center gap-3 rounded-[100px] bg-[#000000CC] px-5 py-3'>
            <Image
              src={Backward}
              className='object-cover w-full h-full cursor-pointer'
              onClick={() => {
                canvasRef.current?.undo();
              }}
            />
            <p className='h-[16px] w-[10px] border-r border-[#FFFFFF3D]'></p>
            <Image
              src={ForwardWhite }
              className='object-cover w-full h-full text-white cursor-pointer '
              onClick={() => {
                canvasRef.current?.redo()
              }}
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end gap-3 mx-6 mt-6 font-semibold text-white'>
        <button
          className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
          onClick={() => CloseInpaintingModal(false)}
        >
          Cancel
        </button>
        {EditInpainting ? (
          <button
            className='rounded-[14px] bg-[#5848BC] px-5 py-3'
            onClick={() => {
              SaveImage();
            }}
          >
            Save
          </button>
        ) : (
          <button
            className='rounded-[14px] bg-[#5848BC] px-5 py-3'
            onClick={() => {
              SaveImage();
            }}
          >
            Create
          </button>
        )}
      </div>
    </Modal>
  );
};

export default InpaintingModals;
