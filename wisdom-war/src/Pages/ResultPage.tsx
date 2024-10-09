import React from "react";
import Navbar from "../components/NavBar";
import Button from "../components/buttons/Button";


interface ResultPageProps {
    result: {
      scorePercentage: number;
      totalCorrect: number;
      totalQuestions: number;
      score?: number;
    };
  }
  
  const ResultPage: React.FC<ResultPageProps> = ({ result }) => {
    return (
      <div>
        <h1>Your Quiz Results</h1>
        <p>You scored: {result.scorePercentage}%</p>
        <p>Correct Answers: {result.totalCorrect} out of {result.totalQuestions}</p>
      </div>
    );
  };
  
  export default ResultPage;
  