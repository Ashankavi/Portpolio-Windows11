import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import ReactIcons from '../Assets/MyProject/reactIcon.png';

const ReactProject = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 250,
        y: 150,
        width: 850,
        height: 400,
      }}
      minWidth={300}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
        <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
        <div className="flex text-white">React Project</div>
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

      <PerfectScrollbar className='flex flex-wrap flex-row p-[20px] text-white cursor-default'>
        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 01</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 02</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 03</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 04</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 05</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 06</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 07</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 08</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 09</h1>
        </div>

        <div className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500">
          <img className="h-[60px] w-[60px] bg-cover" src={ReactIcons} alt="Disk C" />
          <h1 className="mt-1 mb-[15px]">Project 10</h1>
        </div>
      </PerfectScrollbar>

      <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b]">
        <div className="flex text-white">3 Items |</div>
      </div>
    </Rnd>
  );
};

export default ReactProject;
