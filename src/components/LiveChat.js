import React, { useEffect, useState } from 'react'
import LiveChatMessage from './LiveChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { addMessage } from '../utils/ChatSlice';
import store from '../utils/store';

function LiveChat() {

  const [myLiveMessage,setMyLiveMessage]= useState("");

  const chatMessages = useSelector( store => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(()=>{
    const msg = setInterval(()=>{
      dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomMessage(20),
      }))
    },1500)

    // the time interval of api polling in Youtube is 1500 ms 

    return ()=> clearInterval(msg);
  },[])

  return (
    <>
    <div className='shadow-2xl h-[27rem] mt-6 flex flex-col-reverse overflow-y-scroll'>
      {/* it is not recommended to use index as Key  */}
      {chatMessages.map((c,i)=>(
        <LiveChatMessage key={i} name={c.name} message={c.message}/>
      ))}   
    </div>
    <div className='m-5'>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
          name:"Aditya Singh",
          message: myLiveMessage,
        }))
      }}
      >
    <input type="text" value={myLiveMessage} onChange={(e)=>{
      setMyLiveMessage(e.target.value)
    }}
    className='px-5 w-[70%] border border-gray-400 p-2 rounded-l-full'/>
    <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
      Send</button>
    </form>
  </div>
  
  </>
  )
}

export default LiveChat