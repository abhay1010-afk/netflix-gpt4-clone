import Header from "./Header";

import UseNowPayingMovie from "../Hooks/UseNowPlayingMovie";
import MainComponent from "./MainComponent";
import SecondoryComponent from "./SecondoryComponent";
import UsePopularMovies from "../Hooks/UsePopularMovies";
import UseTrending from "../Hooks/UseTrending";
import UseUpcoming from "../Hooks/UseUpcoming";


const Browse = () => {
  //Fetch data from tmdb api and update the store
UseNowPayingMovie();
UsePopularMovies();
UseTrending();
UseUpcoming();

  return (
    <div>
      <Header />
      <MainComponent/>
      <SecondoryComponent/>
    </div>
  );
};
export default Browse;
