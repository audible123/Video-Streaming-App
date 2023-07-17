import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import CommentSection from './CommentSection';
import { Link, useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import LiveChat from './LiveChat';
import WatchCard from './WatchCard';
import Description from './Description';

function WatchVideo() {

  const [videoDetails,setVideoDetails] = useState("");

  const getVideoDetails = async () => {
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "002255a91bmsh7d04006fa902b50p1cae6ajsn1888e1582f6a",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setVideoDetails(result);
  } catch (error) {
    console.error(error);
  }

};


  useEffect(()=>{
    getVideoDetails();
  });


  const {id} = useParams();

  const [live,setlive] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div className='grid grid-cols-4 w-full'>
    <div className='m-8 col-span-3'>
    <iframe
        width="1000"
        height="550"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
        <h1 className='font-bold my-3 text-2xl'>{videoDetails?.title}</h1>
        <div className='grid grid-flow-col'>
          <div className='grid grid-flow-col my-2'>

          <Link to={"/channel/" + videoDetails?.author?.channelId}>

          <img
                src={videoDetails?.author?.avatar[0]?.url}
                alt="channel"
                className="rounded-full"
              />

          </Link>

          
            <div className='col-span-12'>
            <h1>{videoDetails?.author?.title}</h1>
            <p>{videoDetails?.author?.stats?.subscribersText}</p>
            </div>
          </div>
          <button className='px-5 ml-2 my-5 bg-gray-200 rounded-md h-8'>Subscribe</button>
          <div>
          <button className='px-5 ml-2 my-5 bg-gray-200 rounded-md h-8'>Likes</button>
          <button className='px-5 ml-2 my-5 bg-gray-200 rounded-md h-8'>DisLikes</button>
          </div>
          <button className='px-5 ml-2 my-5 bg-gray-200 rounded-md h-8'>Share</button>
        </div>
        <div>
          <Description/>
        </div>
        <div>
          <CommentSection/>
        </div>
    </div>
    <div className='col-span-1 mr-10'>
     <div className=' h-auto mt-5 shadow-2xl rounded-2xl'>
     <h1 className='font-bold text-center text-2xl box-border '>Live Chat</h1>
        {live && <LiveChat/>}
      {live ? (<button className=' h-14 w-full rounded-b-xl bg-gray-300 ' onClick={()=>setlive(false)}>
        Hide</button>)
        :(<button 
          className=' h-14 w-full bg-gray-300 rounded-b-xl '
        onClick={()=>setlive(true)}>
          Show</button>)}
     </div> 
     <div className='mt-10 '>
     <h1 className='font-bold ml-3 text-2xl box-border '>Suggestions</h1>
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     <Link to="/watch"><WatchCard/></Link>   
     </div>
    </div>
    </div>
    
  )
}


export default WatchVideo