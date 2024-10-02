import React, { useState } from 'react';
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'; // Remix icons for filled and empty circles

// Define a type for the difficulty levels
type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

const DifficultyDropdown: React.FC = () => {
  // State to track selected difficulty with correct typing
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | ''>('');

  // List of difficulty levels as a constant array of DifficultyLevel type
  const difficultyLevels: DifficultyLevel[] = ['Easy', 'Medium', 'Hard'];

  // Function to handle option click with proper typing
  const handleSelect = (level: DifficultyLevel) => {
    setSelectedDifficulty(level);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Label for the dropdown */}
      <label className="block text-lg font-medium mb-2 text-gray-700">Difficulty Level</label>

      {/* Dropdown Menu */}
      <div className="relative">
        {/* Display selected difficulty or placeholder */}
        <div className="bg-white border rounded-lg shadow-lg p-3 cursor-pointer">
          {selectedDifficulty ? selectedDifficulty : 'Select difficulty...'}
        </div>

        {/* Options */}
        <ul className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
          {difficultyLevels.map((level) => (
            <li
              key={level}
              onClick={() => handleSelect(level)}
              className="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer"
            >
              {/* Difficulty label */}
              <span>{level}</span>

              {/* Checkbox - filled or empty circle */}
              {selectedDifficulty === level ? (
                <RiCheckboxCircleFill className="text-blue-500" /> // Filled circle when selected
              ) : (
                <RiCheckboxBlankCircleLine className="text-gray-500" /> // Empty circle when not selected
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DifficultyDropdown;