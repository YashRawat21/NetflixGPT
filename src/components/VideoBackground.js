import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos"



const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
useMovieVideos(movieId);
  return (
    <div className="w-screen h-full"><iframe className="w-full aspect-video h-full"  src={"https://www.youtube.com/embed/" + trailerVideo?.key +  "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></div>
  )
}

export default VideoBackground;