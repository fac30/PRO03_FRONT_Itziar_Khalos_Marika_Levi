import React, { useState } from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string; // Add the value prop here
  onChange: (value: string) => void;
}

const sanitizeInput = (value: string) => {
  return value
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(value); // Initialize state with the value prop

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = sanitizeInput(value);
    setInputValue(sanitizedValue);
    onChange(sanitizedValue);
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto mb-4">
      {label && <label className="block mb-2 text-lg font-semibold">{label}</label>}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full border border-gray-300 bg-[var(--secondary-background)] p-3 rounded-md focus:outline-none focus:border-gray-500 ${
          inputValue ? 'text-black' : 'text-gray-500'
        }`}
      />
    </div>
  );
};

export default TextInput;
