import React, { useState } from 'react';
import Navbar from "../components/NavBar";
import ResultPage from "../Pages/ResultPage"; 
import Counter from '../components/quiz/Counter';
import QuestionComponent from '../components/quiz/Question'; 

const QuizQuestionsPage: React.FC = () => {
  const [quizSubmitted, setQuizSubmitted] = useState(false); 
  const [quizResult, setQuizResult] = useState<any>(null);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  // Function to handle quiz submission
  const handleQuizSubmit = async () => {
    if (Object.keys(userAnswers).length === 0) {
      console.warn("No answers selected.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, 
          quizId: 1,
          userAnswers,
        }),
      });

      const data = await response.json();
      setQuizResult(data); // Store the result from backend (correct answers)
      setQuizSubmitted(true); // Mark quiz as submitted
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (quizSubmitted && quizResult) {
    // If the quiz is submitted, show the result page
    return <ResultPage result={quizResult} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar title="Quiz" />
      <div className="w-full max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">How well do you know your cohort?</h1>
        </div>

        <div className="w-full">
          {/* Pass the function to collect selected answers */}
          <QuestionComponent setUserAnswers={setUserAnswers} />
        </div>

        <div className="mt-6">
          <button
            onClick={handleQuizSubmit}
            className="w-full bg-green-500 text-white py-2 rounded-md"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionsPage;








