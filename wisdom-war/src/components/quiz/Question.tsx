import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";

interface QuizQuestion {
  id: number;
  quizId: number;
  text: string;
  type: string;
  points: number;
  className?: string;
}
interface QuizAnswer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  className?: string;
}

type Quiz = {
  id: number;
  name: string;
};

const QuestionComponent = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsResponse = await fetch(
          "http://localhost:3000/questions"
        );
        if (!questionsResponse.ok)
          throw new Error("Failed to fetch questions.");
        const questionsData = await questionsResponse.json();

        const answersResponse = await fetch("http://localhost:3000/answers");
        if (!answersResponse.ok) throw new Error("Failed to fetch answers.");
        const answersData = await answersResponse.json();

        const quizzesResponse = await fetch("http://localhost:3000/quizzes");
        if (!quizzesResponse.ok) throw new Error("Failed to fetch quizzes.");
        const quizzesData = await quizzesResponse.json();

        setQuestions(questionsData);
        setAnswers(answersData);
        setQuizzes(quizzesData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch questions or answers.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const getQuizTitle = (id: number, quizName: string) => {
    return quizzes.filter((name) => quizzes.id === id);
  };
  // This is not working - needs fixing

  const getAnswersForQuestion = (questionId: number) => {
    return answers.filter((answer) => answer.questionId === questionId);
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <div className="p-4">
      {loading && (
        <p className="text-gray-500 text-center">Loading questions...</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && questions.length > 0 && (
        <div>
          <Navbar
            title={
              quizzes.length > 0 ? quizzes[quizId].name : "No Quiz Available"
            }
          />
          {/* I need to get the quiz title dynamically from the json file */}

          {questions.map((question, index) => (
            <div
              key={question.id}
              className="my-8 p-4 bg-white rounded-lg shadow-md"
            >
              {/* Question title */}
              <h2 className="font-bold text-xl mb-4">Question {index + 1}</h2>
              <p className="text-gray-700 mb-6">{question.text}</p>

              {/* Render answers for each question */}
              <ul className="space-y-2">
                {getAnswersForQuestion(question.id).map((answer) => (
                  <li key={answer.id} className="ml-4">
                    <label className="flex items-center space-x-3">
                      {/* Radio button */}
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={answer.text}
                        checked={selectedAnswers[question.id] === answer.text}
                        onChange={() =>
                          handleAnswerChange(question.id, answer.text)
                        }
                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <span className="text-gray-800">{answer.text}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
