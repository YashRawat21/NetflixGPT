import React from 'react'
import{ useSelector} from "react-redux"
import MovieList from './MovieList'
import Shimmer from './Shimmer'


const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt)
  const {movieNames,movieResults} = gpt
  console.log(movieResults)
  
  return  ( <>
    
    { movieResults.length!= 0  && (< div className='p-4 m-4 bg-black text-white bg-opacity-90 ' >
      {movieNames.map((movieName,index) => ( <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>))}

    </div>)
  }
  </>
  )
}

export default GptMovieSuggestions
