import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import PicIcon from '../Assets/MyFiles/PictureIcon.png';

import Me1 from '../Assets/MyPicture/me1.jpg';
import Me2 from '../Assets/MyPicture/me2.jpg';
import Me3 from '../Assets/MyPicture/me3.jpg';
import Me4 from '../Assets/MyPicture/me4.jpg';
import Me5 from '../Assets/MyPicture/me5.jpg';
import Me6 from '../Assets/MyPicture/me6.jpg';
import Me7 from '../Assets/MyPicture/me7.jpg';

const MyPicture = ({ onClose }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleDoubleClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Rnd
      default={{
        x: 250,
        y: 20,
        width: 850,
        height: 500,
      }}
      position={isMaximized ? { x: 5, y: 2 } : undefined}
      size={isMaximized ? { width: '99.10%', height: '93.80%' } : undefined}          
      minWidth={280}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
          <img className="h-[20px] w-[20px] bg-cover" src={PicIcon} alt="This PC" />
          <div className="flex text-white">My Picture</div>
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

        <PerfectScrollbar className="flex-grow p-2 overflow-y-auto text-white cursor-default">
          <div className="flex flex-wrap">
            {[Me1, Me2, Me3, Me4, Me5, Me6, Me7].map((imageSrc, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center pt-4 px-7 mt-[-5px] ml-[-5px] hover:bg-gray-500"
                onDoubleClick={() => handleDoubleClick(imageSrc)}
              >
                <img className="h-[110px] w-[80px] bg-cover" src={imageSrc} alt={`DSC${4215 + index}`} />
                <h1 className="mt-1 mb-[15px]">{`DSC${4215 + index}`}</h1>
              </div>
            ))}
          </div>
        </PerfectScrollbar>

        {/* End Section */}
        <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
          <div className="text-white">7 Items</div>
        </div>
      </div>

      {enlargedImage && (
        <Rnd
          default={{
            x: window.innerWidth / 4,
            y: window.innerHeight / 25,
            width: 550,
            height: 550,
          }}
          bounds="window"
          className="fixed flex items-center justify-center px-20 pl-20 bg-black bg-opacity-75"
        >
          <div className="relative">
            <button onClick={handleCloseEnlarged} className="absolute p-1 bg-red-500 rounded top-2 right-2 hover:bg-red-700">
              <XIcon className="w-6 h-6 text-white" />
            </button>
            <img src={enlargedImage} alt="Enlarged" className="max-w-[550px] max-h-[550px]" />
          </div>
        </Rnd>
      )}
    </Rnd>
  );
};

export default MyPicture;
