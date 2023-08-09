import React from 'react'
import Dropzone from 'react-dropzone'
import { useDropzone } from "react-dropzone";
// import uploadImg from "../images/upload.png";
import Image from "next/image";
// import downloadImage from "../images/download-img.png";

const ImageDropZone = () => {
    const maxSize = 2 * 1024 * 1024;
    const {
      isDragActive,
      getRootProps,
      getInputProps,
      isDragReject,
      acceptedFiles,
      fileRejections,
    } = useDropzone({
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
        "image/png": [],
      },
      multiple: true,
    //   maxFiles: 1,
      maxSize: 2 * 1024 * 1024,
    });
    console.log(acceptedFiles[0]?.size, "setLogo", fileRejections[0]?.errors[0]);
    if (acceptedFiles?.length) {
      console.log(acceptedFiles);
    }
    if (fileRejections[0]?.errors[0]) {
     console.log(fileRejections[0]?.errors);
    }
    const files = acceptedFiles.map((file: any) => (
      <li key={file.path}>
        {/* <Image src={file.path} alt="" width="100" height="100"/> */}
        {file.path} - {file.size} bytes
      </li>
    ));

    // const thumbs = files.map((file) => (
    //     <div key={file.name}>
    //       <div style={thumbInner}>
    //         <img src={file.preview} style={img} alt={file.name} />
    //       </div>
    //       <button onClick={removeFile(file)}>Remove File</button>
    //     </div>
    //   ));

    
  return (
//     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
//   {({getRootProps, getInputProps}) => (
//     <section>
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     </section>
//   )}
// </Dropzone>
<>

  {/* <section className="flex items-center px-4 py-2 text-white transition rounded cursor-pointer btn btn-secondary hover:opacity-70 bg-charcoal w-max flexs">
    <div
      {...getRootProps({
        className: "dropzone flex items-center",
      })}
    >
      <input {...getInputProps()} />
      <p className="mb-1 mr-5 !text-white">Upload</p> */}
      {/* <Image
        className="-rotate-180"
        src={downloadImage}
        alt="upload file"
      /> */}
    {/* </div>
    <aside>
      <ul>{files}</ul>
    </aside>
  </section> */}


  <section className="container p-3 mt-3 mb-16 border-2 border-dashed cursor-pointer border-gray">
    <div
      {...getRootProps({
        className: "dropzone flex items-center justify-center flex-col",
      })}
    >
      <input {...getInputProps()} />
      <h6 className="mb-1 text-sm text-purple">
        Drag and drop files here or upload
      </h6>
      {/* <Image src={uploadImg} alt="upload file" /> */}
    </div>
    <aside>
      <ul>{files}</ul>
      {fileRejections[0]?.errors[0] && (
        <li className="mt-2 text-danger">
            {/* <Image src={fileRejections[0]?.errors[0].message} alt=""/> */}
          {fileRejections[0]?.errors[0].message}
        </li>
      )}
      {/* {thumbs} */}
    </aside>
 
  </section>

</>
  )
}

export default ImageDropZone