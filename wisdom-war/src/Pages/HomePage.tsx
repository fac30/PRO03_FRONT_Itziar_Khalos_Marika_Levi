import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
  