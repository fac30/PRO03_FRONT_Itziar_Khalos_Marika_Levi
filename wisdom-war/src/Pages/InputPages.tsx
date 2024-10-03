import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import TextInput from '../components/inputs/TextInput';
import TextArea from '../components/inputs/TextArea';
import CategoryDropdown from '../components/inputs/CategoryDropdown';
import DifficultyDropdown from '../components/inputs/DifficultyDropdown';
import Button from '../components/buttons/Button';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const InputPages: React.FC = () => {
  const navigate = useNavigate();
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

  // Validation for unique questions and distinct answers
  const validateQuiz = () => {
    // Check if all required fields are filled
    if (!quizTitle || !quizDescription || category === 'Select Category' || difficulty === 'Select Difficulty') {
      setErrorMessage('Please fill in all fields: quiz title, description, category, and difficulty.');
      return false; // Validation failed
    }

    // Check if there are at least 5 questions
    if (questions.length < 5) {
      setErrorMessage('Please provide at least 5 questions.');
      return false; // Validation failed
    }

    // Check for duplicate questions
    const questionSet = new Set();
    for (const q of questions) {
      if (!q.question) {
        setErrorMessage('All questions must be filled in.');
        return false; // Validation failed
      }
      if (questionSet.has(q.question)) {
        setErrorMessage('Each question must be unique. Please ensure no duplicate questions.');
        return false; // Validation failed
      }
      questionSet.add(q.question);
    }

    // Check for distinct correct and wrong answers
    for (const q of questions) {
      const { correctAnswer, wrongAnswers } = q;

      if (!correctAnswer || wrongAnswers.some((wrong) => !wrong)) {
        setErrorMessage('Each question must have a correct answer and three wrong answers.');
        return false; // Validation failed
      }

      // Ensure the correct answer is different from all wrong answers
      if (wrongAnswers.includes(correctAnswer)) {
        setErrorMessage('Correct answer cannot be the same as any of the wrong answers.');
        return false; // Validation failed
      }

      // Ensure all wrong answers are distinct from each other
      const wrongAnswerSet = new Set(wrongAnswers);
      if (wrongAnswerSet.size !== wrongAnswers.length) {
        setErrorMessage('All three wrong answers must be different from each other.');
        return false; // Validation failed
      }
    }

    return true; // All validations passed
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (validateQuiz()) {
      // If validation passes, show the modal
      setShowModal(true);
      setErrorMessage('');
    }
  };

  // Function to handle navigation to Home
  const navigateHome = () => {
    navigate('/'); // Navigate to home page
  };

  // Function to handle navigation to Explore Quizzes
  const navigateExplore = () => {
    navigate('/explore'); // Navigate to explore quizzes page
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

          {/* Button row for "Add More Questions" and "Submit Quiz" */}
          <div className="flex justify-center mt-4 space-x-4">
            <Button text="Add more questions" onClick={addMoreQuestions} />
            <Button text="Submit Quiz" onClick={handleSubmit} />
          </div>
        </div>

        {/* Modal for success message */}
        {showModal && (
  <Modal
    message="Thank you for creating your quiz!"
    onClose={() => setShowModal(false)}  // Close modal function
    onHome={navigateHome}                 // Navigate to Home
    onExplore={navigateExplore}           // Navigate to Explore
  />
)}
      </div>
    </div>
  );
};

export default InputPages;
