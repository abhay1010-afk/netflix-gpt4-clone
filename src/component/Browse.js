import Header from "./Header";

import UseNowPayingMovie from "../Hooks/UseNowPlayingMovie";
import MainComponent from "./MainComponent";

const Browse = () => {
  //Fetch data from tmdb api and update the store
UseNowPayingMovie();

  return (
    <div>
      <Header />
      <MainComponent/>
    </div>
  );
};
export default Browse;
