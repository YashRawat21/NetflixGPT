import React, { useState } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
     <>
     <div className ='fixed -z-10'>

    <img className = "h-screen  md:h-full object-cover"src= {BG_IMG} />
</div>
    <div className=''>
        
        <GptSearchBar
        setLoading={setLoading}
        />
       <GptMovieSuggestions
       loading={loading}
       />
        
    </div>
    </>
  )
}

export default GptSearch