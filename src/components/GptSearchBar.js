import React from 'react'
import language from '../utils/languageConstansts'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2  grid grid-cols-12'>
            <input className='p-4 m-4 col-span-9' type='text' placeholder= {language.hindi.gptSearchPlaceHolder}/>
            <button className='px-4 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4'>{language.hindi.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar