import React, { useEffect } from 'react'
import {Google_API_LINK} from '../utils/config'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoList() {

  const getVideoInfo = async ()=>{
    const data = await fetch(Google_API_LINK);
    const json = await(data.json());
    console.log(json);
  }

  useEffect(()=>{
    getVideoInfo();
  },[]);

  return (
    <div className='flex flex-wrap'>
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
      <Link to="/watch"><VideoCard/></Link>   
    </div>
  )
}

export default VideoList