import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DifficultyDropdown: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Select Difficulty');
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage dropdown visibility

  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleSelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto mb-4">
      <label className="block mb-2 text-lg font-semibold">Difficulty Level</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
          className={`w-full border border-gray-300 bg-[var(--secondary-background)] text-left p-3 rounded-md flex justify-between items-center ${
            selectedDifficulty !== 'Select Difficulty' ? 'text-black' : 'text-gray-500'
          }`} // Conditional text color
        >
          <span>{selectedDifficulty}</span>
          <RiArrowDropDownLine className="text-gray-500" />
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
            {difficulties.map((difficulty) => (
              <li
                key={difficulty}
                className="p-3 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect(difficulty)}
              >
                {difficulty}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DifficultyDropdown;
