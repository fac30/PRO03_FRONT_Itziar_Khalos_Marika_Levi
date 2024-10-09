import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import QuizQuestionsPage from "./Pages/QuizQuestionsPage";
import InputPages from "./Pages/InputPages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<InputPages />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/quiz/:quizId" element={<QuizQuestionsPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// to be added once ExplorePage actually works: <Route path="/explore" element={<ExplorePage />} />
