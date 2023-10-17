import React, { useRef} from 'react'
import language from '../utils/languageConstansts'

import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addMovieResult } from '../utils/gptSlice';
const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language);
    const searchText = useRef(null);
     const dispatch = useDispatch()
    const searchMovieTMDB = async(movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS) ;
     const json = await data.json();

     return json.results
    }
    const handleGptSearchClick = async() => {
   

        try{
          const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies ,comma seperated like the example result given ahead . Example Result: Gadar , Sholay , Don , Golmaal , Koi mil gya"; 
          const gptResults =  await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });
            
            const gptMovies = gptResults.choices[0]?.message?.content.split(",") //this content.spit will give array of movies.
             const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)) //this will give array of 5 promises
             const tmdbResults = await Promise.all(promiseArray) //this tmdbResults resolve all the 5 promises and give results.
              
              dispatch(addMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
        }
        catch(err){
          console.log(err)
        }
         
        
    //   }
    // const handleGptSearchClick = async () => {
    //   console.log(searchText.current.value);
    //   // Make an API call to GPT API and get Movie Results
  
    //   const gptQuery =
    //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //     searchText.current.value +
    //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  
    //   const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: gptQuery }],
    //     model: "gpt-3.5-turbo",
    //   });
  
    //   if (!gptResults.choices) {
    //     // TODO: Write Error Handling
    //   }
  
    //   console.log(gptResults.choices?.[0]?.message?.content);
  
    //   // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  
    //   // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
  
    //   // For each movie I will search TMDB API
  
    //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //   // [Promise, Promise, Promise, Promise, Promise]
  
    //   const tmdbResults = await Promise.all(promiseArray);
  
    //   console.log(tmdbResults);
  
    //   dispatch(
    //     addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    //   );
    // };
  
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