import React, { useRef, useState } from 'react'
import Button from './Button'
import { buttonData } from '../utils/config'
import { useSelector } from 'react-redux';





 function ButtonList() {

  const isMenuOpen = useSelector((Store)=> Store.app.isMenuOpen)

  
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };


  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className={isMenuOpen ? "flex w-[1100px]" : "flex w-[1450px]"}>
      {scrollX !== 0 && (
        <button
          className="bg-black font-bold w-16 h-8 p-2 ml-2 my-5 text-white opacity-40 hover:opacity-100 rounded-full"
          onClick={() => slide(-50)}
        >
          L
        </button>
      )}
      <ul className='flex list-none overflow-x-hidden max-w-[100%] scroll-smooth overflow-y-hidden' ref={scrl} onScroll={scrollCheck}>
        {buttonData.genre.map((d, i) => (
          <Button data={d} key={i} />
        ))}
      </ul>
      {!scrolEnd && (
        <button
          className="bg-black font-bold w-16 h-8 p-2 ml-2 my-5 text-white opacity-40 hover:opacity-100 rounded-full"
          onClick={() => slide(+50)}
        >
         R 
        </button>
      )}
    </div>
  );
}


export default ButtonList

