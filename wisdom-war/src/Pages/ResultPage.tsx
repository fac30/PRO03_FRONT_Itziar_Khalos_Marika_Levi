import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";

interface ResultPageProps {
  totalQuestions: number;
  score?: number;
}

const ResultPage: React.FC<ResultPageProps> = (props) => {
  const [quizName, setQuizName] = useState<string | null>(null);

  // Retrieve quizName from localStorage when the component mounts
  useEffect(() => {
    const storedQuizName = localStorage.getItem('quizTitle');
    if (storedQuizName) {
      setQuizName(storedQuizName);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mt-20">
        Your Quiz Result: {quizName}
      </h1>

      <div className="container flex justify-center mx-auto">
        {/* Empty container */}
        <div className="empty-container bg-gray-200 border border-black w-64 h-64 my-10"></div>
      </div>

      <p className="text-center text-xl font-normal mt-4">
        Correct Answers: {props.score} out of {props.totalQuestions}
      </p>
      
      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" className="w-1/2"/>
        <Button text="Explore more quizzes" path="/explore" className="w-1/2"/>
      </div>
    </div>
  );
};

export default ResultPage;
