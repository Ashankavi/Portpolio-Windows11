import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

const Chrome = ({ onClose }) => {
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
      className="bg-white border rounded-md shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-gray-200 border-b cursor-move">
        <div className="text-gray-800">Google Chrome</div>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-300">
            <MinusIcon className="w-4 h-4 text-gray-800" />
          </button>
          <button className="p-1 rounded hover:bg-gray-300">
            <PlusSmIcon className="w-4 h-4 text-gray-800" />
          </button>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-300">
            <XIcon className="w-4 h-4 text-gray-800" />
          </button>
        </div>
      </div>
      <div className="p-4">This is the content of the Google Chrome window.</div>
    </Rnd>
  );
};

export default Chrome;
