import React from 'react'
import {commentsData} from '../utils/config'



function Comment({data}){

    const {name,text,replies}= data;

    return(
        <div className='flex bg-gray-200 m-2 w-full '>
        <div className='h-8 w-8 p-1'>
            <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="" />
        </div>
        <div>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
        </div>
    )
}


function CommentList ({comments}){
    return comments.map((comment,index)=> (
            <div>
                <Comment key={index} data={comment}/>
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentList comments={comment.replies} />
                    </div>
            </div>
        )
    )
    
    }
    


    



function CommentSection() {
  return (
    <div className='my-5 p-2'>
        <h1 className='text-2xl font-bold my-5'>
        <hr />    
        {commentsData.length} Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentSection