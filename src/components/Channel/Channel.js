import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard';
import ChannelHome from './ChannelHome';

function Channel() {

  const [channelDetails,setchannelDetails] = useState("");

  const {id} = useParams();

  const getChannelDetails = async () => {

    const url = `https://youtube138.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_FIREBASE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setchannelDetails(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getChannelDetails();
  },[]);

  



  return (
    <div className="w-full ">
      <div className="w-full">
        <img src={channelDetails?.banner?.desktop[2]?.url} className="w-full" />
      </div>
      <div className="mx-20">
   
          <ChannelCard
            title={channelDetails?.title}
            username={channelDetails?.username}
            description={channelDetails?.description}
            substext={channelDetails?.stats?.subscribersText}
            channellogo={channelDetails?.avatar?.[1]?.url}
          />
     
        <hr />
      </div>
      <div>
        <ChannelHome id={id} />
      </div>
    </div>
  )
}

export default Channel