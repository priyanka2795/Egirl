import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@/assets/xmark (1).webp';
import SearchIcon from '@/assets/search-alt (1).webp';
import ArrowDown from '@/assets/arrow-down.webp';
import ArrowUp from '@/assets/chevron-up.webp';
import PoseImage from '@/assets/poseimage1.webp';
import PoseImage1 from '@/assets/poseimage2.webp';
import PoseImage2 from '@/assets/poseimage3.webp';
import PoseImage3 from '@/assets/poseimage4.webp';
import PoseImageSelect from '@/assets/poseimageselect.webp';
import Rest from '@/assets/rotate-cw.webp';
import Rotate from '@/assets/rotate.webp';
import Backward from '@/assets/flip-backward.webp';
import Forward from '@/assets/flip-forward.webp';
import RestWhite from '@/assets/rotate-cw-white.webp';
import RotateWhite from '@/assets/rotate-white.webp';
import BackwardWhite from '@/assets/flip-backward-white.webp';
import PosingPreviewModal from './posingPreviewModal';
import { ifError } from 'assert';

const posepresets = [
  {
    pose: 'General poses',
    presetes: [
      {
        img: PoseImage1,
        name: 'Pose 1'
      },
      {
        img: PoseImage2,
        name: 'Pose 2'
      },
      {
        img: PoseImage3,
        name: 'Pose 3'
      }
    ]
  },
  {
    pose: 'Standing positions',
    presetes: [
      {
        img: PoseImage1,
        name: 'Pose 1'
      },
      {
        img: PoseImage2,
        name: 'Pose 2'
      },
      {
        img: PoseImage3,
        name: 'Pose 3'
      }
    ]
  },
  {
    pose: 'NSFW positions',
    presetes: [
      {
        img: PoseImage1,
        name: 'Pose 1'
      },
      {
        img: PoseImage2,
        name: 'Pose 2'
      },
      {
        img: PoseImage3,
        name: 'Pose 3'
      }
    ]
  },
  {
    pose: 'Running',
    presetes: [
      {
        img: PoseImage1,
        name: 'Pose 1'
      },
      {
        img: PoseImage2,
        name: 'Pose 2'
      },
      {
        img: PoseImage3,
        name: 'Pose 3'
      }
    ]
  },
  {
    pose: 'Action positions',
    presetes: [
      {
        img: PoseImage1,
        name: 'Pose 1'
      },
      {
        img: PoseImage2,
        name: 'Pose 2'
      },
      {
        img: PoseImage3,
        name: 'Pose 3'
      }
    ]
  }
];

