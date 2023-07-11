import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:"video",
    initialState:{
        video:"",
        feed:[],
    },
    reducers:{
        videoId:(state,action)=>{
            state.video = action.payload;
        },

        feedCard:(state,action)=>{
            state.feed = [...action.payload];
        }
    },
})

export const {videoId,feedCard} = videoSlice.actions;
export default videoSlice.reducer;