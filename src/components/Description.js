import React, { useState } from 'react'
import { str } from '../utils/config'

function TruncateString(str,num){

    if(str.length > num ){
        return str.slice(0,num) + "....................."
    }
    else{
        return str;
    }
}

function Description() {

  return (
    <>
    <h1 className='text-2xl font-bold my-5'>Description</h1>
    <div className=''>{TruncateString(str,90)}
    <button
    className=''
    onClick={()=>{}}>show more</button></div>
    </>
  )
}

export default Description