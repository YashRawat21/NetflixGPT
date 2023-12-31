import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

 export const useMovieVideos = (movieId) => {

   const trailerVideo = useSelector(store => store.movies.trailerVideo)
      const dispatch = useDispatch();
      const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US' , API_OPTIONS )
         
        const json = await data.json();
          const filterData = json.results.filter((video) => video.type === "Trailer");
          const trailer = filterData.length === 0 ? filterData[0] : json.results[0] ;
           dispatch(addTrailerVideo(trailer))  
      } 
      useEffect(()=> {
      if(!trailerVideo)  getMovieVideo()
      },[])
}
export default useMovieVideos;