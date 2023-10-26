import React from 'react'
import AvatarEditor from 'react-avatar-editor'

const ProfileCropper = () => {
  return (
    <>
       <AvatarEditor
        image="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      /> 
    </>
  )
}

export default ProfileCropper
