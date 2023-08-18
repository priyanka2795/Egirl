import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
// import uploadImg from "../images/upload.png";
// import downloadImage from "../images/download-img.png";
interface ImageDropZoneProp{
  files: any;
  uploadedItemState: any;
  setUploadedItemState: any;
}
const ImageDropZone = ({files , uploadedItemState , setUploadedItemState}:ImageDropZoneProp) => {
  // const [uploadedItemState, setUploadedItemState] = useState<any>();
  const maxSize = 2 * 1024 * 1024;
  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': []
    },
    multiple: true,
    maxFiles: 10,
    maxSize: 2 * 1024 * 1024
  });

  // console.log(acceptedFiles[0]?.size, "setLogo", fileRejections[0]?.errors[0]);

  if (acceptedFiles?.length) {
    console.log(acceptedFiles, 'test 1');
    // setUploadedItemState(Object.assign(acceptedFiles[0],{preview:URL.createObjectURL(acceptedFiles[0])}))

    if (!uploadedItemState) {
      setUploadedItemState(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0])
        })
      );
    }
  }
  if (fileRejections[0]?.errors[0]) {
    //  console.log(fileRejections[0]?.errors);
  }
  
files(acceptedFiles);
// files = acceptedFiles.map((file: any) => (
//     <li key={file.path}>
//       <Image src={uploadedItemState?.preview} alt='' width='100' height='100' />
//       {/* {file.path} - {file.size} bytes */}
//     </li>
//   ));

  // const thumbs = files.map((file) => (
  //     <div key={file.name}>
  //       <div style={thumbInner}>
  //         <img src={file.preview} style={img} alt={file.name} />
  //       </div>
  //       <button onClick={removeFile(file)}>Remove File</button>
  //     </div>
  //   ));

  console.log(uploadedItemState, 'test the uplpaswd');
  return (
    <>
      <section>
        <div
          {...getRootProps({
            className: 'dropzone flex items-center justify-center flex-col'
          })}
        >
          <input {...getInputProps()} />
          
          <h6 className='mb-1 text-sm text-purple'>
          Upload image
          </h6>
          {/* <Image src={uploadImg} alt="upload file" /> */}
        </div>
        <aside>
          <ul>{files}</ul>
          {fileRejections[0]?.errors[0] && (
            <li className='mt-2 text-danger'>
              {/* <Image src={fileRejections[0]?.errors[0].message} alt=""/> */}
              {fileRejections[0]?.errors[0].message}
            </li>
          )}
          {/* {thumbs} */}
        </aside>
      </section>
    </>
  );
};

export default ImageDropZone;
