import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '../../../../public/assets/xmark (1).png';
import Image1 from '../../../../public/assets/inpaint-Image.png';
import Rest from '../../../../public/assets/rotate-cw.png';
import ImageSquare from '../../../../public/assets/image-square-white.png';
import BrushWhite from '../../../../public/assets/paintbrush-alt-white.png';
import ArrowDown from '../../../../public/assets/chevron-down.png';
import Backward from '../../../../public/assets/flip-backward-white.png';
import Forward from '../../../../public/assets/flip-forward.png';
import RangePicker from '../common/RangePicker';
import Tooltip from '@components/common/tooltip';
import RestWhite from '../../../../public/assets/rotate-cw-white.png';

interface InpaintingModals {
  CloseInpaintingModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetInpaintingCreated: React.Dispatch<React.SetStateAction<boolean>>;
  EditInpainting: boolean;
}
const InpaintingModals = ({
  CloseInpaintingModal,
  SetInpaintingCreated,
  EditInpainting
}: InpaintingModals) => {
  const [brushSize, setBrushSize] = useState<number[]>([20]);
  const [brushSizeToggle, setBrushSizeToggle] = useState<boolean>(false);

  //////////////////////////////

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas:any = canvasRef.current;
    const context = canvas.getContext("2d");

    const image:any = imageRef.current;

    // Set the canvas size to match the image size
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image on the canvas
    context.drawImage(image, 0, 0);

    // Set up event listeners for drawing
    let isDrawing = false;

    const startDrawing = (e:any) => {
      isDrawing = true;
      draw(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
      context.beginPath();
    };

    const draw = (e:any) => {
      if (!isDrawing) return;

      context.lineWidth = 5;
      context.lineCap = "round";
      context.strokeStyle = "black";

      context.lineTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
      context.stroke();
      context.beginPath();
      context.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
    };

    // Attach event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    // Cleanup event listeners on component unmount
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);
  ///////////////////////////

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
        <div className='sub-banner relative m-auto  h-[640px] w-[640px] '>
          {/* <Image
            src={Image1}
            className='object-cover w-full h-full rounded-lg'
          /> */}
            {/* canvasssssssss */}
             <div style={{ position: 'relative' }}>
      <img
        ref={imageRef}
        src="https://cdn4.sharechat.com/Animegirlimages_278af637_1626869450549_sc_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg" 
        alt="Drawing Canvas"
        style={{ width: '100%', height: 'auto' }}
      />
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
    {/*  */}
          <div className='absolute flex items-center gap-2 right-3 top-3'>
            <div className='relative flex items-center justify-center gap-3 rounded-[100px] bg-[#000000CC] p-3'>
              <div className='group relative h-5 cursor-pointer border-r border-[#FFFFFF3D] pr-3'>
                <Image src={ImageSquare} className='w-full h-full' />
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
            <div className='flex  cursor-pointer items-center gap-1 rounded-[100px] bg-[#000000CC] p-3'>
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
            />
            <p className='h-[16px] w-[10px] border-r border-[#FFFFFF3D]'></p>
            <Image
              src={Forward}
              className='object-cover w-full h-full cursor-pointer'
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
              CloseInpaintingModal(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className='rounded-[14px] bg-[#5848BC] px-5 py-3'
            onClick={() => {
              SetInpaintingCreated(true), CloseInpaintingModal(false);
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
