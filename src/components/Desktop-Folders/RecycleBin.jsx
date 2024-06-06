import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import ReactIcons from '../Assets/MyProject/reactIcon.png';
import RecycleIcon from '../Assets/Desktop/TrashBucket.png';
import FigmaIcon from '../Assets/MyProject/FigmaIcon.png';
import VideoIcon from '../Assets/MyFiles/potplyerIcon.png';

const RecycleBin = ({ onClose }) => {

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const folders = [

    { icon: ReactIcons, name: 'Project 01' },
    { icon: MyFilesIcon, name: 'Project 02' },
    { icon: ReactIcons, name: 'Project 03' },
    { icon: FigmaIcon, name: 'Project 01' },
    { icon: VideoIcon, name: 'Video 07' },
    { icon: VideoIcon, name: 'Project 06' },
    { icon: ReactIcons, name: 'Project 07' },
    { icon: FigmaIcon, name: 'Project 22' },
    { icon: FigmaIcon, name: 'Project 05' },
    { icon: ReactIcons, name: 'Project 10' },
  ];

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
          <img className="h-[19px] w-[20px] bg-cover" src={RecycleIcon} alt="My Video" />
          <div className="flex text-white">Recycle Bin</div>
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
          <div className="flex flex-wrap">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500"
              >
                <img className="h-[60px] w-[60px] bg-cover" src={folder.icon} alt={folder.name} />
                <h1 className="mt-1 mb-[15px]">{folder.name}</h1>
              </div>
            ))}
          </div>
        </PerfectScrollbar>

        {/* End Section */}
        <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
          <div className="text-white">10 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default RecycleBin;
