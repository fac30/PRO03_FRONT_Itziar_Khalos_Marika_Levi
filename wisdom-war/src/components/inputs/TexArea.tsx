import React, { useState } from 'react';

const DescriptionTextarea: React.FC = () => {
  const [description, setDescription] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value); // Update the description state
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto mb-4">
      <label className="block mb-2 text-lg font-semibold">Add a Brief Description</label>
      <textarea
        value={description}
        onChange={handleChange}
        placeholder="Enter a description here"
        className={`w-full h-32 border border-gray-300 bg-[var(--secondary-background)] p-3 rounded-md focus:outline-none focus:border-gray-500 resize-none ${
          description ? 'text-black' : 'text-gray-500' // Change text color based on input
        }`}
      />
    </div>
  );
};

export default DescriptionTextarea;
