import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
// import ExplorePage from './pages/ExplorePage';
import InputPages from './Pages/InputPages';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<InputPages />} />  {/* Route for quiz creation */}
      </Routes>
    </Router>
  );
};

export default App;

// to be added once ExplorePage actually works: <Route path="/explore" element={<ExplorePage />} />