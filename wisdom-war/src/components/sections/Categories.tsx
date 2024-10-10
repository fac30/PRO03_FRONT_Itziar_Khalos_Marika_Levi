import React from "react";
import { useState, useEffect } from "react";
import Card from "./Cards";

type Quiz = {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
};

function Categories() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/quizzes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quizzes");
        }
        return response.json();
      })
      .then((data) => {
        setQuizzes(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const listOfQuizzes: Record<string, Quiz[]> = quizzes.reduce(
    (acc: Record<string, Quiz[]>, quiz) => {
      if (!acc[quiz.category]) {
        acc[quiz.category] = [];
      }
      acc[quiz.category].push(quiz);
      return acc;
    },
    {}
  );

  if (error) return <p>{error}</p>;

  return (
    <>
      {Object.keys(listOfQuizzes).map((category: string) => (
        <div key={category} className="categories px-8">
          <h2 className="quizCategory p-4 text-2xl">{category}</h2>
          <div className="quiz-cards">
            {listOfQuizzes[category].map((quiz) => (
              <Card
                key={quiz.id}
                quizId={quiz.id}
                quizName={quiz.name}
                description={quiz.description}
                level={quiz.difficulty}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Categories;
