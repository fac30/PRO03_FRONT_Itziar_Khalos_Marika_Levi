import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizQuestion } from "./types";
import QuestionComponent from "../components/quiz/Question";
import Button from "../components/buttons/Button";

const QuizQuestionsPage = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { quizId } = useParams();

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const submitQuiz = async () => {
    const quizResults = await fetch("http://localhost:3000/results", {
      method: "POST",
      body: JSON.stringify({ quizId: quizId, results: selectedAnswers }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsResponse = await fetch(
          `http://localhost:3000/questions?quizId=${quizId}`
        );
        if (!questionsResponse.ok)
          throw new Error("Failed to fetch questions.");
        const questionsData = await questionsResponse.json();

        setQuestions(questionsData);
      } catch (error) {
        setError("Failed to fetch questions or answers.");
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {questions.length > 0 ? (
        questions.map((question, i) => (
          <QuestionComponent
            key={question.id}
            question={question}
            index={i}
            totalQuestions={questions.length}
            onClick={handleAnswerChange}
          />
        ))
      ) : (
        <div>There are no questions</div>
      )}
      {questions.length > 0 && (
        <div className="flex justify-center mt-4 space-x-4">
          <Button text="Submit Answers" onClick={submitQuiz} path="/result"/>
        </div>
      )}
    </div>
  );
};

export default QuizQuestionsPage;
