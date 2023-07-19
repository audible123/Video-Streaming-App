import React from 'react'

function LiveChatMessage({name,message}) {
  return (
    <div 
    className='flex item-center'>
      
        <img 
            className='h-9 p-2'
            src="https://www.computerhope.com/jargon/g/guest-user.png" 
            alt="" />

        <div 
        className='text-xs flex my-auto'>
            <h1 
            className='font-bold ml-2'
            >{name}</h1>

            <h1 
            className='ml-2'
            >{message}</h1>

        </div>
    </div>
  )
}

export default LiveChatMessage