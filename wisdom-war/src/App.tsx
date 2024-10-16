import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import QuizQuestionsPage from "./Pages/QuizQuestionsPage";
import InputPages from "./Pages/InputPages";
import ResultPage from "./Pages/ResultPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<InputPages />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/quiz/:quizId" element={<QuizQuestionsPage />} />
        <Route path="/results/:id" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
