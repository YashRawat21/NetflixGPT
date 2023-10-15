import React, { useRef} from 'react'
import language from '../utils/languageConstansts'
import { useSelector } from 'react-redux'
import openai from '../utils/openai';
const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language);
    const searchText = useRef(null)
    const handleGptSearchClick = async() => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies ,comma seperated like the example result given ahead . Example Result: Gadar , Sholay , Don , Golmaal , Koi mil gya"; 
   const gptResults =  await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices)
    }

    
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2  grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder= {language[langKey].gptSearchPlaceHolder}/>
            <button className='px-4 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar