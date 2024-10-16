import React from "react";
import { QuizQuestion } from "../../Pages/types";

interface QuizAnswer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  className?: string;
}

interface Quiz {
  id: number;
  name: string;
}

interface QuestionProps {
  question: QuizQuestion;
  index: number;
  totalQuestions: number;
  onClick: (q: number, a: number) => void;
}

const QuestionComponent = (props: QuestionProps) => {
  const { question, index, totalQuestions, onClick } = props;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl mb-4">{question.text}</h2>
        <span className="bg-gray-200 text-sm px-4 py-2 rounded-md">
          {index + 1}/{totalQuestions}
        </span>
      </div>
      <ul className="space-y-2">
        {question.answers?.map((answer) => (
          <li key={answer.id} className="ml-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={answer.text}
                onChange={() => onClick(question.id, answer.id)}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="text-gray-800">{answer.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
