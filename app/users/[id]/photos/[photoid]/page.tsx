import React from 'react'

interface Props{
    params:{id:number; photoid:number;}
}

const PhotoPage = ({params:{photoid,id}}:Props) => {
  return (
    <div>PhotoPage Id {id}  PhotoId {photoid}</div>
  )
}

export default PhotoPage