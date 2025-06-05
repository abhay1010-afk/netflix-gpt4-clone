import { createSlice } from "@reduxjs/toolkit";

const config=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.lang=action.payload;
        },
    },
});
export const {changelanguage}=config.actions;
export default config.reducer;