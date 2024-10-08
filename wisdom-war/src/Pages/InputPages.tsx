import React, { useState } from "react";
import Navbar from "../components/NavBar";
import TextInput from "../components/inputs/TextInput";
import TextArea from "../components/inputs/TextArea";
import CategoryDropdown from "../components/inputs/CategoryDropdown";
import DifficultyDropdown from "../components/inputs/DifficultyDropdown";
import Button from "../components/buttons/Button";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const InputPages: React.FC = () => {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [difficulty, setDifficulty] = useState("Select Difficulty");
  const [questions, setQuestions] = useState<
    { question: string; correctAnswer: string; wrongAnswers: string[] }[]
  >([{ question: "", correctAnswer: "", wrongAnswers: ["", "", ""] }]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [apiError, setApiError] = useState("");

  // Error tracking states
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [difficultyError, setDifficultyError] = useState("");
  const [questionErrors, setQuestionErrors] = useState<string[]>([]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    if (field === "question") {
      updatedQuestions[index].question = value;
    } else if (field === "correctAnswer") {
      updatedQuestions[index].correctAnswer = value;
    } else {
      const wrongIndex = parseInt(field.split("_")[1]);
      updatedQuestions[index].wrongAnswers[wrongIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  const addMoreQuestions = () => {
    setQuestions([
      ...questions,
      { question: "", correctAnswer: "", wrongAnswers: ["", "", ""] },
    ]);
    setErrorMessage("");
  };

  const validateQuiz = () => {
    let isValid = true;
    setTitleError("");
    setDescriptionError("");
    setCategoryError("");
    setDifficultyError("");
    setQuestionErrors(Array(questions.length).fill("")); // Reset question errors

    // Validate Title
    if (!quizTitle) {
      setTitleError("Quiz title is required.");
      isValid = false;
    }

    // Validate Description
    if (!quizDescription) {
      setDescriptionError("Quiz description is required.");
      isValid = false;
    }

    // Validate Category
    if (category === "Select Category") {
      setCategoryError("Category must be selected.");
      isValid = false;
    }

    // Validate Difficulty
    if (difficulty === "Select Difficulty") {
      setDifficultyError("Difficulty must be selected.");
      isValid = false;
    }

    // Validate Questions
    if (questions.length < 5) {
      setErrorMessage("Please provide at least 5 questions.");
      isValid = false;
    } else {
      const questionSet = new Set<string>();
      const tempErrors = Array(questions.length).fill(""); // Error tracking for each question

      questions.forEach((q, index) => {
        if (!q.question) {
          tempErrors[index] = "Question cannot be empty.";
          isValid = false;
        } else if (questionSet.has(q.question)) {
          tempErrors[index] = "Questions must be unique."; // Mark error for this question
          isValid = false;
        } else {
          questionSet.add(q.question);
        }

        if (!q.correctAnswer) {
          tempErrors[index] = "Correct answer is required.";
          isValid = false;
        } else if (q.wrongAnswers.includes(q.correctAnswer)) {
          tempErrors[index] =
            "Correct answer must be different from wrong answers.";
          isValid = false;
        }

        // Ensure all wrong answers are filled
        q.wrongAnswers.forEach((wrongAnswer) => {
          if (!wrongAnswer) {
            tempErrors[index] = "All wrong answers must be provided.";
            isValid = false;
          }
        });

        // Ensure wrong answers are unique
        const wrongAnswerSet = new Set(q.wrongAnswers);
        if (wrongAnswerSet.size !== q.wrongAnswers.length) {
          tempErrors[index] = "Wrong answers must be unique.";
          isValid = false;
        }
      });

      setQuestionErrors(tempErrors);
    }

    return isValid;
  };

  function setIsLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
  }
  
  const handleSubmit = async () => {
    if (validateQuiz()) {
      setIsLoading(true); 
      setErrorMessage("");
  
      // Prepare quiz data with number of questions
      const quizData = {
        title: quizTitle,
        description: quizDescription,
        category,
        difficulty,
        numberOfQuestions: questions.length, 
      };
  
      try {
        // Post the quiz
        const quizResponse = await fetch("http://localhost:3000/quizzes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quizData),
        });
  
        if (!quizResponse.ok) {
          throw new Error("Failed to create quiz");
        }
  
        const quiz = await quizResponse.json(); // Contains the quizId
        const quizId = quiz.id; // Get the quizId from the created quiz
  
        // Post each question and its answers to the respective endpoints
        for (const q of questions) {
          // Prepare question data for /questions
          const questionData = {
            quizId, 
            text: q.question, 
            type: "multiple choice", 
            points: 1, 
          };
  
          // Post the question to /questions
          const questionResponse = await fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(questionData),
          });
  
          if (!questionResponse.ok) {
            throw new Error(`Failed to create question: ${q.question}`);
          }
  
          const question = await questionResponse.json();
          const questionId = question.id; // Get the generated questionId
  
          // Now, post the correct answer to /answers
          const correctAnswerData = {
            questionId, 
            text: q.correctAnswer, 
            isCorrect: true, 
          };
  
          const correctAnswerResponse = await fetch("http://localhost:3000/answers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(correctAnswerData),
          });
  
          if (!correctAnswerResponse.ok) {
            throw new Error(`Failed to create correct answer for question: ${q.question}`);
          }
  
          // Post the wrong answers to /answers
          for (const wrongAnswer of q.wrongAnswers) {
            const wrongAnswerData = {
              questionId, 
              text: wrongAnswer, 
              isCorrect: false, 
            };
  
            const wrongAnswerResponse = await fetch("http://localhost:3000/answers", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(wrongAnswerData),
            });
  
            if (!wrongAnswerResponse.ok) {
              throw new Error(`Failed to create wrong answer for question: ${q.question}`);
            }
          }
        }
  
        console.log("Quiz, questions, and answers created successfully");
        setShowModal(true); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Error creating quiz, questions, or answers:", error);
        setApiError("Failed to create quiz, questions, or answers. Please try again.");
        setIsLoading(false); 
      }
    }
  };
  
  

  const navigateHome = () => {
    navigate("/");
  };

  const navigateExplore = () => {
    navigate("/explore");
  };

  return (
    <div className="min-h-screen">
      <Navbar title="Make your quiz" />
      <div className="p-4">
        <TextInput
          placeholder="Enter quiz title"
          label="Name of the quiz"
          value={quizTitle}
          onChange={(value) => setQuizTitle(value)}
          className={titleError ? "text-red-500" : ""}
        />
        {titleError && <p className="text-red-500">{titleError}</p>}

        <TextArea
          placeholder="Enter a description here"
          label="Add a brief description"
          value={quizDescription}
          onChange={(value) => setQuizDescription(value)}
          className={descriptionError ? "text-red-500" : ""}
        />
        {descriptionError && <p className="text-red-500">{descriptionError}</p>}

        <CategoryDropdown
          onChange={(value) => {
            setCategory(value);
            setCategoryError(
              value === "Select Category" ? "Category must be selected." : ""
            );
          }}
          className={categoryError ? "text-red-500" : ""}
        />
        {categoryError && <p className="text-red-500">{categoryError}</p>}

        <DifficultyDropdown
          onChange={(value) => {
            setDifficulty(value);
            setDifficultyError(
              value === "Select Difficulty"
                ? "Difficulty must be selected."
                : ""
            );
          }}
          className={difficultyError ? "text-red-500" : ""}
        />
        {difficultyError && <p className="text-red-500">{difficultyError}</p>}

        <hr className="my-4" />

        <div className="mt-6">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              {/* Display the question error above the inputs */}
              {questionErrors[index] && (
                <p className="text-red-500">{questionErrors[index]}</p>
              )}

              <TextInput
                label={`Question ${index + 1}`}
                placeholder="Type the question here"
                value={q.question}
                onChange={(value) =>
                  handleInputChange(index, "question", value)
                }
                className={""}
              />

              <TextInput
                label="Correct Answer"
                placeholder="Type the correct answer here"
                value={q.correctAnswer}
                onChange={(value) =>
                  handleInputChange(index, "correctAnswer", value)
                }
                className={""}
              />

              {q.wrongAnswers.map((wrongAnswer, i) => (
                <TextInput
                  key={i}
                  label={`Wrong Answer ${i + 1}`}
                  placeholder="Type the wrong answer here"
                  value={wrongAnswer}
                  onChange={(value) =>
                    handleInputChange(index, `wrong_${i}`, value)
                  }
                  className={""}
                />
              ))}
              <hr className="my-4" />
            </div>
          ))}

          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}

          {/* New Error Message for scrolling back */}
          {titleError ||
          descriptionError ||
          categoryError ||
          difficultyError ||
          questionErrors.some((e) => e) ? (
            <p className="text-red-500 text-center mt-4">
              Please fix the errors above before submitting.
            </p>
          ) : null}

          <div className="flex justify-center mt-4 space-x-4">
            <Button text="Add more questions" onClick={addMoreQuestions} />
            <Button text="Submit Quiz" onClick={handleSubmit} />
          </div>
        </div>

        {showModal && (
          <Modal
            message="Thank you for creating your quiz!"
            onClose={() => setShowModal(false)}
            onHome={navigateHome}
            onExplore={navigateExplore}
          />
        )}
      </div>
    </div>
  );
};

export default InputPages;

