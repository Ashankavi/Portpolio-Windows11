

import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import HTMLIcon from '../Assets/MyProject/htmlIcon.png';

const HtmlProject = ({ onClose }) => {
  const handleFolderDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const folders = [
    { name: 'Hospital Website', link: 'https://github.com/Ashankavi/hospital-website', icon: HTMLIcon },
    { name: 'Fashion Store', link: 'https://github.com/Ashankavi/frontend-internship-test', icon: HTMLIcon },
  ];

    const [isMaximized, setIsMaximized] = useState(false);
  
    const handleMaximize = () => {
      setIsMaximized(!isMaximized);
    };

  return (
    <Rnd
      default={{
        x: 100,
        y: 150,
        width: 850,
        height: 300,
      }}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      size={isMaximized ? { width: '100%', height: '100%' } : undefined}
      minWidth={300}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
          <div className="flex text-white">HTML Project</div>
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

        <PerfectScrollbar className="flex-grow p-2 overflow-y-auto">
          <div className="flex flex-wrap flex-row p-[10px] text-white">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500"
                onDoubleClick={() => handleFolderDoubleClick(folder.link)}
              >
                <img className="h-[60px] w-[60px] bg-cover" src={folder.icon} alt={folder.name} />
                <h1 className="mt-1 mb-[15px]">{folder.name}</h1>
              </div>
            ))}
          </div>
        </PerfectScrollbar>

        {/* End Section */}
        <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
          <div className="text-white">2 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default HtmlProject;
