import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import AboutMeIcon from '../Assets//Desktop/aboutme.png';

const AboutMe = ({ onClose }) => {
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
      position={isMaximized ? { x: 5, y: 2 } : undefined}
      size={isMaximized ? { width: '99.10%', height: '93.80%' } : undefined}
      minWidth={270}
      minHeight={350}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[19px] w-[20px] bg-cover" src={AboutMeIcon} alt="My Video" />
          <div className="flex text-white">About Me</div>
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

        <PerfectScrollbar className="flex-grow p-2 overflow-y-auto text-center text-white cursor-default ">
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

        {/* End Section */}
        <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
          <div className="text-white">905 Words</div>
        </div>
      </div>
    </Rnd>
  );
};

export default AboutMe;
