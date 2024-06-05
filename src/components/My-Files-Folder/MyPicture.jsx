import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import MyFilesIcon from '../Assets/Desktop/MyFile.png';
import ReactIcons from '../Assets/MyProject/reactIcon.png';
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

  return (
    <Rnd
      default={{
        x: 250,
        y: 150,
        width: 850,
        height: 500,
      }}
      minWidth={300}
      minHeight={400}
      bounds="parent"
      className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
        <img className="h-[20px] w-[20px] bg-cover" src={PicIcon} alt="This PC" />
        <div className="flex text-white">My Picture</div>
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

      <PerfectScrollbar className="flex flex-row flex-wrap h-full gap-8 p-2 overflow-y-auto text-white cursor-default">
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
      </PerfectScrollbar>

      {/* <div className="flex items-end p-2 rounded-b-[10px] bg-[#2b2b2b]">
        <div className="flex text-white">3 Items |</div>
      </div> */}

      {enlargedImage && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseEnlarged}
        >
          <img src={enlargedImage} alt="Enlarged" className="max-w-[500px] max-h-[500px]" />
        </div>
      )}
    </Rnd>
  );
};

export default MyPicture;
