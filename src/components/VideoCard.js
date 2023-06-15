import React from 'react'

function VideoCard() {
  return (
    <div className='p-2 m-2 w-[350px] shadow-lg '>
        <div >
            <img src="https://i.ytimg.com/vi/32RAq6JzY-w/maxresdefault.jpg" alt="thumbnail" />
        </div>
        <ul>
            <li>Title</li>
            <li>Channel Name</li>
            <li>Views</li>
        </ul>
    </div>
  )
}

export default VideoCard