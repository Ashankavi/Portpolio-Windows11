import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

const MyResume = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 150,
        y: 150,
        width: 320,
        height: 200,
      }}
      minWidth={200}
      minHeight={100}
      bounds="parent"
      className="bg-[#202020] shadow-lg rounded-md border"
    >
      <div className="flex justify-between items-center p-2 bg-[#2b2b2b] border-b cursor-move">
        <div className="text-white ">My Resume</div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-[#202020] rounded">
            <MinusIcon className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 hover:bg-[#202020] rounded">
            <PlusSmIcon className="w-4 h-4 text-white" />
          </button>
          <button onClick={onClose} className="p-2 hover:bg-[#E30D0D] rounded">
            <XIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 text-white">This is bla bla buhshsjh</div>
    </Rnd>
  );
};

export default MyResume;
