# Wisdom War Quiz Application

This document provides an overview of the **Wisdom War Quiz Application**, its input components, and how to use the project. The application allows users to create and play quizzes, view results (with added meme fun). This project is currently a work in progress.

## What the Project Does

The Wisdom War Quiz Application offers users the ability to:
- **Create Quizzes**: Design your own quizzes by selecting categories, difficulty levels, and adding custom questions.
- **Explore Quizzes**: Browse through a diverse range of quizzes created by others.
- **Play Quizzes**: Take quizzes created by other users.
- **View Results**: After completing a quiz, view a summary of your results along with a meme fetched from the Giphy API, based on your score.

The project is built using **React**, **TypeScript**, and **Tailwind CSS** for a responsive and user-friendly experience.

## Key Features

- **Input Components**: 
  - Dropdowns for selecting quiz difficulty and category.
  - Text inputs for quiz title and questions.
  - Text area for quiz descriptions.
  
- **Quiz Creation**: 
  - Add custom questions with correct and wrong answer options.
  - Validate quiz details, ensuring all fields are properly filled.

- **Responsive Design**: 
  - Works across various device sizes, from mobile to desktop.

- **Result Page**: 
  - Displays the quiz score after completion.
  - Fetches and displays a fun meme from the Giphy API based on the score to add humor and excitement to the result viewing experience.

## Installation

To run the Wisdom War Quiz Application locally, follow these steps:

### Prerequisites

- Make sure the backend server is running locally. The frontend application relies on this for data.

### Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository using the following command:

    ```
    git clone https://github.com/fac30/PRO03_FRONT_Itziar_Khalos_Marika_Levi.git
    ```

3. Navigate into the project directory:

    ```
    cd pro03_front_itziar_khalos_marika_levi
    ```

### Install Dependencies

Install all necessary dependencies with:

```
npm install
```

### Running the Application

Start the development server:

```
npm start
```

Open your browser and go to:

```
http://localhost:5173
```

### Backend Integration

Ensure that the backend server is running on:

```
http://localhost:3000
```

This will enable the frontend to make API calls for quiz data, answer submissions, and result retrieval.

## Example Usage

1. **Create a Quiz**: 
   - Navigate to the "Create Quiz" page.
   - Enter a title, description, select a category, difficulty, and add your custom questions.
   
2. **Play a Quiz**: 
   - Choose a quiz from the "Explore Quizzes" section.
   - Complete the quiz and view your results.

3. **View Results**: 
   - After playing a quiz, you can view your score and enjoy a meme fetched from Giphy, based on your performance.

## Contributions

We welcome contributions! Whether it's fixing bugs, adding new features, or suggesting improvements, feel free to submit a pull request or open an issue.

### Steps to Contribute:

1. **Fork the repository**.
2. **Create a feature branch**:

    ```
    git checkout -b feature/YourFeatureName
    ```

3. **Commit your changes**:

    ```
    git commit -m "Add feature"
    ```

4. **Push your branch**:

    ```
    git push origin YourFeatureName
    ```

5. **Submit a pull request** for review.
```

