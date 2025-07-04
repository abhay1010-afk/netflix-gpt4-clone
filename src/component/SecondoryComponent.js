import { useSelector } from "react-redux";
import MovieList from "./movieList";

const SecondoryComponent=()=>{
   const movies = useSelector((store) => store?.movies);
   
    return (
        <div className="bg-zinc-900 ">
            <div className=" mt-0 z-20 relative pl-2 ">
         <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
         <MovieList title={"Popular"} movies={movies.nowPlayingPopular} />
         <MovieList title={"Trending"} movies={movies.nowPlayingTrending} />
         <MovieList title={"Upcoming"} movies={movies.NowUpcomingMovie} />
         <MovieList title={"Animation"} movies={movies.nowPlayingMovies} />
         <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
         </div>
         
        </div>
    )
};
export default SecondoryComponent;