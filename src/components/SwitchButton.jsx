import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchButton = () => {
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const toggleSwitch = () => {
    setEnabled(!enabled);
    if (!enabled) {
      navigate('/collection');
    } else {
      navigate('/event');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className={`font-semibold ${enabled ? 'text-gray-400' : 'text-black'}`}>Event</span>
      <div
        className={`relative inline-flex items-center h-8 w-16 rounded-full cursor-pointer transition-colors duration-300 ${
          enabled ? 'bg-green-500' : 'bg-gray-300'
        }`}
        onClick={toggleSwitch}
      >
        <span
          className={`${
            enabled ? 'translate-x-8' : 'translate-x-0'
          } inline-block w-7 h-7 transform bg-white rounded-full transition-transform duration-300`}
        />
        <button
          className={`absolute left-1 top-1 text-xs font-semibold transition-opacity duration-300 ease-in-out ${
            enabled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Event
        </button>
        <button
          className={`absolute right-1 top-1 text-xs font-semibold transition-opacity duration-300 ease-in-out ${
            enabled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Collection
        </button>
      </div>
      <span className={`font-semibold ${enabled ? 'text-black' : 'text-gray-400'}`}>Collection</span>
    </div>
  );
};

export default SwitchButton;
