import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

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

  return (
    <Rnd
      default={{
        x: 260,
        y: 175,
        width: 650,
        height: 400,
      }}
      minWidth={380}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-zinc-200 rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
        <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
        <div className="flex text-white ">My Resume</div>
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

  <div className='flex items-center'>
      <div className='flex flex-wrap flex-row p-[20px]  text-white'>
        <div className="flex flex-col items-center">
          <a href={MyCvPDF} download="MyCV.pdf"> {/* Link to MyCV PDF */}
            <img className="h-[40px] w-[40px] bg-cover" src={Chrome} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">My CV</h1>
          </a>
        </div>

        <div className="flex flex-col items-center ml-8 text-center ">
          <a href={MyLetterPDF} download="MyLetter.pdf"> {/* Link to CoverLetter PDF */}
            <img className="h-[40px] w-[40px] bg-cover" src={Chrome} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">Cover <br /> Letter</h1>
          </a>
        </div>
      </div>
      </div>
      {/* End Section */}
      <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b] ">
        <div className="flex text-white ">2 Items |</div>
      </div>

    </Rnd>
  );
};

export default MyResume;
