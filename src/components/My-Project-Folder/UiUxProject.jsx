import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import FigmaIcon from '../Assets/MyProject/FigmaIcon.png';

const UiUxProject = ({ onClose }) => {
  const handleFolderDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const folders = [
    { name: 'Happy Toon', link: 'https://www.figma.com/design/uxt4sjo2G4nayFvPpbvG2A/WebToon?node-id=0-1&t=I3Z3E5ePXvApKBDx-0', icon: FigmaIcon },
    { name: 'Fashion Store', link: 'https://www.figma.com/design/ERhyqJY8KEVKaZGnJemgzh/Neha-Fashion-Store?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'My Portfolio', link: 'https://www.figma.com/design/ZyOfpF1J1kNwCNSijIou3C/Portfolio-2?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'Fashion App', link: 'https://www.figma.com/design/VekO2Jy4hxPr70fKKbtVgW/Fashion-Store-App?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'Photographer', link: 'https://www.figma.com/design/Za3IdOUHM8F7lztKCSMwbJ/Untitled?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'HFS Website', link: 'https://www.figma.com/design/nhgBRw3zhXZAFOl5x7id7x/HFS?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'Coffee App', link: 'https://www.figma.com/proto/al1hiOtoIY1o4g71cpyV8y/Cafe-D-Bolla-Coffee-App?t=fqkNk7wxMEZaEbxQ-0&scaling=scale-down&page-id=0%3A1&node-id=0-1&starting-point-node-id=1%3A2&prev-org-id=external-teams', icon: FigmaIcon },
    { name: 'Movie Site', link: 'https://www.figma.com/design/4LUQtjdjgoohP3QnL7yiNU/Cinema-House?t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
    { name: 'Portfolio 2', link: 'https://www.figma.com/design/dQx8E46He1CDkShRyUaaO2/Untitled?node-id=1-2&t=fqkNk7wxMEZaEbxQ-1', icon: FigmaIcon },
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
          <div className="flex text-white">UI/UX Project</div>
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
          <div className="text-white">9 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default UiUxProject;
