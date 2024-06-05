import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AboutMeIcon from '../Assets//Desktop/aboutme.png';

const AboutMe = ({ onClose }) => {
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
    <Rnd
      default={{
        x: 160,
        y: 20,
        width: 800,
        height: 500,
      }}
      minWidth={450}
      minHeight={300}
      maxHeight={680}
      bounds="parent"
      className="bg-[#202020] border-zinc-200 rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-move">
        <img className="h-[30px] w-[30px] bg-cover" src={AboutMeIcon} alt="This PC" />
        <div className="flex text-white">About Me</div>
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

      <PerfectScrollbar className="flex flex-col p-4 text-white overflow-y-auto h-[calc(100%_-_40px)]">
        <h2 className="text-3xl font-semibold uppercase">Ashan Kavindu</h2>
        <h2 className="text-xl font-semibold uppercase">( SOFTWARE ENGINNERING UNDERGRADUATE )</h2>
        <h2 className="mt-8 text-lg font-semibold uppercase">About Me</h2>
        <p className="mt-2">
          Hello! I am a self-motivated, hardworking individual who is ready
          to take on new challenges. I am keen on gaining experience
          and practical knowledge in the field of software
          engineering. I like to improve my skills with working on
          projects. Also I have knowledge about web application
          design, Ui/Ux design and graphic designing
        </p>

        <h2 className="mt-5 text-lg font-semibold uppercase">Education</h2>
        <h2 className="mt-2 text-[15px] font-semibold">HIGHER NATIONAL DIPLOMA IN COMPUTING (GENERAL)</h2>
        <p className="mt-2">IDM Nations Campus <br />2022 - 2024 Completed</p>

        <h2 className="mt-2 text-[15px] font-semibold">DIPLOMA IN INFORMATION TECHNOLOGY (DITEC)</h2>
        <p className="mt-2">ESOFT Metro Campus <br />2021 - Completed</p>

        <h2 className="mt-2 text-[15px] font-semibold">IDM E-KIDS (EXPLORE KIDS) L05</h2>
        <p className="mt-2">IDM Nations Campus <br />2014 Completed</p>

        <h2 className="mt-2 text-[15px] font-semibold">VIDYALOKA COLLEGE, GALLE</h2>
        <p className="mt-2">G.C.E. Advanced Level (2020) <br /> G.C.E. Ordinary Level (2017)</p>
      </PerfectScrollbar>
    </Rnd>
  );
};

export default AboutMe;
