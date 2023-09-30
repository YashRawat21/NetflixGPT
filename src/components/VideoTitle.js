import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-black text-white py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg bg-opacity-50'>Play▶️</button>
            <button className='bg-gray-500 text-white py-1 mx-2 md:py-4 px-3 md:px-12 text-xl  rounded-lg bg-opacity-50' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle