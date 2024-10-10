import React from "react";
import Button from "../components/buttons/Button";
import Logo from "../components/Logo";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <Logo />
      <p className="text-lg text-gray-600 mt-2 mb-8">Test your knowledge with fun quizzes.</p>
      <div className="flex space-x-4 mt-4">
        <Button text="Create a new quiz" path="/create" />
        <Button text="Explore our quizzes" path="/explore" />
      </div>
    </div>
  );
};

export default HomePage;
