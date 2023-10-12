import React from 'react'
import language from '../utils/languageConstansts'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language);
    const handleGptSearchClick = () => {
        
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2  grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input className='p-4 m-4 col-span-9' type='text' placeholder= {language[langKey].gptSearchPlaceHolder}/>
            <button className='px-4 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar