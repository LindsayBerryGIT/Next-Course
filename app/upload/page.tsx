'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult{
    resultPublicId: string;
}

const UploadPage = () => {
    const [publicId,setPublicId] = useState('');
    return (
        <>
        {publicId&& <CldImage src={publicId} alt="Uploaded image"/>}
        <CldUploadWidget uploadPreset='hosteoia' 
        onUploadAdded={(result,widget)=> {
            if(result.event!='success'){return;}
            const info = result.info as unknown as CloudinaryResult;
            setPublicId(info.resultPublicId);
            }}>
            {({open}) => 
            <button onClick={()=>open()} className='btn btn-primary'>Upload</button>}
        </CldUploadWidget>
        </>
  )
}

export default UploadPage