import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import { addPopularMovies } from '../utils/movieSlice'
  //fetching data from TMDB api and update store
 const usePopularMovies = () => {
     const popularMovies = useSelector((store) => store.movies.popularMovies)
     const dispatch = useDispatch()
     const getPopularMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1' , API_OPTIONS)
      
       const json = await data.json();
      
       dispatch(addPopularMovies(json.results))
     }
     
     useEffect(() => {
      if(!popularMovies) getPopularMovies()
     },[])
 }
export default usePopularMovies;