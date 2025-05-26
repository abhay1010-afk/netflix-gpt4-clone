import Header from "./Header";

import UseNowPayingMovie from "../Hooks/UseNowPlayingMovie";
import MainComponet from "./MainComponent";

const Browse = () => {
  //Fetch data from tmdb api and update the store
UseNowPayingMovie();
<MainComponet/>
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
