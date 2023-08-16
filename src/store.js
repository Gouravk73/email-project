import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./store/login-slice";


const store= configureStore({
    reducer:{
        login:loginSlice,
    }
})
export default store;