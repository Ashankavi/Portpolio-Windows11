import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import ReactIcons from '../Assets/MyProject/reactIcon.png';

const ReactProject = ({ onClose }) => {
  const handleFolderDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const folders = [
    { name: 'Business Landing', link: 'https://github.com/Ashankavi/business-react-site', icon: ReactIcons },
    { name: 'My Portfolio', link: 'https://github.com/Ashankavi/My-Main-Portfolio', icon: ReactIcons },
    { name: 'Hfs Website', link: 'https://github.com/Ashankavi/HFS-Official-Site', icon: ReactIcons },
    { name: 'Photographer', link: 'https://github.com/Ashankavi/photographer-portfolio', icon: ReactIcons },
    { name: 'PC Portfolio', link: 'https://github.com/Ashankavi/Windows11-Portfolio', icon: ReactIcons },
    { name: 'Navbar', link: 'https://github.com/Ashankavi/React-Tailwind-Navbars', icon: ReactIcons },
    { name: 'tailwind cards', link: 'https://github.com/Ashankavi/React-Tailwinds-Image-Sliders', icon: ReactIcons },
    { name: 'Landing Page', link: 'https://github.com/Ashankavi/feature-landing-page', icon: ReactIcons },
    { name: 'Portfolio 2', link: 'https://www.figma.com/design/dQx8E46He1CDkShRyUaaO2/Untitled?node-id=1-2&t=fqkNk7wxMEZaEbxQ-1', icon: ReactIcons },
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
      minWidth={300}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
          <div className="flex text-white">React Project</div>
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
          <div className="text-white">10 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default ReactProject;
