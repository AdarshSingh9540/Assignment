import React from 'react';
import logo from '../assets/svg-export/svgexport-1.svg';
import droDown from '../assets/svg-export/svgexport-2.svg';
import heart from '../assets/svg-export/svgexport-3.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-opacity-95 bg-black backdrop-filter backdrop-blur-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className='flex items-center mx-8'>
            <img src={logo} alt="" className='mx-8' />
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="/" className="text-white flex items-center">Product <img src={droDown} alt="" className='m-2'/></a>
              </li>
              <li><a href="/" className="text-white">Resources</a></li>
              <li><a href="https://superhuman.com/pricing" target="_blank" rel="noopener noreferrer" className="text-white">Pricing</a></li>
              <li>
                <a href="/" className="text-white flex items-center">Love <img src={heart} alt="" className='m-2'/></a>
              </li>
            </ul>
          </div>
          <button className="text-white py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-400 border border-t-yellow-300 mr-8 px-6 font-serif">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
