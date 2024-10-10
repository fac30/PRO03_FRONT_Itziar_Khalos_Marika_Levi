import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import { useParams } from "react-router-dom";

interface ResultPageProps {}

const ResultPage: React.FC<ResultPageProps> = () => {
  const [results, setResults] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  const [quizName, setQuizName] = useState<string | null>(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const quizResults = await fetch(`http://localhost:3000/results/${id}`);
        if (!quizResults.ok) throw new Error("Failed to fetch results.");
        const resultData = await quizResults.json();
        setResults(resultData);
      } catch (error) {
        setError("Failed to fetch results.");
      }
    };

    fetchScore();

    const storedQuizName = localStorage.getItem("quizTitle");
    if (storedQuizName) {
      setQuizName(storedQuizName);
    }
  }, []);
  if (!results) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mt-20">
        Your Quiz Result: {quizName}
      </h1>

      <div className="container flex justify-center mx-auto">
        <div className="empty-container bg-gray-200 border border-black w-64 h-64 my-10"></div>
      </div>

      <p className="text-center text-xl font-normal mt-4">
        Correct Answers: {results.score} out of {results.totalQuestions}
      </p>

      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" />
        <Button text="Explore more quizzes" path="/explore" />
      </div>
    </div>
  );
};

export default ResultPage;
