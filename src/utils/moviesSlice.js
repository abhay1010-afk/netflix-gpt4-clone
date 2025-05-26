import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPLayingTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        playNowPLayingTrailer:(state,action)=>{
            state.nowPLayingTrailer=action.payload;
        }
    }
});
export const {addNowPlayingMovies,playNowPLayingTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;
 