import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import FigmaIcon from '../Assets/MyProject/FigmaIcon.png';

const UiUxProject = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 250,
        y: 150,
        width: 850,
        height: 400,
      }}
      minWidth={380}
      minHeight={500}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
        <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
        <div className="flex text-white">UI/UX Project</div>
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

      <div className="flex flex-col h-full gap-8 p-2 overflow-y-auto">
        <div className="flex flex-wrap flex-row p-[10px]  text-white">
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Happy Toon</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Photographer <br /> Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolios</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
          <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
            <img className="h-[60px] w-[60px] bg-cover" src={FigmaIcon} alt="Disk C" />
            <h1 className="mt-1 mb-[15px]">Portfolio</h1>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b]">
        <div className="flex text-white">3 Items |</div>
      </div> */}
    </Rnd>
  );
};

export default UiUxProject;
