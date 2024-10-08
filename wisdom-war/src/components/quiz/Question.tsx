import React, { useState, useEffect } from "react";

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

interface QuestionComponentProps {
  setUserAnswers: (answers: { [key: number]: string }) => void; // Function to pass selected answers to parent
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ setUserAnswers }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsResponse = await fetch('http://localhost:3000/questions');
        if (!questionsResponse.ok) throw new Error('Failed to fetch questions.');
        const questionsData = await questionsResponse.json();

        const answersResponse = await fetch('http://localhost:3000/answers');
        if (!answersResponse.ok) throw new Error('Failed to fetch answers.');
        const answersData = await answersResponse.json();

        setQuestions(questionsData);
        setAnswers(answersData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch questions or answers.');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Function to filter answers for a specific question
  const getAnswersForQuestion = (questionId: number) => {
    return answers.filter(answer => answer.questionId === questionId);
  };

  // Handle user's answer selection and notify parent component
  const handleAnswerChange = (questionId: number, answer: string) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: answer };
    setSelectedAnswers(updatedAnswers);
    setUserAnswers(updatedAnswers); // Pass the selected answers to the parent component
  };

  return (
    <div className="p-4">
      {loading && <p className="text-gray-500 text-center">Loading questions...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
  
      {!loading && !error && questions.length > 0 && (
        <div>
          {questions.map((question, index) => (
            <div key={question.id} className="my-8 p-4 bg-white rounded-lg shadow-md">
              <h2 className="font-bold text-xl mb-4">Question {index + 1}</h2>
              <p className="text-gray-700 mb-6">{question.text}</p>
  
              <ul className="space-y-2">
                {getAnswersForQuestion(question.id).map((answer) => (
                  <li key={answer.id} className="ml-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={answer.text}
                        checked={selectedAnswers[question.id] === answer.text}
                        onChange={() => handleAnswerChange(question.id, answer.text)}
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
