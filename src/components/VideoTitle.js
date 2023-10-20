import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video md:pt-[20%] pt-[80%]  px-6 md:px-24 absolute text-white bg-gradient-to-r h-full from-black'>
        <h1 className=' text-2xl md:font-bold md:text-6xl'>{title}</h1>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-gray-500'>Play▶️</button>
            <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl mx-2 rounded-lg bg-opacity-50' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle