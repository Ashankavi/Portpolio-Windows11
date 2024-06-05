import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyVideoIcons from '../Assets/MyFiles/VideoIcon.png'; 
import PotPlayerIcon from '../Assets/MyFiles/potplyerIcon.png'

const MyVideo = ({ onClose }) => {
  const handleFolderDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const folders = [
    { name: 'Video 1', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 2', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 3', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 4', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 5', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 6', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 7', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 8', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 10', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 11', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
    { name: 'Video 12', link: 'https://www.youtube.com/watch?v=iaaBpoPeK9Q&ab_channel=My-games', icon: PotPlayerIcon },
  ];

  return (
    <Rnd
      default={{
        x: 100,
        y: 150,
        width: 850,
        height: 300,
      }}
      minWidth={300}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
        <img className="h-[19px] w-[20px] bg-cover" src={MyVideoIcons} alt="My Video" />
        <div className="flex text-white">My Video</div>
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

      <PerfectScrollbar className="flex flex-col h-full gap-8 p-2 overflow-y-auto cursor-default">
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
    </Rnd>
  );
};

export default MyVideo;
