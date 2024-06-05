import React from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';

const AboutMe = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 200,
        y: 200,
        width: 320,
        height: 200,
      }}
      minWidth={200}
      minHeight={100}
      bounds="parent"
      className="bg-white border rounded-md shadow-lg"
    >
      <div className="flex items-center justify-between p-2 bg-gray-200 border-b cursor-move">
        <div className="text-gray-800">About Me</div>
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
      <div className="p-4">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="mt-2 text-gray-600">
          Hello! I am [Your Name], a [Your Role] based in [Your Location]. I have a passion for [Your Passion] and have been working in the field for [Number of Years] years.
        </p>
        <p className="mt-2 text-gray-600">
          My skills include [Skill 1], [Skill 2], [Skill 3], and more. I enjoy working on projects that involve [Your Interests].
        </p>
        <p className="mt-2 text-gray-600">
          In my free time, I like to [Your Hobbies].
        </p>
      </div>
    </Rnd>
  );
};

export default AboutMe;
