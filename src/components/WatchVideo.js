import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

function WatchVideo() {


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div className='grid grid-cols-4'>
    <div className='m-8 col-span-3'>
        <iframe width="1000" height="550" src="https://www.youtube.com/embed/eoOaKN4qCKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 className='font-bold my-3 text-2xl'>FAST X | Final Trailer</h1>
        <div className='grid grid-flow-col'>
          <div className='grid grid-flow-col my-2'>
          <img className='h-8 w-8 p-1' src="https://www.computerhope.com/jargon/g/guest-user.png" alt="" />
            <div className='col-span-12'>
            <h1>Channel Name</h1>
            <p>Subscribers</p>
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
          <CommentSection/>
        </div>
    </div>
    <div className='col-span-1 overflow-scroll overflow-y-hidden overflow-x-hidden'>
    <Link to="/watch"><VideoCard/></Link>   
    <Link to="/watch"><VideoCard/></Link>   
    <Link to="/watch"><VideoCard/></Link>   
    <Link to="/watch"><VideoCard/></Link>   
    <Link to="/watch"><VideoCard/></Link>   
    <Link to="/watch"><VideoCard/></Link>   
      
    </div>
    </div>
    
  )
}

export default WatchVideo