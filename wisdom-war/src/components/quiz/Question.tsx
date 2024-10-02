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
  // State to hold the list of questions fetched from questions.json
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // State to hold the list of answers fetched from answers.json
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  // State to hold the user's selected answers (mapped by questionId)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  // State to manage error messages in case of fetch failures
  const [error, setError] = useState<string | null>(null);

  // Function to fetch questions and answers from the JSON files
  const fetchQuestions = async () => {
    try {
      // Fetch the questions data
      const questionsResponse = await fetch('http://localhost:3000/questions');
      if (!questionsResponse.ok) throw new Error('Failed to fetch questions.');
      const questionsData = await questionsResponse.json();

      // Fetch the answers data
      const answersResponse = await fetch('http://localhost:3000/answers');
      if (!answersResponse.ok) throw new Error('Failed to fetch answers.');
      const answersData = await answersResponse.json();

      // Set the questions and answers in their respective state variables
      setQuestions(questionsData);
      setAnswers(answersData);

      // Stop the loading state once the data is fetched
      setLoading(false);
    } catch (error) {
      // Set an error message if fetching data fails
      setError('Failed to fetch questions or answers.');
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
