import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/buttons/Button";

const ResultPage: React.FC = () => {
  const [quizName, setQuizName] = useState<string | null>(null);
  const [giphyUrl, setGiphyUrl] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const totalQuestions = 10; // Replace with dynamic value if necessary
  
  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    const storedQuizName = localStorage.getItem("quizTitle");

    if (storedScore) setScore(parseInt(storedScore, 10));
    if (storedQuizName) setQuizName(storedQuizName);

    if (storedScore) {
      fetchGiphy(parseInt(storedScore, 10));
    }
  }, []);

  const fetchGiphy = async (score: number) => {
    try {
      const searchTerm = score >= 80 ? "congratulations" : "try again";
      const response = await axios.get(`http://localhost:3000/giphy`, {
        params: { q: searchTerm },
      });
      
      const giphyData = response.data.data[0]; // Get the first GIF
      if (giphyData) {
        setGiphyUrl(giphyData.images.fixed_height.url); // Set the GIF URL
      }
    } catch (error) {
      console.error("Error fetching Giphy:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mt-20">
        Your Quiz Result: {quizName}
      </h1>

      <div className="container flex justify-center mx-auto">
        {giphyUrl ? (
          <img src={giphyUrl} alt="Giphy meme" className="w-64 h-64 my-10" />
        ) : (
          <div className="empty-container bg-gray-200 border border-black w-64 h-64 my-10"></div>
        )}
      </div>

      <p className="text-center text-xl font-normal mt-4">
        Correct Answers: {score} out of {totalQuestions}
      </p>

      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" />
        <Button text="Explore more quizzes" path="/explore" />
      </div>
    </div>
  );
};

export default ResultPage;
