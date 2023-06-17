import React from 'react'

function VideoCard() {
  return (
    <div className='p-2 m-2 w-[300px] shadow-lg grid grid-cols-2 '>
        <div >
            <img src="https://i.ytimg.com/vi/32RAq6JzY-w/maxresdefault.jpg" alt="thumbnail" />
        </div>
        <ul className='ml-2'>
            <li>Title</li>
            <li>Channel Name</li>
            <li>Views</li>
        </ul>
    </div>
  )
}

export default VideoCard