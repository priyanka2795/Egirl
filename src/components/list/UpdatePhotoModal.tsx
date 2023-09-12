import React, { useState, useRef } from 'react';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import { Modal } from '@components/modal/modal';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop
} from 'react-image-crop';
import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';
import 'react-image-crop/dist/ReactCrop.css';
import PreviewProfile from './PreviewProfile';
// import Image from 'next/image';

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

interface UpdatePhotoProps {
  closeModalState: any;
}
const UpdatePhotoModal = ({ closeModalState }: UpdatePhotoProps) => {
  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [isPreview, setIsPreview] = useState(false);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const handleShowPreview = () => {
    setIsPreview(true);
  };

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max w-[753px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
      closeModal={() => closeModalState(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex gap-2 border-b border-white/[0.08] p-6'>
        <div className='flex text-[18px] font-bold leading-6 text-white'>
          {isPreview ? 'Preview' : 'Upload new photo'}
        </div>
        <div
          className={`${
            isPreview ? 'ml-[605px]' : 'ml-[519px]'
          } mt-1 h-6 w-6 cursor-pointer`}
          onClick={() => closeModalState(false)}
        >
          <CloseIcon />
        </div>
      </div>
      <div className='p-5 pb-0'>
        {isPreview ? (
          <PreviewProfile />
        ) : (
          <>
            <div className='Crop-Controls'>
              <input type='file' accept='image/*' onChange={onSelectFile} />
            </div>
            {!!imgSrc && (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                minHeight={200}
              >
                <img
                  ref={imgRef}
                  alt='Crop me'
                  src={imgSrc}
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
            {!!completedCrop && (
              <div>
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    border: '1px solid black',
                    objectFit: 'contain',
                    width: completedCrop.width,
                    height: completedCrop.height
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>

      <div
        className={`flex items-center ${
          isPreview ? 'justify-end' : 'justify-between'
        } `}
      >
        {isPreview ? (
          ''
        ) : (
          <button
            className='ml-5 flex items-center justify-center rounded-xl border-none bg-zinc-800 px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={handleShowPreview}
          >
            Preview
          </button>
        )}

        <div className='flex items-end justify-end gap-3 px-6 py-4'>
          {isPreview ? (
            <button
              className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
              onClick={() => setIsPreview(false)}
            >
              Return to edit
            </button>
          ) : (
            <button
              className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
              onClick={() => closeModalState(false)}
            >
              Cancel
            </button>
          )}

          <button
            className='flex items-center justify-center rounded-xl bg-[#5848BC] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={() => closeModalState(false)}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdatePhotoModal;
