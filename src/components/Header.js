import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

function Header() {
    
    const [searchQuery,setSearchQuery]=useState();
    const [suggestion,setSuggestion]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(false);

    async function getsearchsuggestion(){
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestion(json[1]);
        // index 1 because the zero index is the empty one
    }


    useEffect(()=>{
        const timer = setTimeout(()=> getsearchsuggestion(),300);

        return()=>{
            clearInterval(timer);
        };
    },[searchQuery])

  const dispatch = useDispatch();

  function toggleSideBar(){
      dispatch(toggleMenu());
  }


  return (
    <div 
    className='grid grid-flow-col shadow-lg'>
        <div 
        className='flex col-span-1' >
            <img
             onClick={()=>toggleSideBar()}
              className='h-16 p-4' 
              src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu" />
            
            <a href="/">
            <img 
            className='h-16'
             src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg" alt="icon" />
            </a>
        </div>
        <div 
        className='col-span-11'>
            <input  
            type="text" 
            className='px-5 w-1/2 border my-3 border-gray-400 p-2 rounded-l-full'

            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            onChange={(e)=> setSearchQuery(e.target.value)}/>   
            
                     <button 
            className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'
            >Search</button>

            {showSuggestion && (
            <div 
            className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg border border-gray-100'>
            <ul>
                {suggestion.map((s)=>(
                    <li key={s} 
                    className='py-2 px-3 shadow-sm hover:bg-gray-100'
                    >{s}</li>
                ))}
            </ul>
        </div>
        )}
        
        </div>
        <div 
        className='col-span-1'>

            <img 
            className='h-16 p-3'
            src="https://www.computerhope.com/jargon/g/guest-user.png" 
            alt="" />
        </div>
    </div>
  )
}

export default Header