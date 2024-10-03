import React from 'react';
import Navbar from '../components/NavBar'; // Import Navbar
import TextInput from '../components/inputs/TextInput'; // Import TextInput component
import TextArea from '../components/inputs/TextArea'; // Import TextArea component
import CategoryDropdown from '../components/inputs/CategoryDropdown'; // Import CategoryDropdown
import DifficultyDropdown from '../components/inputs/DifficultyDropdown'; // Import DifficultyDropdown

const InputPages: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Display the Navbar */}
      <Navbar title="Make your quiz" />

      <div className="p-4">
        {/* Add inputs for quiz creation */}
        <TextInput placeholder="Enter quiz title" label="Name of the quiz" onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        } } />
        <TextArea placeholder="Enter a description here" label="Add a brief description" onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        } } />
        <CategoryDropdown />
        <DifficultyDropdown />
      </div>
    </div>
  );
};

export default InputPages;

