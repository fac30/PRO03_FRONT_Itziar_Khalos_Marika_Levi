import React from "react";
import Button from "../buttons/Button";

type CardProps = {
  quizId: number;
  quizName: string;
  description: string;
  level: string;
};

function Card(props: CardProps) {
  return (
    <>
      <div className="card p-10 rounded-md my-5 max-w-lg">
        <h3 className="quiz-name text-2xl font-semibold p-2">
          {props.quizName}
        </h3>
        <p className="quiz-description p-2">{props.description}</p>
        <p className="level text-medium font-semibold p-2">
          Level: {props.level}
        </p>
        <Button text="Play" path={`/quiz/${props.quizId}`} className=""></Button>
      </div>
    </>
  );
}

export default Card;
