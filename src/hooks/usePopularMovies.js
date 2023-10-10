import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import { addPopularMovies } from '../utils/movieSlice'
  //fetching data from TMDB api and update store
 const usePopularMovies = () => {

     const dispatch = useDispatch()
     const getPopularMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1' , API_OPTIONS)
      
       const json = await data.json();
       console.log(json)
       dispatch(addPopularMovies(json.results))
     }
     
     useEffect(() => {
       getPopularMovies()
     },[])
 }
export default usePopularMovies;