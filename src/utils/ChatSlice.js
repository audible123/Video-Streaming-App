import { createSlice } from "@reduxjs/toolkit";
import { TOTAL_MSG } from "./config";



const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(TOTAL_MSG,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;
