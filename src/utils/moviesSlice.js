import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        nowPlayingPopular:null,
        nowPlayingTrending:null,
        NowUpcomingMovie:null,
        nowGeminiMovies:null,
        nowmoviesdata:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addMovies:(state,action)=>{
           const {movieName,movieData} =action.payload;
           state.nowGeminiMovies=movieName;
           state.nowmoviesdata=movieData;
        },
        playNowPlayingTrailer:(state,action)=>{
            state.nowPlayingTrailer=action.payload;
        },
        playNowPlayingPopular:(state,action)=>{
              state.nowPlayingPopular=action.payload;
        },
        playNowPlayingTrending:(state,action)=>{
            state.nowPlayingTrending=action.payload;
        },
        playNowUpcomingMovie:(state,action)=>{
            state.NowUpcomingMovie=action.payload;
        }
    }
});
export const {addNowPlayingMovies,playNowPlayingTrailer,playNowPlayingPopular,playNowPlayingTrending,playNowUpcomingMovie,addMovies}=moviesSlice.actions;
export default moviesSlice.reducer;
 