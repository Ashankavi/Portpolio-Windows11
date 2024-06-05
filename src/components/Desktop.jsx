import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Wallpaper from '../Assets/Desktop/wallpaper.jpg';
import ThisPCIcon from '../Assets/Desktop/ThisPC.png';
import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import TrashBUCKET from '../Assets/Desktop/TrashBucket.png';
import ChromeB from '../Assets/Desktop/Chrome.png';
import CVFiles from '../Assets/Desktop/CVFile.png';
import AboutMeIcon from '../Assets/Desktop/aboutme.png';

import ThisPC from './Desktop-Folders/ThisPC';
import RecycleBin from './Desktop-Folders/RecycleBin';
import Chrome from './Desktop-Folders/Chrome';
import MyResume from './Desktop-Folders/MyResume';
import AboutMe from './Desktop-Folders/AboutMe';
import MyProjects from './Desktop-Folders/MyProjects';
import MyFiles from './Desktop-Folders/MyFiles';
import Taskbar from './Taskbar';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState({
    thisPC: false,
    recycleBin: false,
    chrome: false,
    myResume: false,
    aboutMe: false,
    myProjects: false,
    myFiles: false,
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
    <div className="relative flex flex-row w-auto h-[100vh] bg-cover" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="flex flex-col text-white text-[12px] space-y-2 p-4">
        <Draggable>
          <div className="flex flex-col items-center pt-5 pl-5 pr-5 ml-[-18px] hover:bg-gray-500" onDoubleClick={() => handleOpen('thisPC')}>
            <img className="h-[35px] w-[40px] bg-cover" src={ThisPCIcon} alt="This PC" />
            <h1 className="mt-1 mb-[15px]">This PC</h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] ml-[-18px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myFiles')}>
            <img className="h-[35px] w-[40px] bg-cover" src={MyFilesIcon} alt="My Files" />
            <h1 className="mt-1 mb-[15px]">My Files</h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] ml-[-18px] hover:bg-gray-500" onDoubleClick={() => handleOpen('recycleBin')}>
            <img className="h-[40px] w-[40px] bg-cover" src={TrashBUCKET} alt="Recycle Bin" />
            <h1 className="mt-1 mb-[15px]">Recycle Bin</h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] ml-[-18px] hover:bg-gray-500" onDoubleClick={() => handleOpen('chrome')}>
            <img className="h-[40px] w-[40px] bg-cover" src={ChromeB} alt="Google Chrome" />
            <h1 className="mt-1 mb-[15px]">Google <br />Chrome</h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] ml-[-18px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myResume')}>
            <img className="h-[35px] w-[40px] bg-cover" src={CVFiles} alt="My Resume" />
            <h1 className="mt-1 mb-[15px]">My Resume</h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] ml-[-18px]  hover:bg-gray-500" onDoubleClick={() => handleOpen('aboutMe')}>
            <img className="h-[40px] w-[40px] bg-cover border border-white rounded-[50%]" src={AboutMeIcon} alt="About Me" />
            <h1 className="mt-1 mb-[15px]">About Me</h1>
          </div>
        </Draggable>
      </div>

      {/* Right side column */}
      <div className="flex flex-col text-white text-[12px] space-y-2 pt-4">
        <Draggable>
          <div className="flex flex-col items-center pt-[15px] pl-[15px] pr-[15px] hover:bg-gray-500" onDoubleClick={() => handleOpen('myProjects')}>
            <img className="h-[35px] w-[40px] bg-cover" src={MyFilesIcon} alt="My Projects" />
            <h1 className="mt-1 mb-[15px]">My Projects</h1>
          </div>
        </Draggable>
      </div>

      {openWindows.thisPC && <ThisPC onClose={() => handleClose('thisPC')} />}
      {openWindows.myFiles && <MyFiles onClose={() => handleClose('myFiles')} />}
      {openWindows.recycleBin && <RecycleBin onClose={() => handleClose('recycleBin')} />}
      {openWindows.chrome && <Chrome onClose={() => handleClose('chrome')} />}
      {openWindows.myResume && <MyResume onClose={() => handleClose('myResume')} />}
      {openWindows.aboutMe && <AboutMe onClose={() => handleClose('aboutMe')} />}
      {openWindows.myProjects && <MyProjects onClose={() => handleClose('myProjects')} />}

      <Taskbar openWindows={openWindows} />
    </div>
  );
};

export default Desktop;
