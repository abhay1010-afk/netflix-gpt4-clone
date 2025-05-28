import { useSelector } from "react-redux";
import useMovieVideos from "../Hooks/UseMovieVideos";


const VideoBg=({movieId})=>{
      const movieTrailer=useSelector((store)=>store.movies?.nowPlayingTrailer);
      useMovieVideos(movieId);
    return (
        <div className="w-screen">
           <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+movieTrailer?.key +"?&autoplay=1&mute=1"} 
           title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> 
        </div>
    )
};
export default VideoBg;