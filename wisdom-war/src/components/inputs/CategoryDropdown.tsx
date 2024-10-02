import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const CategoryDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Select Category');
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage dropdown visibility

  const categories = ['FAC', 'Music', 'Movies', 'Art'];

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto mb-4">
      <label className="block mb-2 text-lg font-semibold">Category</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
          className={`w-full border border-gray-300 bg-[var(--secondary-background)] text-left p-3 rounded-md flex justify-between items-center ${
            selectedCategory !== 'Select Category' ? 'text-black' : 'text-gray-500'
          }`} // Conditional text color
        >
          <span>{selectedCategory}</span>
          <RiArrowDropDownLine className="text-gray-500" />
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
            {categories.map((category) => (
              <li
                key={category}
                className="p-3 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;
