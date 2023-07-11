import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer:{ 
        app:appSlice,
        chat:ChatSlice,
        video:videoSlice,
    }
})

export default store;