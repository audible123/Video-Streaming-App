import React from 'react'

function Button({data}) {
  return (
    <div>
        <li className='p-2 ml-2 my-5 bg-gray-200 rounded-md h-8 text-xs'>
        {data}
        </li>
    </div>
  )
}

export default Button