import React from 'react'
import{ useSelector} from "react-redux"
const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt)
  const {movieNames,movieResults} = gpt

  // if(!movieNames) return null;
  // console.log(movieNames)
  return (
     <div className='p-4 m-4 bg-black text-white' >
      {movieNames} 
    </div>
  )
}

export default GptMovieSuggestions
