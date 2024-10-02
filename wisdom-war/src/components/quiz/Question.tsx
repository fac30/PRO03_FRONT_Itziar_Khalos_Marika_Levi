import { useState, useEffect } from "react";

// Define the question object interface (renamed to avoid conflict)
interface QuizQuestion {
  questionText: string;
  answers: string[];
  className?: string;
}

const QuestionComponent = () => {
  // Hold the fetched questions
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Define state to track the current question and selected answer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Handle user's answer selection
const handleAnswerChange = (answer: string) => {
  setSelectedAnswer(answer);
};

  // State for loading and handling errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch questions from the service
  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/questions`);

      if (!response.ok) {
        throw new Error('Failed to fetch questions.');
      }

      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching questions", error);
      setError('Failed to fetch questions.');
      setLoading(false);
    }
  };

  // useEffect to fetch questions from the JSON file
  useEffect(() => {
    fetchQuestions();
  }, []); // Empty dependency array ensures this only runs once

  // JSX that renders the component
return (
  <div>
    {/* Display a loading message if the data is still being fetched */}
    {loading && <p>Loading questions...</p>}

    {/* Display an error message if there was an error */}
    {error && <p>{error}</p>}

    {/* Only show questions if there are no errors and data is loaded */}
    {!loading && !error && questions.length > 0 && (
      <div>
        <h2>Question 1</h2>
        <p>{questions[0].questionText}</p>
        <ul>
          {questions[0].answers.map((answer) => (
            <li key={answer}>
              <label>
                <input
                  type="radio"
                  name="question"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswerChange(answer)}
                />
                {answer}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};


export default QuestionComponent;
