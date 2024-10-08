import React from "react";

interface CounterProps {
  currentQuestion: number;
  totalQuestions: number;
}

const Counter: React.FC<CounterProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <span className="">
      {currentQuestion}/{totalQuestions}
    </span>
  );
};

export default Counter;

