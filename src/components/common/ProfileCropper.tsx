import RangePicker from '@components/creator-studio/common/RangePicker';
import React, {useState} from 'react'
import AvatarEditor from 'react-avatar-editor'

const ProfileCropper = () => {
  const [values, setValues] = useState<number[]>([1]);
  if(values < [1.0]){
    setValues([1.0])
  }
  return (
    <>
       <AvatarEditor
        image="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={values}
        rotate={0}
      /> 
       {/* <input type="range" id="slider" className="slider min-w-full bg-cyan" min="10" max="50" value="10" step="1" /> */}
       <RangePicker values={values} setValues={setValues} />
       <div className='text-white flex w-[50px] items-center justify-center rounded-[10px] bg-white/[0.05] py-[8px]'>
                {values}
              </div>
    {/* <div className="flex p-2 border-2 border-white bg-black">
      <button id="cancelBtn" className="btn mr-2">Cancel</button>
      <button id="saveBtn" className="btn bg-blue-500">Save</button>
    </div> */}


    </>
  )
}

export default ProfileCropper
