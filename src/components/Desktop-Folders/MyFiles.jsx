import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

import MyFilesIcon from '../Assets/Desktop/MyFile.png'

import DesktopIcon from '../Assets/MyFiles/DesktopIcon.png';
import DocIcon from '../Assets/MyFiles/DocumentIcon.png';
import DownIcon from '../Assets/MyFiles/DownloadIcon.png';
import MusicIcon from '../Assets/MyFiles/MusicIcon.png';
import PicIcon from '../Assets/MyFiles/PictureIcon.png';
import videoIcon from '../Assets/MyFiles/VideoIcon.png';

const MyFiles = ({ onClose }) => {

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
        x: 200,
        y: 100,
        width: 850,
        height: 400,
      }}
      minWidth={380}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
      <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
        <div className="flex text-white ">My Files</div>
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
      
      <div className='flex flex-wrap flex-row p-[20px] gap-2 text-white'>

      <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
      <img className="h-[35px] w-[40px] bg-cover" src={DesktopIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">Desktop</h1>
          </div>

          <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[35px] w-[40px] bg-cover" src={DocIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">Document</h1>
          </div>

          <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[35px] w-[40px] bg-cover" src={DownIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">Download</h1>
          </div>

          <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[35px] w-[40px] bg-cover" src={MusicIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">My Music</h1>
          </div>

          <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[35px] w-[40px] bg-cover" src={PicIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">My Picture</h1>
          </div>

          <div className="flex flex-col items-center pt-4 pl-5 pr-5 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
          <img className="h-[35px] w-[40px] bg-cover" src={videoIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">My Video</h1>
          </div>

          </div>
          {/* End Section */}
          <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b] ">
        <div className="flex text-white ">6 Items |</div>
      </div>

    </Rnd>
  );
};

export default MyFiles;
