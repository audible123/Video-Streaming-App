import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard';

function Channel() {

  const [channelDetails,setchannelDetails] = useState("");

  const {id} = useParams();

  const getChannelDetails = async () => {

    const url = `https://youtube138.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`;
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
    </div>
  )
}

export default Channel