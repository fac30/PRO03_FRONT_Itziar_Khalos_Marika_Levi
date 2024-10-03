import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import Categories from "./components/sections/Categories";
import DifficultyDropdown from "./components/inputs/DifficultyDropdown"; // Import the new component
import CategoryDropdown from "./components/inputs/CategoryDropdown";
import TextArea from "./components/inputs/TexArea";
import TextInput from "./components/inputs/TextInput";
import QuizQuestionsPage from "../src/landingPages/QuizQuestionsPage"; // import quiz landing page

function App() {
  // Handler for TextInput change
  const handleTextInputChange = (value: string) => {
    console.log("Text Input Value:", value);
  };

  // Handler for TextArea change
  const handleTextAreaChange = (value: string) => {
    console.log("Text Area Value:", value);
  };

  return (
    <>
      <Router>
        <Navbar title="Explore Quizzes" />
        <Categories />
        {/* Render different components based on routing or state */}
        {/* <Example: Sections/> */}{" "}
        <div className="p-8">
          <div className="mt-4">
            <Navbar title="Explore Quizzes" />
            <div className="p-8">
              <div className="mt-4">
                <TextInput
                  label="Enter a"
                  placeholder="Enter a title here"
                  onChange={handleTextInputChange}
                />
                <TextArea
                  label="Add a brief description"
                  placeholder="Enter a description here"
                  onChange={handleTextAreaChange}
                />
              </div>
            </div>
            <CategoryDropdown />
            {/* Render the DifficultyDropdown component */}
            <DifficultyDropdown />
          </div>
        </div>
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<HomePage />} />

          {/* Quiz Page Route */}
          <Route path="/quiz" element={<QuizQuestionsPage />} />
        </Routes>
      </Router>
    </>
  );
}

// Define HomePage component
const HomePage = () => (
  <div className="p-8">
    <h1>Welcome to Wisdom War!</h1>
    <div className="mt-4">
      <Link to="/quiz" className="text-blue-500">
        Start Quiz
      </Link>
    </div>
  </div>
);

export default App;
