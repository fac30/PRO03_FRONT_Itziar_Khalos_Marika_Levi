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
      <div className="card p-6 md:p-8 lg:p-10 rounded-md my-5 max-w-full md:max-w-md lg:max-w-lg mx-auto shadow-lg">
        <h3 className="quiz-name text-xl md:text-2xl lg:text-3xl font-semibold p-2">
          {props.quizName}
        </h3>
        <p className="quiz-description p-2 text-sm md:text-base lg:text-lg">
          {props.description}
        </p>
        <p className="level text-sm md:text-base lg:text-lg font-semibold p-2">
          Level: {props.level}
        </p>
        <Button
          text="Play"
          path={`/quiz/${props.quizId}`}
          className="mt-4 w-full md:w-auto"
        />
      </div>
    </>
  );
}

export default Card;
