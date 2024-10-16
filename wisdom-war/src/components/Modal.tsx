import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;        // Function to close the modal
  onHome: () => void;         // Function to navigate to Home
  onExplore: () => void;      // Function to navigate to Explore quizzes
}

const Modal: React.FC<ModalProps> = ({ message, onClose, onHome, onExplore }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-11/12 md:w-1/3">
        <h2 className="text-xl mb-4">{message}</h2>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none"
            onClick={onHome}
          >
            Back to Home
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none"
            onClick={onExplore}
          >
            Explore Quizzes
          </button>
        </div>
        <button className="mt-4 text-gray-500 underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
