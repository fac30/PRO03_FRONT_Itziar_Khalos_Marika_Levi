import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import DifficultyDropdown from "./components/inputs/DifficultyDropdown"; // Import the new component
import CategoryDropdown from "./components/inputs/CategoryDropdown";
import TextArea from "./components/inputs/TexArea";
import TextInput from "./components/inputs/TextInput";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage"
import QuizQuestionsPage from "./Pages/QuizQuestionsPage";
// import InputPages from "./Pages/InputPages";

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
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/explore" element={<ExplorePage />} />

          <Route path="/quiz" element={<QuizQuestionsPage />} />

          {/* <Route path="/input" element={<InputPages />} /> */}
        </Routes>
      </Router>
      
        {/* Render different components based on routing or state */}
        {/* <Example: Sections/> */}{" "}
        <div className="p-8">
          <div className="mt-4">
            <Navbar title="Create your own quiz" />
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
    </>
  );
}

export default App;