import { useDispatch, useSelector } from "react-redux";
import Lang from "../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_Options, GEMENI_APIKEY, MOVIE_PROMPT } from "../utils/Constant";
import { useEffect, useState } from "react";
import { addMovies,clearGeminiMovies } from "../utils/moviesSlice";

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const [searchQuery,SetsearchQuery]=useState("");
  const langKey = useSelector((store) => store.config.lang);
//   console.log(Lang[langKey]);
// console.log(GEMENI_APIKEY);
useEffect(()=>{
  dispatch(clearGeminiMovies());
});
    const fetchmovie= async (movie)=>{
       
           const url="https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1";
           const response=await fetch(url,API_Options);
           const result= await response.json();
          //  console.log(result);
           return result.results;
        
      
    }
  const getdatafromgemini = async () => {
    
      const genAI = new GoogleGenerativeAI(GEMENI_APIKEY);
    
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = MOVIE_PROMPT+searchQuery;

const result = await model.generateContent(prompt);
  const responsetext =result.response.text()||"";
  // console.log(responsetext); 
  let moviearray=responsetext.split(",");
  // console.log(moviearray);
  if(!moviearray){
    moviearray=["pushpa","Welcome","Kick","Border","Hera pheri"]
  }
  const movies=moviearray.map((movie)=>fetchmovie(movie));
  
  const promisemovie= await Promise.all(movies);
  // console.log(promisemovie);
  dispatch(addMovies({movieName:moviearray,movieData:promisemovie}));
    
  
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={Lang[langKey]?.placeholder}
          className="p-4 m-4 col-span-9" onChange={(e)=>SetsearchQuery(e.target.value)}
        />
        <button className="px-4 m-4 bg-red-600 text-white rounded-lg col-span-3 text-xl" onClick={getdatafromgemini} >
          🔍{Lang[langKey]?.search || "search"}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
