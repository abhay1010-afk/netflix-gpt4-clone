import Header from "./Header";

import UseNowPayingMovie from "../Hooks/UseNowPlayingMovie";
import MainComponent from "./MainComponent";
import SecondoryComponent from "./SecondoryComponent";
import UsePopularMovies from "../Hooks/UsePopularMovies";
import UseTrending from "../Hooks/UseTrending";
import UseUpcoming from "../Hooks/UseUpcoming";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  //Fetch data from tmdb api and update the store
  const IsVisible=useSelector((store)=>store.Gpt.showGptSearch);
UseNowPayingMovie();
UsePopularMovies();
UseTrending();
UseUpcoming();

  return (
    <div>
      <Header />
      {
        IsVisible ? (<GPTSearch/>) : (<><MainComponent/><SecondoryComponent/></>)
      }
    
    </div> 
  );
};
export default Browse;
