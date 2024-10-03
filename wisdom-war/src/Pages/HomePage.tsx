import React from 'react';
import Logo from '../components/Logo'; // Import your logo component
import Button from '../components/buttons/Button'; // Import your button component
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // React Router hook to programmatically navigate

  // Handle navigation when buttons are clicked
  const goToCreateQuiz = () => navigate('/create-quiz');
  const goToExploreQuizzes = () => navigate('/explore');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo /> {/* Logo centered */}
      <h1 className="text-3xl font-bold mt-4">Select one option:</h1>
      <div className="flex space-x-4 mt-6"> {/* Buttons in a row with spacing */}
        <Button text="Create a new quiz" onClick={goToCreateQuiz} />
        <Button text="Explore our quizzes" onClick={goToExploreQuizzes} />
      </div>
    </div>
  );
};

export default HomePage;