# PRO03_FRONT_Itziar_Khalos_Marika_Levi


## Wisdom War Input Components
This document provides an overview of the input components developed for the Wisdom War quiz application. These components are designed to enhance the user experience by allowing for intuitive input handling in the quiz creation process.

### Overview
The application includes four key input components:

- DifficultyDropdown: A dropdown menu for selecting the difficulty level of the quiz.
- CategoryDropdown: A dropdown menu for selecting the quiz category.
- TextInput: A text input component for capturing short text entries.
- TextArea: A text area component for entering longer descriptions.
- Each component is built using React, TypeScript, and Tailwind CSS for styling.

1. DifficultyDropdown
#### Component: DifficultyDropdown.tsx
- Description: This dropdown allows users to select a difficulty level for the quiz.
- Options: Easy, Medium, Hard.
- Placeholder: Displays "Select Difficulty" before any selection is made.
- Selected Item: Once an option is selected, the text color changes to black to improve contrast against the light background.
- Responsive: The component adjusts to take the full width on mobile devices and centers on larger screens.

Usage Example:
```tsx
import DifficultyDropdown from './components/DifficultyDropdown';

const App = () => {
  return (
    <div>
      <DifficultyDropdown />
    </div>
  );
};
```
2. CategoryDropdown
#### Component: CategoryDropdown.tsx
- Description: This dropdown allows users to select the category of the quiz.
- Options: FAC, Music, Movies, Art.
- Placeholder: Displays "Select Category" before any selection is made.
- Selected Item: Changes to black font color once an option is selected.
- Responsive: Similar layout as the DifficultyDropdown, ensuring usability across devices.

Usage Example:
```tsx
import CategoryDropdown from './components/CategoryDropdown';

const App = () => {
  return (
    <div>
      <CategoryDropdown />
    </div>
  );
};
```

3. TextInput
#### Component: TextInput.tsx
- Description: A versatile text input component that can be reused for various purposes in the application.
- Label: The label is passed as a prop, allowing customization based on its usage context.
- Placeholder: The placeholder text is also passed as a prop for dynamic content.
- Text Color: Changes to black once the user starts typing, improving readability.
- Sanitization: Input is sanitized to prevent malicious content, specifically to filter out < symbols.

Usage Example:
```tsx
import TextInput from './components/TextInput';

const App = () => {
  return (
    <div>
      <TextInput label="Quiz Title" placeholder="Enter quiz title" />
    </div>
  );
};
```
4. TextArea
#### Component: TextArea.tsx
- Description: A text area component designed for entering longer descriptions or content.
- Label: Similar to TextInput, the label is passed as a prop.
- Placeholder: The placeholder can be customized based on context.
- Text Color: Text changes to black once the user begins typing.
- Sanitization: Prevents malicious inputs, specifically filtering out < symbols.

Usage Example:
```tsx
import TextArea from './components/TextArea';

const App = () => {
  return (
    <div>
      <TextArea label="Add a brief description" placeholder="Enter a description here" />
    </div>
  );
};
```
#### Styling
All components utilize Tailwind CSS for styling, ensuring a responsive and consistent design throughout the application. The default styles are defined in index.css, which includes global styles and variables.

#### Conclusion
These input components are designed to be reusable, responsive, and user-friendly, providing a solid foundation for the quiz creation process in the Wisdom War application. Feel free to customize and extend these components as needed for your project.

# InputPages.tsx Component

The `InputPages.tsx` component is designed for creating quizzes by allowing users to input various details, including the quiz title, description, category, difficulty, and questions with answers. This document outlines the features and functionalities available in the component.

## Features

### 1. **Quiz Title Input**
   - A text input field where users can enter the title of the quiz.
   - Validates that the title is not empty.
   - Displays an error message in red if the title is missing.

### 2. **Quiz Description Input**
   - A text area for entering a brief description of the quiz.
   - Validates that the description is not empty.
   - Displays an error message in red if the description is missing.

