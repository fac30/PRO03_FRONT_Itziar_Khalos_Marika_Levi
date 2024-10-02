import React, { useState } from 'react';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

const DifficultyDropdown: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const difficulties = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block w-64">
      {/* Button to toggle the dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 px-4 py-2 rounded-md w-full text-left focus:outline-none"
      >
        {selectedDifficulty ? selectedDifficulty : 'Select difficulty...'}
        <span className="ml-2 float-right">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-md w-full rounded-md z-10">
          {difficulties.map((difficulty) => (
            <li
              key={difficulty.value}
              onClick={() => handleSelect(difficulty.label)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
            >
              {selectedDifficulty === difficulty.label ? (
                <RiCheckboxCircleFill className="text-green-500 mr-2" />
              ) : (
                <RiCheckboxBlankCircleLine className="mr-2" />
              )}
              {difficulty.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DifficultyDropdown;
