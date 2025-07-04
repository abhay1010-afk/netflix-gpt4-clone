import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainComponent = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const mainMovie = movies[0];
  // console.log(mainMovie);
   const {original_title,overview,id}=mainMovie;
  return (
    <div className="pt-auto bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainComponent;
