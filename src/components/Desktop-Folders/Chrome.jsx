import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChromeB from '../Assets/Desktop/Chrome.png';

const Chrome = ({ onClose }) => {
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
        x: 160,
        y: 20,
        width: 800,
        height: 500,
      }}
      minWidth={450}
      minHeight={300}
      maxHeight={680}
      bounds="parent"
      className="bg-[#202020] border-zinc-200 rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
        <img className="h-[20px] w-[20px] bg-cover" src={ChromeB} alt="This PC" />
        <div className="flex text-white">Google Chrome</div>
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

      <PerfectScrollbar className="flex flex-col p-4 text-white overflow-y-auto h-[calc(100%_-_40px)]">
        
        <p className="mt-2">
          Hello! I am a self-motivated, hardworking individual who is ready
          to take on new challenges. I am keen on gaining experience
          and practical knowledge in the field of software
          engineering. I like to improve my skills with working on
          projects. Also I have knowledge about web application
          design, Ui/Ux design and graphic designing
        </p>

       
      </PerfectScrollbar>
    </Rnd>
  );
};

export default Chrome;
