import MovieCard from "./movieCard";

const MovieList=({title,movies})=>{
    // console.log(movies);
    
    return ( movies &&(
        <div className="px-6 ">
             <h1 className="text-lg  py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll  ">
               
                <div className="flex">
                    {movies?.map(movie=><MovieCard key={movie.id } poster_path={movie.poster_path}/>)}
                
                </div>
            </div>
        

        </div>
    ))
}
export default MovieList;