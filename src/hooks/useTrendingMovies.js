import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import {  addTrendingMovies } from '../utils/movieSlice'
  //fetching data from TMDB api and update store
 const useTrendingMovies = () => {

     const dispatch = useDispatch()
     const getTrendingMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      
       const json = await data.json();
      
       dispatch(addTrendingMovies(json.results))
     }
     
     useEffect(() => {
       getTrendingMovies()
     },[])
 }
export default useTrendingMovies;