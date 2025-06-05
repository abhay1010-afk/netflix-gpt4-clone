import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import  moviesReducer from "./moviesSlice"
import GptReducer from "./GptSlice"
import configReducer from "./consfigSlice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        Gpt: GptReducer,
        config:configReducer,
    },
})
export default appstore;