### 3. **Category Dropdown**
   - A dropdown menu for selecting the quiz category.
   - Validates that a category is selected.
   - Displays an error message in red if no category is selected.

### 4. **Difficulty Dropdown**
   - A dropdown menu for selecting the quiz difficulty level.
   - Validates that a difficulty level is selected.
   - Displays an error message in red if no difficulty is selected.

### 5. **Questions and Answers Section**
   - Users can add a minimum of 5 questions.
   - Each question includes:
     - A text input for the question itself.
     - A text input for the correct answer.
     - Three text inputs for wrong answers.
   - Validates that:
     - Each question must not be empty.
     - All questions must be unique.
     - The correct answer must be different from the wrong answers.
     - All wrong answers must be filled and unique.
   - Displays specific error messages above each question block if validation fails.

### 6. **Error Messages**
   - Error messages are displayed in red next to the fields that have issues.
   - A summary error message appears above the submit buttons if any validation errors exist, prompting the user to fix the errors.

### 7. **Buttons**
   - **Add More Questions**: Allows users to add additional question blocks dynamically.
   - **Submit Quiz**: Validates the quiz inputs and displays a modal if the validation passes.
   - **Navigation Buttons in Modal**:
     - **Back to Home**: Navigates to the homepage.
     - **Explore Quizzes**: Navigates to the explore quizzes page.

### 8. **Modal**
   - Displays a thank-you message upon successful quiz creation.
   - Contains navigation options to return to the homepage or explore quizzes.

## Code Overview

Here is the code for the `InputPages.tsx` component:

