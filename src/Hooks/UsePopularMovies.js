import { useDispatch } from "react-redux";
import {  playNowPlayingPopular } from "../utils/moviesSlice";
import { API_Options } from "../utils/Constant";
import { useEffect } from "react";

 
 const UsePopularMovies=()=>{

 const dispatch = useDispatch();
  const getmovielist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_Options
    );
    const response = await data.json();
    // console.log(response.results);
    // console.log("hello");
    dispatch(playNowPlayingPopular(response.results));
  };

  useEffect(() => {
    getmovielist();
  }, []);
}
export default UsePopularMovies;