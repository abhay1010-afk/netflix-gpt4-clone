import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        nowPlayingPopular:null,
        nowPlayingTrending:null,
        NowUpcomingMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload;
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
export const {addNowPlayingMovies,playNowPlayingTrailer,playNowPlayingPopular,playNowPlayingTrending,playNowUpcomingMovie}=moviesSlice.actions;
export default moviesSlice.reducer;
 