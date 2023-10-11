import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[20%]'>
        <form className=' bg-black w-1/2'>
            <input className='p-4 m-4' type='text' placeholder='What would you like to watch today?'/>
            <button className='px-4 py-2 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar