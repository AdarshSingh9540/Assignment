import React, { useState, useEffect } from 'react';
import arrowicon from "../assets/svg-export/svgexport-12.svg";
import Cards from "./Cards";

const Body = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [colorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleColorChange = () => {
    setColorChanged(true);
  };

  return (
    <div className="relative w-[1250px] object-cover text-center mx-auto">
      <div className='flex justify-center items-center w-full h-full'>
        <img src="https://framerusercontent.com/images/0JleJ8rPrDUZXoO1OSbzdPVXxcI.png" alt="" />
        <div className="text-white absolute font-sans font-semibold text-[48px]">
          <h1>Superhuman saves teams over</h1>
          <h1>
            <span style={{background: "linear-gradient(90deg, rgb(250, 204, 105), rgb(255, 145, 165))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
              10 million
            </span> hours every single year
          </h1>
        </div>
      </div>

      <div className="flex items-center mt-6">
        <div className="w-[500px] h-[600px]">
          <img className="w-full h-full" src="https://framerusercontent.com/images/ZzEcgyBWKakgLd4hnleDpz8lPcs.png?scale-down-to=1024" alt="" />
        </div>
        <div className="text-white ml-4">
          <div>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'blue' : 'white' }}>Fly through your email</h2>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'blue' : 'white' }}>twice as fast as before</h2>
          </div>
          <div>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'red' : 'white' }}>Be more responsive to</h2>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'red' : 'white' }}>what matters most.</h2>
          </div>
          <div>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'green' : 'white' }}>Eliminate email anxiety</h2>
            <h2 className="text-[48px] font-sans font-semibold" style={{ color: !colorChanged ? 'white' : scrollPosition >= 300 ? 'green' : 'white' }}>once and for all</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-6">
        <div className="text-white">
          <div>
            <h2 className="text-[48px] font-sans font-semibold">Built for teams that use</h2>
            <h2 className="text-[48px] font-sans font-semibold">
              <span style={{background: "linear-gradient(90deg, #FACC69, #FA75F8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Gmail</span> or <span style={{background: "linear-gradient(90deg, #FA75F8, #9E6EE6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Outlook</span>
            </h2>
          </div>
        </div>
        <div className="w-[700px] h-[400px]">
          <img className="w-full h-full" src="https://framerusercontent.com/images/pRTepi2wStAhn0iR4AR9ul4BPI.png?scale-down-to=1024" alt="" />
        </div>
      </div>

      <div className="text-white text-center mt-20">
        <div className="text-[48px] font-sans font-semibold">
          <span>Superhuman makes</span> <span style={{background:"linear-gradient(90deg, #FCBA89 24.35%, #FA75F8 69.94%, #B463EB 111.15%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>teams more productive</span>
        </div>
        <div className="text-[24px] mt-6">
          <p>Help your team move faster, be more responsive, and feel less stressed. </p>
          <p>Get back valuable time for what matters most.</p>
        </div>

        <div className="text-[24px] font-sans mt-12 flex justify-center items-center">
          <span>Learn More </span> <img src={arrowicon} className="mx-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
