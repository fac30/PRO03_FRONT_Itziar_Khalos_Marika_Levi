import React from "react";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import QuizQuestionsPage from "../../Pages/QuizQuestionsPage";

type CardProps = { quizName: string; description: string; level: string };

function Card(props: CardProps) {
  const navigate = useNavigate();
  
  const goToQuiz = () => {
    navigate('/quiz')
  }

  return (
    <div className="card p-10 rounded-md">
      <h3 className="quiz-name text-2xl font-semibold p-2">
        {props.quizName}
      </h3>
      <p className="quiz-description p-2">{props.description}</p>
      <p className="level text-medium font-semibold p-2">
        Level: {props.level}
      </p>
      <Button 
        type="button"
        onClick={goToQuiz} 
        text="Play" 
      />
    </div>
  );
}

export default Card;
