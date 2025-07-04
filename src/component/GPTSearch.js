import { Logo_Netflix } from "../utils/Constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch=()=>{
    return (
        <>
         <div className="fixed -z-10"><img src={Logo_Netflix}alt="netflix-bg" className="h-screen w-screen object-cover"/>
         </div>
        <div className="">
             
            <GptSearchBar/>
            <GptMovieSuggestions/>
           
                
             
        </div>
        </>
    )
}
export default GPTSearch;