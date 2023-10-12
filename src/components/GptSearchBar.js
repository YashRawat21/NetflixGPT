import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2  grid grid-cols-12'>
            <input className='p-4 m-4 col-span-9' type='text' placeholder='What would you like to watch today?'/>
            <button className='px-4 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar