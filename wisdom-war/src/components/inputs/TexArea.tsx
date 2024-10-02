import React, { useState } from 'react';

interface TextAreaProps {
  label?: string;
  placeholder?: string;
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

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const sanitizedValue = sanitizeInput(value);
    setInputValue(sanitizedValue);
    onChange(sanitizedValue);
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto mb-4">
      {label && <label className="block mb-2 text-lg font-semibold">{label}</label>}
      <textarea
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

export default TextArea;
