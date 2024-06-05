import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

import ThisPCIcon from '../Assets/Desktop/ThisPC.png';
import DiskC from '../Assets/ThisPC/diskC.png';
import DiskD from '../Assets/ThisPC/discD.png';
import DiskE from '../Assets/ThisPC//discE.png';

const ThisPC = ({ onClose }) => {

  const [openWindows, setOpenWindows] = useState({
    thisPC: false,
    recycleBin: false,
    chrome: false,
    myResume: false,
    aboutMe: false,
    myProjects: false,
    myFiles: false,
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
        x: 250,
        y: 150,
        width: 850,
        height: 400,
      }}
      minWidth={380}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-zinc-200 rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
      <img className="h-[20px] w-[20px] bg-cover" src={ThisPCIcon} alt="This PC" />
        <div className="flex text-white ">This PC</div>
        <div className="flex space-x-2 ">
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
      
      <div className='flex flex-wrap flex-row p-[20px] text-white'>
      <div className="flex flex-col items-center" onDoubleClick={() => handleOpen('myFiles')}>
            <img className="h-[40px] w-[200px] bg-cover" src={DiskC} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">Local Disk(C:)</h1>
          </div>
          <div className="flex flex-col items-center ml-8 text-end" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[40px] w-[200px] bg-cover" src={DiskD} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">New Volume(D:)</h1>
          </div>
          <div className="flex flex-col items-center ml-8" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[40px] w-[200px] bg-cover" src={DiskE} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">New Volume(E:)</h1>
          </div>
          </div>
          {/* End Section */}
          <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b] ">
        <div className="flex text-white ">3 Items |</div>
      </div>

    </Rnd>
  );
};

export default ThisPC;