interface PosingModal {
  PosingClose: React.Dispatch<React.SetStateAction<boolean>>;
  SetPosingCreated: React.Dispatch<React.SetStateAction<boolean>>;
  EditPosing: boolean;
}
const PosingModal = ({
  PosingClose,
  SetPosingCreated,
  EditPosing
}: PosingModal) => {
  const [posePresetsActive, setPosePresetsActive] = useState(null);
  const [posePresets, setPosePresets] = useState<number | null>(null);
  const [selectPose, setSelectPose] = useState<boolean>(false);
  const [previewPose, setPreviewPose] = useState<boolean>(false);
  const [searchPresets, setSearchPresets] = useState<boolean>(false);
  const [poseImageSelect, setPoseImageSelect] = useState();
  const AllPosePresets = (index: number) => {
    setPosePresets((prev) => (prev === index ? null : index));
  };
  const PosePresetsItem = (items: any) => {
    setPosePresetsActive((prev) => (prev === items.name ? null : items.name));
    setSelectPose(true);
    setPoseImageSelect(items.img);
  };
  const PoseCreated = (): void => {
    SetPosingCreated(true);
    PosingClose(false);
  };
  useEffect(() => {
    if (EditPosing) {
      setSelectPose(true);
    } else {
      setSelectPose(false);
    }
  }, []);

  return (
    <>
      {previewPose ? (
        <PosingPreviewModal
          PosingPreviewClose={setPreviewPose}
          PoseCreated={PoseCreated}
        />
      ) : (
        <Modal
          open={true}
          modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] py-8'
          closeModal={() => PosingClose(false)}
          modalOverlayStyle='!bg-black/80'
        >
          {/* Header */}
          <div className='border-white/ [0.08] flex items-center justify-between   border-b border-b-white/[0.08] px-6 pb-6'>
            <h5 className='text-lg font-bold'>
              {EditPosing ? 'Edit' : ''} Posing
            </h5>
            <button
              className='h-[24px] w-[24px]'
              onClick={() => PosingClose(false)}
            >
              <Image src={CloseIcon} className='' />
            </button>
          </div>

          <div className='flex '>
            <div className='relative flex-1 sub-banner '>
              {selectPose ? (
                <>
                  {EditPosing ? (
                    <Image
                      src={PoseImageSelect}
                      className='object-cover w-full max-h-full'
                    />
                  ) : (
                    <Image
                      src={poseImageSelect||''}
                      className='object-cover w-full max-h-full'
                    />
                  )}
                </>
              ) : (
                ''
              )}
              <div className='absolute flex items-center gap-2 right-3 top-3'>
                <div className='flex cursor-pointer items-center gap-1 rounded-full bg-[#000000CC] p-3'>
                  {selectPose ? (
                    <Image src={RotateWhite} className='w-full h-full ' />
                  ) : (
                    <Image src={Rotate} className='w-full h-full ' />
                  )}
                </div>
                <div className='flex  cursor-pointer items-center gap-1 rounded-[100px] bg-[#000000CC] p-3'>
                  {selectPose ? (
                    <Image src={RestWhite} className='w-full h-full' />
                  ) : (
                    <Image src={Rest} className='w-full h-full' />
                  )}
                  <p
                    className={`${
                      selectPose ? 'text-white' : 'text-[#FFFFFF7A]'
                    }`}
                  >
                    Reset
                  </p>
                </div>
              </div>
              <div className='absolute bottom-3 left-3 flex items-center justify-center gap-3 rounded-[100px] bg-[#000000CC] px-5 py-3'>
                {selectPose ? (
                  <Image
                    src={BackwardWhite}
                    className='object-cover w-full h-full cursor-pointer'
                  />
                ) : (
                  <Image
                    src={Backward}
                    className='object-cover w-full h-full cursor-pointer'
                  />
                )}
                <p className='h-[16px] w-[10px] border-r border-[#FFFFFF3D]'></p>
                <Image
                  src={Forward}
                  className='object-cover w-full h-full cursor-pointer'
                />
              </div>
            </div>

            <div className='w-[324px] border-l border-[#FFFFFF0D] pb-3'>
              <div className='px-5 pt-5 pb-3'>
                <div className='flex items-center justify-between'>
                  <h6 className='text-[15px] font-semibold'>Pose presets </h6>
                  {searchPresets ? (
                    ''
                  ) : (
                    <button onClick={() => setSearchPresets(!searchPresets)}>
                      <Image src={SearchIcon} className='w-full h-full' />
                    </button>
                  )}
                </div>
                {searchPresets && (
                  <div className='mt-4 flex h-[40px] items-center justify-between gap-[6px] rounded-[10px] bg-[#FFFFFF0D] px-3'>
                    <Image
                      src={SearchIcon}
                      className='object-cover w-full h-full'
                    />
                    <input
                      type='text'
                      id='negative'
                      placeholder='Search'
                      className='h-12 rounded-[14px] border-none bg-transparent p-0 text-white placeholder:text-[#979797] focus:border-none focus:ring-0 active:border-none'
                      name='negative'
                    />
                    <Image
                      src={CloseIcon}
                      className='object-cover w-full h-full cursor-pointer'
                      onClick={() => setSearchPresets(!searchPresets)}
                    />
                  </div>
                )}
              </div>
              <div className='flex flex-col gap-[6px] px-5'>
                {posepresets.map((items, index) => (
                  <div
                    className={`w-full  max-w-[284px] rounded-[14px] p-3 ${
                      posePresets === index
                        ? 'h-auto bg-[#0000007A]'
                        : 'h-[72px] overflow-hidden bg-[#FFFFFF0D]'
                    } `}
                  >
                    <div
                      className={`flex cursor-pointer items-center gap-2 pb-4`}
                      onClick={() => AllPosePresets(index)}
                    >
                      <div className='sub-banner h-12 !w-12 overflow-hidden rounded-lg'>
                        <Image
                          src={PoseImage}
                          className='object-cover w-full h-full'
                        />
                      </div>
                      <div className='flex-1 '>
                        <div className='flex items-center justify-between'>
                          <p>{items.pose}</p>
                          {posePresets === index ? (
                            <Image src={ArrowUp} className='w-full h-full' />
                          ) : (
                            <Image src={ArrowDown} className='w-full h-full' />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='border-t border-[#FFFFFF14] pt-2'>
                      <div className='grid grid-cols-2 gap-1'>
                        {items.presetes.map((item, index) => (
                          <div
                            className='sub-banner relative h-[128px] cursor-pointer overflow-hidden rounded-lg'
                            onClick={() => PosePresetsItem(item)}
                          >
                            {posePresetsActive === item.name ? (
                              <div className='absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#5848BC29]'></div>
                            ) : (
                              ''
                            )}
                            <Image
                              src={item.img}
                              className='object-cover w-full h-full'
                            />
                            <div
                              className={`${
                                posePresetsActive == item.name
                                  ? 'bg-[#5848BC]'
                                  : 'bg-[#0000007A]'
                              } absolute bottom-0 left-0 flex h-[34px] w-full items-center justify-center`}
                            >
                              <p className='text-[13px] font-semibold'>
                                {item.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between border-t border-[#FFFFFF0D] px-6 pt-6 font-semibold text-white'>
            {selectPose ? (
              <button
                className='rounded-[14px] bg-[#FFFFFF14] px-5 py-3'
                onClick={() => setPreviewPose(true)}
              >
                Preview
              </button>
            ) : (
              <button className='rounded-[14px] bg-[#FFFFFF14] px-5 py-3'>
                Preview
              </button>
            )}
            <div className='flex items-center justify-end gap-3'>
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => PosingClose(false)}
              >
                Cancel
              </button>
              {selectPose ? (
                <button
                  className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                  onClick={() => PoseCreated()}
                >
                  Create
                </button>
              ) : (
                <button className='rounded-[14px] bg-[#5848BC] px-5 py-3'>
                  Create
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PosingModal;
