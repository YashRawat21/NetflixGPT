import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
         if(movies ===null) return;
    const mainMovie = movies[3];

    const {original_title , overview,id} = mainMovie;
  return (
    <div className='relative h-[100vh]'>
        <VideoTitle title = {original_title} />
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer