# PRO03_FRONT_Itziar_Khalos_Marika_Levi


## Wisdom War Input Components
This document provides an overview of the input components developed for the Wisdom War quiz application. These components are designed to enhance the user experience by allowing for intuitive input handling in the quiz creation process. This project is currently a work in progress, with several exciting features already in development!

## Features
The application provides the following functionalities:

- Create your own Quiz
- Explore Quizzes: Browse and explore a wide range of quizzes created by other users.
- Play quizzes creates  by other users.
- View Results: At the end of each quiz, users can view an overall results.



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


## Installation

To run the application locally, follow these steps:

### Prerequisites
Ensure the backend server is running locally. The frontend will connect to the backend for data.

### Clone the Repository
1. Open your terminal or command prompt.
2. Clone the repository:

    ```
    git clone https://github.com/fac30/PRO03_FRONT_Itziar_Khalos_Marika_Levi.git
    ```

3. Navigate into the project directory:

    ```
    cd pro03_front_itziar_khalos_marika_levi
    ```

### Install Dependencies
Install all the necessary dependencies:

```
npm install
```

### Running the Application
Start the development server:

```
npm start
```

Once the server is running, open your web browser and navigate to:

```
http://localhost:5173
```

### Backend Integration
To connect the frontend with the backend, ensure the backend server is running on:

```
http://localhost:3000
```

This will allow the frontend to make the necessary API calls to retrieve quiz data, submit answers, and display results.
```
## Contributions
Contributions are welcome! If you would like to help improve this project, feel free to submit a pull request or open an issue for discussion. Whether it’s bug fixes, new features, or suggestions, your input is greatly appreciated.

### Steps to Contribute

1. Fork the repository.
2. Create your feature branch:
```
git checkout -b feature/YourFeatureName
```
3. Commit your changes:
```
git commit -m "Add some feature"
```
4. Push the branch:
```
 git push origin YourFeatureName
```
5. Open a pull request.