import React from 'react';
import { FaWindows } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import ThisPCIcon from '../Assets/Desktop/ThisPC.png';
import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import TrashBUCKET from '../Assets/Desktop/TrashBucket.png';
import ChromeB from '../Assets/Desktop/Chrome.png';
import CVFiles from '../Assets/Desktop/CVFile.png';
import AboutMeIcon from '../Assets/Desktop/aboutme.png';
import ReactIcons from './Assets/MyProject/reactIcon.png';

const icons = {
  thisPC: ThisPCIcon,
  myFiles: MyFilesIcon,
  recycleBin: TrashBUCKET,
  chrome: ChromeB,
  myResume: CVFiles,
  aboutMe: AboutMeIcon,
  myProjects: MyFilesIcon,
  reactProject: ReactIcons,
};

const names = {
  thisPC: 'This PC',
  myFiles: 'My Files',
  recycleBin: 'Recycle Bin',
  chrome: 'Google Chrome',
  myResume: 'My Resume',
  aboutMe: 'About Me',
  myProjects: 'My Projects',
  reactProject: 'React Project',

};

const Taskbar = ({ openWindows }) => {
  const date = new Date();
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const day = date.toLocaleDateString([], { weekday: 'short' });
  const dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric' });

  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-between w-full h-10 text-white bg-gray-800">
      {/* Weather Section */}
      <div className="flex items-center space-x-2 py-[8px] px-[10px]  hover:bg-[#d6d6d638]">
        <WiDaySunny className="w-6 h-6" />
        <span>75°F</span>
      </div>

      {/* Center Section */}
      <div className="absolute flex items-center space-x-4 transform -translate-x-1/2 left-1/2 hover:bg-[#d6d6d638] ">
        <FaWindows className="w-7 h-7  text-white hover:text-[#0b46d4] " />
        {/* Render open folder icons and names */}
        {Object.keys(openWindows).map(
          (window) =>
            openWindows[window] && (
              <div key={window} className="flex items-center space-x-2">
                <img src={icons[window]} alt={names[window]} className="w-5 h-5 " />
                <span>{names[window]}</span>
              </div>
            )
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 py-[5px] px-[10px] hover:bg-[#d6d6d638]">
    
        <div className="flex flex-col leading-[15px] text-[12px]  items-center ">
          <span>{time}</span>
          <span>{day}, {dateStr}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
