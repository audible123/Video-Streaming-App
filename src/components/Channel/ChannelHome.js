import React, { useEffect, useState } from "react";
import ChannelHCard from "./ChannelHCard";
import { Link } from "react-router-dom";

const ChannelHome = ({ id }) => {
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchChannelHome();
  }, []);

  const fetchChannelHome = async () => {
    const url = `https://youtube138.p.rapidapi.com/channel/videos/?id=${id}&hl=en&gl=US`;
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
      // console.log(result);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-wrap items-center mx-auto border-2">
      {searchResult?.contents?.map((item) => {
        return (
          <Link
            to={`/watch?v=${item?.video?.publishedTimeText}`}
            key={item?.video?.videoId}
          >
            <ChannelHCard
              thumbnail={item?.video?.thumbnails[2]?.url}
              title={item?.video?.title}
              views={item?.video?.stats?.views}
              publishTime={item?.video?.publishedTimeText}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ChannelHome;