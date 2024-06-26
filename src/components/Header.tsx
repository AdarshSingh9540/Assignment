import React, { useEffect, useState } from 'react';
import { data } from '../assets/data';
import Infinitescrollbrand  from './Infinitescrollband';
import svgexport5 from '../assets/svg-export/svgexport-5.svg';
import Body from './Body';

const Header: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  const [marginTop, setMarginTop] = useState(20); 
  const [activeImageIndex , setActiveImageIndex] = useState(0);
  const [childImageIndex , setChildImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      animateAppearance();
    }, 1000); 
    return () => clearTimeout(timer);
  }, []); 

  const animateAppearance = () => {
    let currentOpacity = 0;
    let currentMarginTop = 20; 
    const interval = setInterval(() => {
      currentOpacity += 0.05; 
      currentMarginTop -= 1; 
      setOpacity(currentOpacity);
      setMarginTop(currentMarginTop);
      if (currentOpacity >= 1) {
        clearInterval(interval);
      }
    }, 50); 
  };

  const handleNext = () =>{
    setActiveImageIndex((activeImageIndex+1) % data.length);
  }

  useEffect(() =>{
   const timer = setTimeout(()=>{
   handleNext();
    },7000);
    return () => {
        clearTimeout(timer);
    }
  },[activeImageIndex]);

  const url = [
    "https://framerusercontent.com/images/4htYZIoRPQCgkrdjrgS5h0XNo.png",
    "https://framerusercontent.com/images/M0LrAGosZdMnNVzBgih2aTN00.png",
    "https://framerusercontent.com/images/AhQI0E1oGQ6WsEPwnv721Oj6PGY.png"

  ]

  const handleUpdate = () =>{
    setChildImageIndex((childImageIndex+1) % data.length);
  }

  useEffect(() => {
    const timerup = setTimeout(() => {
      handleUpdate();
    }, 6000);
    return () => {
      clearTimeout(timerup);
    };
  }, [childImageIndex]);
  




  return (
    <div className='bg-gradient-to-r from-[rgb(28,20,41)] via-transparent to-[rgb(20,42,54)] h-auto flex flex-col items-center justify-center overflow-x-hidden'>
      <div className='text-white text-7xl text-center m-36'>
        <div style={{ opacity, marginTop }} className='text-[84px] t'>
          <div className='m-4'>The Fastest Email</div>
          <div >Experience Ever Made</div>
        </div>
        <div className='text-center'>
          <h2 className='text-2xl mt-10'>AI-powered email built high-performing teams </h2>
          <h2 className='text-2xl mt-3'>Get 4 hours back every week</h2>
        </div>
        <div className='text-center'>
          <button className='bg-gradient-to-r from-purple-600 to-pink-400 border border-t-yellow-300 w-auto h-auto  p-4 rounded-md px-8 text-2xl mt-7'>Get started</button>
        </div>
      </div>

      <div>
        <div className='w-[1000px]  relative '>
            {
                data.map((url,index) =>(
                    <img src={url}
                    key={url}
                    className={'w-full h-[600px] '+ (activeImageIndex === index ? "block":"hidden") }
                    alt="" />
                ))
            }
          {
            url.map((e,i) =>(
                <img 
                key={e}
                className={'w-[320px] h-[500px] absolute  bottom-0 -right-20 ' + (childImageIndex === i ? "block":"hidden")} 
                src={e} alt="" />
            ))
          }
        </div>
      </div>

      <div>
        <Infinitescrollbrand/>

      </div>

      <Body/>
    </div>
  )
}

export default Header;
