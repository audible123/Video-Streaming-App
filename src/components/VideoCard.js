import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";

function VideoCard({
  thumbnail,
  title,
  channelName,
  channelId,
  channellogo,
  isVerified,
  views,
  publishTime,
}) {
  return (
    <div
      className="p-2 m-2 w-[350px] rounded-lg items-center justify-center  "
    >
      <img src={thumbnail} 
      className="w-full rounded-lg" alt="cards" />

      <div 
      className="flex justify-between items-start p-2">

        <div 
        className="flex-[0.2]  h-[36px] w-[36px]">
            <img
              src={channellogo}
              className="rounded-full h-[36px] w-[36px] cursor-pointer"
              alt="channel"
            />
        </div>
        <ul 
        className="flex-[0.8]">
          <li 
          className="font-semibold overflow-hidden text-ellipsis line-clamp-2 ">
            {title}
          </li>
            <li 
            className="text-[rgb(96,96,96)] text-xs font-semibold cursor-pointer">
              {channelName}
            </li>
          <ul 
          className="text-[rgb(96,96,96)] text-xs font-semibold flex items-center">

            <li className="mr-2"> {views} views </li>
            <li className="mr-2"> {publishTime} </li>
            <li>
              {isVerified ? <VscVerifiedFilled className="text-base" /> : <></>}
            </li>
          </ul>
        </ul>
        <BiDotsVerticalRounded 
        className="text-2xl  " />
      </div>
    </div>
  )
}

export default VideoCard