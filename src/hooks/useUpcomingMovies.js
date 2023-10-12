import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import {  addUpcomingMovies } from '../utils/movieSlice'
  //fetching data from TMDB api and update store
 const useUpcomingMovies = () => {

     const dispatch = useDispatch()
     const getUpcomingMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      
       const json = await data.json();
      
       dispatch(addUpcomingMovies(json.results))
     }
     
     useEffect(() => {
       getUpcomingMovies()
     },[])
 }
export default useUpcomingMovies;