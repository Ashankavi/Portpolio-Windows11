import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MyMusicIcon from '../Assets/MyFiles/MusicIcon.png'
import SpotifyIcon from '../Assets/MyFiles/spotifyIcons.png'

const MyMusic = ({ onClose }) => {
  const handleFolderDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const folders = [
    { name: 'Music 1', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 2', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 3', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 4', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 5', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 6', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 7', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 8', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
    { name: 'Music 9', link: 'https://open.spotify.com/track/0LSJTwsg6rOWr7S77txE3p?si=6983814a811f430f', icon: SpotifyIcon },
  ];

  return (
    <Rnd
      default={{
        x: 100,
        y: 150,
        width: 850,
        height: 300,
      }}
      minWidth={250}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[19px] w-[20px] bg-cover" src={MyMusicIcon} alt="My Video" />
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

        <PerfectScrollbar className="flex-grow p-2 overflow-y-auto text-white cursor-default">
          <div className="flex flex-wrap">
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
          <div className="text-white">11 Items</div>
        </div>
      </div>
    </Rnd>
  );
};

export default MyMusic;
