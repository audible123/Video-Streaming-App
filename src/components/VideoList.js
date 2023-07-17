import React, { useEffect, useState } from 'react'
import {Google_API_LINK} from '../utils/config'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';
import { feedCard } from '../utils/videoSlice';


function VideoList() {


  const [result,setResult] = useState("");

  const dispatch = useDispatch();

  const getVideoInfo = async () => {
    const url = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_FIREBASE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response?.json();
      // console.log(json);
      setResult(json);

      const copiedArray = [...json?.contents];
      // console.log({copiedArray});
      dispatch(feedCard(copiedArray))

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(()=>{
    getVideoInfo();
  },[]);

  return result?.length === 0 ? (<Shimmer/>):(
    <div className='flex flex-wrap'>
      {result?.contents?.map((card)=>(
          <Link 
          to={"/watch/" + card?.video?.videoId}
          key={card?.video?.videoId}
          >
            <VideoCard
              thumbnail={card?.video?.thumbnails[0]?.url}
              title={card?.video?.title}
              channelName={card?.video?.author?.title}
              channelId={card?.video?.author?.channelId}
              channellogo={card?.video?.author?.avatar[0]?.url}
              isVerified={card?.video?.author?.badges[0]}
              views={card?.video?.stats?.views}
              publishTime={card?.video?.publishedTimeText}
            />
            </Link>
      ))}
          
    </div>
  )
}

export default VideoList