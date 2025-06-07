import { useSelector } from "react-redux";
import MovieList from "./movieList";

const GptMovieSuggestions = () => {
  const { nowGeminiMovies, nowmoviesdata } = useSelector(
    (store) => store?.movies
  );
  if(!nowGeminiMovies)return null;

  return (
    <div className="p-4 m-4 w-full bg-black text-white bg-opacity-90 ">
      <div>
        {nowGeminiMovies.map((movie, index) => (
          <MovieList
            key={movie}
            title={nowGeminiMovies[index]}
            movies={nowmoviesdata[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
