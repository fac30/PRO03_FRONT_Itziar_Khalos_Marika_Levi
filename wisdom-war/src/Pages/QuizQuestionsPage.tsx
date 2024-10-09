import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizQuestion } from "./types";
import QuestionComponent from "../components/quiz/Question";
import Button from "../components/buttons/Button";
import Navbar from "../components/NavBar"; 

const QuizQuestionsPage = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("Loading..."); 
  const [error, setError] = useState<string | null>(null);

  const { quizId } = useParams<{ quizId: string }>(); 

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const submitQuiz = async () => {
    try {
      const quizResults = await fetch("http://localhost:3000/results", {
        method: "POST",
        body: JSON.stringify({ quizId: quizId, results: selectedAnswers }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!quizResults.ok) {
        throw new Error("Failed to submit quiz results");
      }
  
      const resultData = await quizResults.json();
      console.log("Quiz submitted successfully:", resultData);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      setError("An error occurred while submitting the quiz. Please try again.");
    }
  };
  

  const handleAnswerChange = (questionId: number, answerId: string) => {
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
        if (!questionsResponse.ok) throw new Error("Failed to fetch questions.");
        const questionsData = await questionsResponse.json();
        setQuestions(questionsData);
      } catch (error) {
        setError("Failed to fetch questions or answers.");
      }
    };

    fetchQuestions(); 

    const storedQuizTitle = localStorage.getItem("quizTitle");
    if (storedQuizTitle) {
      setQuizTitle(storedQuizTitle);
    }
  }, [quizId]); 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar title={quizTitle} /> {/* Pass the quiz title to the Navbar */}

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
