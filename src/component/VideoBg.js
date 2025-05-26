import { useSelector } from "react-redux";
import useMovieVideos from "../Hooks/UseMovieVideos";


const VideoBg=({movieId})=>{
      const movieTrailer=useSelector((store)=>store.movies?.nowPLayingTrailer);
      useMovieVideos(movieId);
    return (
        <div className="">
           <iframe className="w-1/2 h-1/2" src={"https://www.youtube.com/embed/"+movieTrailer?.key} 
           title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> 
        </div>
    )
};
export default VideoBg;