import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import ExplorePage from "./pages/ExplorePage";
import InputPages from "./Pages/InputPages";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<InputPages />} />
      </Routes>
    </Router>
  );
};

export default App;

// <Route path="/explore" element={<ExplorePage />} />
