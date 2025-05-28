import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard=({poster_path})=>{
    return (
        <div className="w-48 pr-4 ">
            <img alt="img" src={IMG_CDN_URL+ poster_path}  />
        </div>
    )
}
export default MovieCard;