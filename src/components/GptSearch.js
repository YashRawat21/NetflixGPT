import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
 
  return (
     <>
     <div className ='fixed -z-10'>

    <img className = "h-screen  md:h-full object-cover"src= {BG_IMG} />
</div>
    <div>
        
        <GptSearchBar />
       <GptMovieSuggestions />
        
    </div>
    </>
  )
}

export default GptSearch