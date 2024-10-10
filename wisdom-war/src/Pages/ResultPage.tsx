import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import { useParams } from "react-router-dom";

interface ResultPageProps {}

const ResultPage: React.FC<ResultPageProps> = () => {
  const [results, setResults] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gifUrl, setGifUrl] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const [quizName, setQuizName] = useState<string | null>(null);

  // Fetch quiz results based on the ID
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
  }, [id]);

  // Fetch the GIF based on the score
  const fetchGifBasedOnScore = async (score: number, totalQuestions: number) => {
    try {
      let query = "celebration"; // Default search term

      // Determine the GIF to search for based on the score percentage
      const percentage = (score / totalQuestions) * 100;
      if (percentage < 50) {
        query = "better luck next time";
      } else if (percentage >= 50 && percentage < 80) {
        query = "well done";
      }

      // Fetch the GIF from the backend, which fetches it from Giphy
      const gifResponse = await fetch(`http://localhost:3000/giphy?q=${query}`);
      const gifData = await gifResponse.json();

      if (gifData?.data?.[0]?.images?.original?.url) {
        setGifUrl(gifData.data[0].images.original.url);
      } else {
        setGifUrl(null);
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
      setGifUrl(null);
    }
  };

  // Fetch GIF when results are available
  useEffect(() => {
    if (results && results.score !== undefined && results.totalQuestions !== undefined) {
      fetchGifBasedOnScore(results.score, results.totalQuestions);
    }
  }, [results]);

  if (!results) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mt-20">
        Your Quiz Result: {quizName}
      </h1>

      <div className="container flex justify-center mx-auto">
        {gifUrl ? (
          <img
            src={gifUrl}
            alt="Result Gif"
            className="w-64 h-64 my-10"
          />
        ) : (
          <div className="empty-container bg-gray-200 border border-black w-64 h-64 my-10"></div>
        )}
      </div>

      <p className="text-center text-xl font-normal mt-4">
        Correct Answers: {results.score} out of {results.totalQuestions}
      </p>

      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" />
        <Button text="Explore more quizzes" path="/explore" />
      </div>

      {error && (
        <p className="text-center text-red-500 mt-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default ResultPage;
