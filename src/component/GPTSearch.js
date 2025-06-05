import { Logo_Netflix } from "../utils/Constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch=()=>{
    return (
        <div>
              <div className="absolute -z-10"> <img src={Logo_Netflix}alt="netflix-bg"/></div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
           
                
             
        </div>
    )
}
export default GPTSearch;