import React, { useState } from 'react';
import Navbar from '../components/NavBar'; // Import Navbar
import TextInput from '../components/inputs/TextInput'; // Import TextInput component
import TextArea from '../components/inputs/TextArea'; // Import TextArea component
import CategoryDropdown from '../components/inputs/CategoryDropdown'; // Import CategoryDropdown
import DifficultyDropdown from '../components/inputs/DifficultyDropdown'; // Import DifficultyDropdown
import Button from '../components/buttons/Button'; // Import Button component
import Modal from '../components/Modal'; // Import Modal component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InputPages: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function from the hook
  const [quizTitle, setQuizTitle] = useState(''); // State for quiz title
  const [quizDescription, setQuizDescription] = useState(''); // State for quiz description
  const [category, setCategory] = useState('Select Category'); // State for category selection
  const [difficulty, setDifficulty] = useState('Select Difficulty'); // State for difficulty selection
  const [questions, setQuestions] = useState<{ question: string; correctAnswer: string; wrongAnswers: string[] }[]>([
    { question: '', correctAnswer: '', wrongAnswers: ['', '', ''] },
  ]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Handle input change for questions and answers
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = value;
    } else if (field === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = value;
    } else {
      const wrongIndex = parseInt(field.split('_')[1]); // Extract the wrong answer index
      updatedQuestions[index].wrongAnswers[wrongIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  // Function to add more questions
  const addMoreQuestions = () => {
    setQuestions([...questions, { question: '', correctAnswer: '', wrongAnswers: ['', '', ''] }]);
    setErrorMessage(''); // Reset any previous error message
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!quizTitle || !quizDescription || category === 'Select Category' || difficulty === 'Select Difficulty') {
      setErrorMessage('Please fill in all fields: quiz title, description, category, and difficulty.');
      return; // Stop the submission
    }

    // Check if there are at least 10 questions
    if (questions.length < 10) {
      setErrorMessage('Please provide at least 10 questions.'); // Set error message
      return; // Stop the submission
    }

    // If all checks pass, show the modal
    setShowModal(true); // Show the modal on submit
    setErrorMessage(''); // Reset error message
  };

  // Function to handle navigation to Home
  const navigateHome = () => {
    navigate('/'); // Replace with your home path
  };

  // Function to handle navigation to Explore Quizzes
  const navigateExplore = () => {
    navigate('/explore'); // Replace with your explore path
  };

  return (
    <div className="min-h-screen">
      {/* Display the Navbar */}
      <Navbar title="Make your quiz" />

      <div className="p-4">
        {/* Add inputs for quiz creation */}
        <TextInput
          placeholder="Enter quiz title"
          label="Name of the quiz"
          value={quizTitle}
          onChange={(value) => setQuizTitle(value)} // Update quiz title state
        />
        <TextArea
          placeholder="Enter a description here"
          label="Add a brief description"
          value={quizDescription}
          onChange={(value) => setQuizDescription(value)} // Update quiz description state
        />
        <CategoryDropdown onChange={setCategory} /> {/* Pass selected category to state */}
        <DifficultyDropdown onChange={setDifficulty} /> {/* Pass selected difficulty to state */}

        {/* Add a line after the Difficulty Dropdown */}
        <hr className="my-4" /> {/* Add styling here for spacing */}

        {/* Questions and Answers Section */}
        <div className="mt-6">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <TextInput
                label={`Question ${index + 1}`}
                placeholder="Type the question here"
                value={q.question}
                onChange={(value) => handleInputChange(index, 'question', value)} // Update question state
              />
              <TextInput
                label="Correct Answer"
                placeholder="Type the correct answer here"
                value={q.correctAnswer}
                onChange={(value) => handleInputChange(index, 'correctAnswer', value)} // Update correct answer state
              />
              {q.wrongAnswers.map((wrongAnswer, i) => (
                <TextInput
                  key={i}
                  label={`Wrong Answer ${i + 1}`}
                  placeholder="Type the wrong answer here"
                  value={wrongAnswer}
                  onChange={(value) => handleInputChange(index, `wrong_${i}`, value)} // Update wrong answer state
                />
              ))}
              <hr className="my-4" /> {/* Add a line between question blocks */}
            </div>
          ))}

          {/* Display error message in the center */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}

          <div className="flex justify-center mt-4">
            <Button text="Add more questions" onClick={addMoreQuestions} className="mr-4" />
            <Button text="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      {/* Render Modal if showModal is true */}
      {showModal && (
        <Modal
          message="Thank you for creating your quiz!"
          onClose={() => setShowModal(false)}
          onHome={navigateHome}
          onExplore={navigateExplore}
        />
      )}
    </div>
  );
};

export default InputPages;