```tsx
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import TextInput from '../components/inputs/TextInput';
import TextArea from '../components/inputs/TextArea';
import CategoryDropdown from '../components/inputs/CategoryDropdown';
import DifficultyDropdown from '../components/inputs/DifficultyDropdown';
import Button from '../components/buttons/Button';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const InputPages: React.FC = () => {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [category, setCategory] = useState('Select Category');
  const [difficulty, setDifficulty] = useState('Select Difficulty');
  const [questions, setQuestions] = useState<{ question: string; correctAnswer: string; wrongAnswers: string[] }[]>([
    { question: '', correctAnswer: '', wrongAnswers: ['', '', ''] },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Error tracking states
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [difficultyError, setDifficultyError] = useState('');
  const [questionErrors, setQuestionErrors] = useState<string[]>([]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = value;
    } else if (field === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = value;
    } else {
      const wrongIndex = parseInt(field.split('_')[1]);
      updatedQuestions[index].wrongAnswers[wrongIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  const addMoreQuestions = () => {
    setQuestions([...questions, { question: '', correctAnswer: '', wrongAnswers: ['', '', ''] }]);
    setErrorMessage('');
  };

  const validateQuiz = () => {
    let isValid = true;
    setTitleError('');
    setDescriptionError('');
    setCategoryError('');
    setDifficultyError('');
    setQuestionErrors(Array(questions.length).fill('')); // Reset question errors

    // Validate Title
    if (!quizTitle) {
      setTitleError('Quiz title is required.');
      isValid = false;
    }

    // Validate Description
    if (!quizDescription) {
      setDescriptionError('Quiz description is required.');
      isValid = false;
    }

    // Validate Category
    if (category === 'Select Category') {
      setCategoryError('Category must be selected.');
      isValid = false;
    }

    // Validate Difficulty
    if (difficulty === 'Select Difficulty') {
      setDifficultyError('Difficulty must be selected.');
      isValid = false;
    }

    // Validate Questions
    if (questions.length < 5) {
      setErrorMessage('Please provide at least 5 questions.');
      isValid = false;
    } else {
      const questionSet = new Set<string>();
      const tempErrors = Array(questions.length).fill(''); // Error tracking for each question

      questions.forEach((q, index) => {
        if (!q.question) {
          tempErrors[index] = 'Question cannot be empty.';
          isValid = false;
        } else if (questionSet.has(q.question)) {
          tempErrors[index] = 'Questions must be unique.'; // Mark error for this question
          isValid = false;
        } else {
          questionSet.add(q.question);
        }

        if (!q.correctAnswer) {
          tempErrors[index] = 'Correct answer is required.';
          isValid = false;
        } else if (q.wrongAnswers.includes(q.correctAnswer)) {
          tempErrors[index] = 'Correct answer must be different from wrong answers.';
          isValid = false;
        }

        // Ensure all wrong answers are filled
        q.wrongAnswers.forEach((wrongAnswer, wrongIndex) => {
          if (!wrongAnswer) {
            tempErrors[index] = 'All wrong answers must be provided.';
            isValid = false;
          }
        });

        // Ensure wrong answers are unique
        const wrongAnswerSet = new Set(q.wrongAnswers);
        if (wrongAnswerSet.size !== q.wrongAnswers.length) {
          tempErrors[index] = 'Wrong answers must be unique.';
          isValid = false;
        }
      });

      setQuestionErrors(tempErrors);
    }

    return isValid; 
  };

  const handleSubmit = () => {
    if (validateQuiz()) {
      setShowModal(true);
      setErrorMessage('');
    }
  };

  const navigateHome = () => {
    navigate('/'); 
  };

  const navigateExplore = () => {
    navigate('/explore'); 
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
            setCategoryError(value === 'Select Category' ? 'Category must be selected.' : '');
          }} 
          className={categoryError ? "text-red-500" : ""}
        />
        {categoryError && <p className="text-red-500">{categoryError}</p>}

        <DifficultyDropdown 
          onChange={(value) => {
            setDifficulty(value);
            setDifficultyError(value === 'Select Difficulty' ? 'Difficulty must be selected.' : '');
          }} 
          className={difficultyError ? "text-red-500" : ""}
        />
        {difficultyError && <p className="text-red-500">{difficultyError}</p>}

        <hr className="my-4" />

        <div className="mt-6">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              {/* Display the question input */}
              <TextInput
                label={`Question ${index + 1}`}
                placeholder="Type the question here"
                value={q.question}
                onChange={(value) => handleInputChange(index, 'question', value)} 
                className={questionErrors[index] ? "text-red-500" : ""}
              />
              {questionErrors[index] && <p className="text-red-500">{questionErrors[index]}</p>}

              {/* Display correct answer input */}
              <TextInput
                label="Correct Answer"
                placeholder="Type the correct answer here"
                value={q.correctAnswer}
                onChange={(value) => handleInputChange(index, 'correctAnswer', value)} 
                className={questionErrors[index] ? "text-red-500" : ""}
              />
              {questionErrors[index] && <p className="text-red-500">{questionErrors[index]}</p>}

              {/* Display wrong answers inputs */}
              {q.wrongAnswers.map((wrongAnswer, i) => (
                <TextInput
                  key={i}
                  label={`Wrong Answer ${i + 1}`}
                  placeholder="Type the wrong answer here"
                  value={wrongAnswer}
                  onChange={(value) => handleInputChange(index, `wrong_${i}`, value)} 
                  className={questionErrors[index] ? "text-red-500" : ""}
                />
              ))}
              {questionErrors[index] && <p className="text-red-500">{questionErrors[index]}</p>}
              <hr className="my-4" />
            </div>
          ))}

          {/* Summary error message */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">
              {errorMessage} Please check the errors above.
            </div>
          )}

          {/* Button row for "Add More Questions" and "Submit Quiz" */}
          <div className="flex justify-center mt-4 space-x-4">
            <Button text="Add more questions" onClick={addMoreQuestions} />
            <Button text="Submit Quiz" onClick={handleSubmit} />
          </div>
        </div>

        {/* Modal for success message */}
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
```