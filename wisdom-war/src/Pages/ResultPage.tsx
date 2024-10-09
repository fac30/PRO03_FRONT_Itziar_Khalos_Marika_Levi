import React from "react";
import Button from "../components/buttons/Button";

type ResultPageProps = {
  totalQuestions: number;
  score?: number;
};

function ResultPage(props: ResultPageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mt-20">Your Quiz Result: {}</h1>
      
      <div className="container flex justify-center mx-auto">
        {/* Empty container */}
        <div className="empty-container bg-gray-200 border border-black w-64 h-64 my-10"></div>  
      </div>

      <p className="text-center text-xl font-normal mt-4">Correct Answers: {props.score} out of {props.totalQuestions}</p>
      <div className="flex space-x-4 mt-8">
        <Button text="Home" path="/" />
        <Button text="Explore more quizzes" path="/explore" />
      </div>
    </div>
  );
}


export default ResultPage;
