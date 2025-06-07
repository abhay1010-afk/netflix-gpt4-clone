import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_Options } from "../utils/Constant";
import { useEffect } from "react";

 
 const UseNowPayingMovie=()=>{

 const dispatch = useDispatch();
 
  const getmovielist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_Options
    );
    const response = await data.json();
    // console.log(response.results);
    // console.log("hello");
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    getmovielist();
  });
}
export default UseNowPayingMovie;