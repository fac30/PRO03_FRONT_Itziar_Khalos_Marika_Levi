import React from "react"
import Navbar from "../components/NavBar";
import QuestionComponent from "../components/quiz/Question";
import Button from "../components/buttons/Button";

const QuizQuestionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar title="Quiz" />

      {/* Content */}
      <div className="w-full max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">How well do you know your cohort?</h1>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-md">
            1/15 {/* You can dynamically update the question number */}
          </span>
        </div>

        {/* Display all questions */}
        <div className="w-full">
          <QuestionComponent />
        </div>
        {/* <Button --> for submit but has to be linked to the quiz logic where Has to check how many answers are Correct for then gpo to the result page and provide the score */}
      </div>
    </div>
  );
};

export default QuizQuestionsPage;




