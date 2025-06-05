import { useSelector } from "react-redux";
import Lang from "../utils/languageConstants";

const GptSearchBar=()=>{
    const langKey=useSelector(store=>store.config.lang);
    console.log(Lang[langKey]);
    return (
        <div className="pt-[10%] flex justify-center">
            
            <form className=" w-1/2  bg-black grid grid-cols-12">
                <input type="text" placeholder={Lang[langKey]?.placeholder} className="p-4 m-4 col-span-9" />
                <button className="px-4 m-4 bg-red-600 text-white rounded-lg col-span-3 text-xl">🔍{Lang[langKey]?.search||"search"}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;