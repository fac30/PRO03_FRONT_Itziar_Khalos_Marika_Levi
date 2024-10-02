import { useState, useEffect } from "react";

// Define the question object interface (renamed to avoid conflict)
interface QuizQuestion {
  id: number;
  quizId: number;
  text: string;
  type: string;
  points: number;
  className?: string; // Optional className for custom styles
}

interface QuizAnswer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  className?: string; 
}

interface QuestionComponentProps {
  currentQuestion: number; // Adding the props expected from QuizPage
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ currentQuestion }) => {
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

  // Fetch questions and answers when the component is mounted
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

  // Handle user's answer selection
  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <div>
      {loading && <p>Loading questions...</p>}
      {error && <p>{error}</p>}

      {/* Render all questions */}
      {!loading && !error && questions.length > 0 && (
        <div>
          {questions.map((question, index) => (
            <div key={question.id} className="my-6">
              <h2 className="font-bold text-lg">Question {index + 1}</h2>
              <p>{question.text}</p>

              {/* Render answers for each question */}
              <ul>
                {getAnswersForQuestion(question.id).map((answer) => (
                  <li key={answer.id}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={answer.text}
                        checked={selectedAnswers[question.id] === answer.text}
                        onChange={() => handleAnswerChange(question.id, answer.text)}
                      />
                      {answer.text}
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
