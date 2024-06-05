import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import ReactProject from '../My-Project-Folder/ReactProject'; 
import UiUxProject from '../My-Project-Folder/UiUxProject'; 
import HtmlProject from '../My-Project-Folder/HtmlProject'; 

const MyProjects = ({ onClose }) => {
  const [openWindows, setOpenWindows] = useState({
    reactProject: false,
    uiUxProject: false,
    htmlProject: false,
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
    <>
      <Rnd
        default={{
          x: 200,
          y: 100,
          width: 850,
          height: 400,
        }}
        minWidth={280}
        minHeight={350}
        bounds="parent"
        className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg cursor-default" >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
          <div className="flex text-white">My Project</div>
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

        <div className='flex flex-wrap flex-row p-[20px] gap-8 text-white cursor-default'>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('reactProject')}>
            <img className="h-[35px] w-[40px] bg-cover" src={MyFilesIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">React <br /> Project</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('uiUxProject')}>
            <img className="h-[35px] w-[40px] bg-cover" src={MyFilesIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">UI/UX <br /> Project</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500" onDoubleClick={() => handleOpen('htmlProject')}>
            <img className="h-[35px] w-[40px] bg-cover" src={MyFilesIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">HTML <br />Project</h1>
          </div>
        </div>

        <div className="flex mt-[100px] items-end p-2 rounded-b-[10px] bg-[#2b2b2b] cursor-default">
          <div className="flex text-white">3 Items |</div>
        </div>
      </Rnd>

      {openWindows.reactProject && (
        <ReactProject onClose={() => handleClose('reactProject')} />
      )}
      {openWindows.uiUxProject && (
        <UiUxProject onClose={() => handleClose('uiUxProject')} />
      )}
      {openWindows.htmlProject && (
        <HtmlProject onClose={() => handleClose('htmlProject')} />
      )}
    </>
  );
};

export default MyProjects;
