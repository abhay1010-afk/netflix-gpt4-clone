import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import  moviesReducer from "..//utils/movieslice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movie:moviesReducer,
    },
})
export default appstore;