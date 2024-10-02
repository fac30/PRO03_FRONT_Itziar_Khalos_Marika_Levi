import { useState, useEffect } from "react";

// Define the question object interface (renamed to avoid conflict)
interface QuizQuestion {
  questionText: string;
  answers: string[];
  className?: string;
}

interface QuizAnswer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
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

  // JSX to render the quiz component
  return (
    <div>
      {/* Show a loading message if data is still being fetched */}
      {loading && <p>Loading questions...</p>}

      {/* Show an error message if there was a problem fetching the data */}
      {error && <p>{error}</p>}

      {/* Render the questions only if data is successfully fetched and there are questions */}
      {!loading && !error && questions.length > 0 && (
        <div>
          {/* Map through the list of questions and render each one */}
          {questions.map((question) => (
            <div
              key={question.id}
              className={question.className || ''} // Apply custom className 
            >
              <h2>Question {question.id}</h2>
              <p>{question.text}</p>

              {/* Render the list of answers for the current question */}
              <ul>
                {getAnswersForQuestion(question.id).map((answer) => (
                  <li key={answer.id}>
                    <label>
                      {/* Radio input to allow the user to select an answer */}
                      <input
                        type="radio"
                        name={`question-${question.id}`} // Group radio buttons by question
                        value={answer.text}
                        checked={selectedAnswers[question.id] === answer.text} // Mark the selected answer
                        onChange={() => handleAnswerChange(question.id, answer.text)} // Handle selection change
                      />
                      {answer.text} {/* Display the answer text */}
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
