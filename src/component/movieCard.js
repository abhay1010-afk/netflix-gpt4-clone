import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard=({poster_path})=>{
    if(!poster_path){
        return null;
    }
    return (
        <div className="w-48 pr-2 ">
            <img alt="img" src={IMG_CDN_URL+ poster_path}  />
        </div>
    )
}
export default MovieCard;