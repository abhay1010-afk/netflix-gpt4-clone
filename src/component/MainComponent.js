import { useSelector } from "react-redux";


const MainComponet=()=>{
    const firstMovie=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!firstMovie){return;}
    console.log(firstMovie[0]);
    const moviefirst=firstMovie[0];
    console.log(moviefirst);
    console.log("hello");
    return (
        <div>
            
        </div>
    )
};
export default MainComponet;