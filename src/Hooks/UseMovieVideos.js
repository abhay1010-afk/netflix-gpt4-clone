import { useDispatch } from "react-redux";
import { playNowPLayingTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/Constant";

const useMovieVideos=(movieId)=>{
    const dispatch=useDispatch();

    const Moviedata=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_Options);
        const response=await data.json();
        // console.log(response);
        const filterData=response.results.filter((video)=>video.type==='Trailer');
        // console.log(filterData);
        const trailer=filterData.length? filterData[0]:response.results[0];
        // console.log(trailer);
        dispatch(playNowPLayingTrailer(trailer));
    }
    useEffect(()=>{
        Moviedata();
    },[]);
}
export default useMovieVideos;