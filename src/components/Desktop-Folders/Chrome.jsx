import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChromeB from '../Assets/Desktop/Chrome.png';
import TRexIcon from '../Assets/Desktop/tRexicon.png';

const Chrome = ({ onClose }) => {

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Rnd
      default={{
        x: 100,
        y: 150,
        width: 850,
        height: 300,
      }}
      position={isMaximized ? { x: 5, y: 2 } : undefined}
      size={isMaximized ? { width: '99.10%', height: '93.80%' } : undefined}      
      minWidth={270}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[19px] w-[20px] bg-cover" src={ChromeB} alt="My Video" />
          <div className="flex text-white">Google Chrome</div>
          <div className="flex space-x-2">
            <button className="p-2 rounded hover:bg-gray-500">
              <MinusIcon className="w-4 h-4 text-white" />
            </button>
            <button onClick={handleMaximize} className="p-2 rounded hover:bg-gray-500">
              <PlusSmIcon className="w-4 h-4 text-white" />
            </button>
            <button onClick={onClose} className="p-2 rounded hover:bg-[#eb342d]">
              <XIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <PerfectScrollbar className="flex flex-col items-center justify-center h-screen mx-10 text-center text-white">
        <img className="h-[150px] w-[150px] ml-50 bg-cover" src={TRexIcon} alt="My Video" />
      <h1 className="mt-4 text-3xl font-bold ">No internet</h1>
      <p className="mt-2 ">Try:</p>
      <ul className="mt-2 ">
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
      <p className="mt-4 ">ERR_INTERNET_DISCONNECTED</p>

        </PerfectScrollbar>

        {/* End Section */}
        <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
          <div className="text-white">0 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default Chrome;



