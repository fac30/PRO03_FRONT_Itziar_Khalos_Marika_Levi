import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/buttons/Button";

const scoreGifMap: { [key: number]: string[] } = {
  100: ['celebration', 'well done', 'winner', 'awesome'],
  90: ['great', 'happy', 'success'],
  80: ['good job', 'well done', 'almost'],
  70: ['not bad', 'you did it'],
  60: ['ok', 'could be better'],
  50: ['meh', 'you tried'],
  40: ['oops', 'not good'],
  30: ['fail', 'thumbs down'],
  20: ['bad', 'try again'],
  10: ['very bad', 'oops'],
  0:  ['disaster', 'you fail', 'total fail'],
};

const ResultPage: React.FC = () => {
  const [quizName, setQuizName] = useState<string | null>(null);
  const [giphyUrl, setGiphyUrl] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    const storedQuizName = localStorage.getItem("quizTitle");
    const storedTotalQuestions = localStorage.getItem("totalQuestions");

    if (storedScore) {
      const parsedScore = parseInt(storedScore, 10);
      setScore(parsedScore);
      if (storedTotalQuestions) {
        const parsedTotalQuestions = parseInt(storedTotalQuestions, 10);
        setTotalQuestions(parsedTotalQuestions); // Use this line to set totalQuestions
        fetchGiphy(parsedScore, parsedTotalQuestions); // Pass totalQuestions for percentage calculation
      }
    }
    if (storedQuizName) setQuizName(storedQuizName);
  }, []);

  const fetchGiphy = async (score: number, totalQuestions: number) => {
    const percentageScore = Math.round((score / totalQuestions) * 100); // Calculate the percentage
    const roundedScore = Math.floor(percentageScore / 10) * 10; 
    const validScore = Math.min(Math.max(roundedScore, 0), 100); 
    const tags = scoreGifMap[validScore] || scoreGifMap[0]; 
    const randomTag = tags[Math.floor(Math.random() * tags.length)]; 

    try {
      const response = await axios.get(`http://localhost:3000/giphy`, {
        params: { q: randomTag },
      });

      const gifUrl = response.data.data[0]?.images?.fixed_height?.url;
      if (gifUrl) {
        setGiphyUrl(gifUrl);
      } else {
        console.error("No GIF found for tag:", randomTag);
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
        Correct Answers: {score} out of {totalQuestions} {/* Use totalQuestions here */}
      </p>

      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" />
        <Button text="Explore more quizzes" path="/explore" />
      </div>
    </div>
  );
};

export default ResultPage;
