import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface CategoryDropdownProps {
  onChange: (value: string) => void; // Prop to handle category selection
  className?: string; // Made className optional
}

interface Quiz {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ onChange }) => {
  const [categories, setCategories] = useState<string[]>([]); // State for categories
  const [selectedCategory, setSelectedCategory] = useState<string>('Select Category');
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage dropdown visibility
  const [error, setError] = useState<string | null>(null); // State to manage errors

  useEffect(() => {
    // Fetch quizzes from the local server
    fetch('http://localhost:3000/quizzes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quizzes');
        }
        return response.json() as Promise<Quiz[]>; // Explicitly type the response as an array of Quiz objects
      })
      .then((data: Quiz[]) => {
        // Extract unique categories from the fetched quizzes
        const uniqueCategories = Array.from(new Set(data.map((quiz) => quiz.category)));
        setCategories(uniqueCategories); // Set the unique categories
      })
      .catch((error) => {
        setError(error.message); // Set the error message to state
        console.error(error); // Log the error to the console
      });
  }, []);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    onChange(category); // Call onChange with the selected category
    setIsOpen(false); // Close dropdown after selection
  };

  if (error) return <p className="text-red-500">{error}</p>; // Display error message if any

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
