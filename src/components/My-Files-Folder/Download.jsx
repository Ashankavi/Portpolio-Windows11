import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import DownloadIcon from '../Assets/MyFiles/DownloadIcon.png';

const Download = ({ onClose }) => {
  const [openWindows, setOpenWindows] = useState({
    download: false,
  });

  const handleOpen = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: true,
    }));
  };

  const handleClose = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: false,
    }));
  };

  return (
    <Rnd
      default={{
        x: 160,
        y: 20,
        width: 800,
        height: 500,
      }}
      minWidth={450}
      minHeight={300}
      maxHeight={680}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center  justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
        <img className="h-[20px] w-[20px] bg-cover" src={DownloadIcon} alt="This PC" />
        <div className="flex text-white ">Download</div>
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-500">
            <MinusIcon className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 rounded hover:bg-gray-500">
            <PlusSmIcon className="w-4 h-4 text-white" />
          </button>
          <button onClick={onClose} className="p-2 rounded hover:bg-[#eb342d]">
            <XIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <PerfectScrollbar className="flex flex-col p-4 text-center text-white">
        
        <p className="mt-2">
          No Download Files
        </p>

       
      </PerfectScrollbar>
    </Rnd>
  );
};

export default Download;
