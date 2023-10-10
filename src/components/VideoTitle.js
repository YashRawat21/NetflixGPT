import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r h-full from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-gray-500'>Play▶️</button>
            <button className='bg-gray-500 text-white py-1 mx-2 md:py-4 px-3 md:px-12 text-xl  rounded-lg bg-opacity-50' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle