import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:"video",
    initialState:{
        channelid:"",
        video:"",
        feed:[],
    },
    reducers:{
        videoId:(state,action)=>{
            state.video = action.payload;
        },

        channel:(state,action)=>{
            state.channelid = action.payload;
        },

        feedCard:(state,action)=>{
            state.feed = [...action.payload];
        }
    },
})

export const {videoId,feedCard,channel} = videoSlice.actions;
export default videoSlice.reducer;