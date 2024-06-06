import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import Chrome from '../Assets/Desktop/Chrome.png';
import MyCvPDF from '../Assets/MyResume/MyCv.pdf'; // Correct relative path to MyCV
import MyLetterPDF from '../Assets/MyResume/MyLetter.pdf'; // Correct relative path to Cover Letter

const MyResume = ({ onClose }) => {
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

  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Rnd
      default={{
        x: 260,
        y: 175,
        width: 600,
        height: 200,
      }}
      position={isMaximized ? { x: 5, y: 2 } : undefined}
      size={isMaximized ? { width: '99.10%', height: '93.80%' } : undefined}         
      minWidth={300}
      minHeight={200}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg flex flex-col"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[19px] w-[20px] bg-cover" src={MyFilesIcon} alt="My Video" />
          <div className="flex text-white">My Resume</div>
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


      <PerfectScrollbar className="flex-grow p-2 overflow-y-auto text-white cursor-default ">
          <div className="flex flex-wrap text-center ">
          <div className='flex flex-row flex-wrap gap-8 text-white cursor-default'>

            <div className="flex flex-col px-8 py-5 cursor-default hover:bg-gray-500">
              <a href={MyCvPDF} download="MyCV.pdf"> {/* Link to MyCV PDF */}
                <img className="h-[40px] w-[40px] bg-cover cursor-default" src={Chrome} alt="My Resume" />
                <h1 className="mt-1  mb-[15px] cursor-default">My <br /> Resume</h1>
              </a>
            </div>

            <div className="flex flex-col px-8 py-5 cursor-default hover:bg-gray-500">
              <a href={MyLetterPDF} download="MyLetter.pdf"> {/* Link to CoverLetter PDF */}
                <img className="h-[40px] w-[40px] bg-cover cursor-default" src={Chrome} alt="My Letter" />
                <h1 className="mt-1 mb-[15px] cursor-default">Cover <br /> Letter</h1>
              </a>
            </div>
            
          </div>
        </div>
      </PerfectScrollbar>

      {/* End Section */}
      <div className="p-2 bg-[#2b2b2b] rounded-b-[10px] flex-shrink-0">
        <div className="text-white">2 Items</div>
      </div>
      </div>
    </Rnd>
  );
};

export default MyResume;
