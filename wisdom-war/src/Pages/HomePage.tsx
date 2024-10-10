import React from "react";
import Button from "../components/buttons/Button";
import Logo from "../components/Logo";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <div className="flex space-x-4 mt-8">
        <Button text="Create a new quiz" path="/create"/>
        <Button text="Explore our quizzes" path="/explore" />
      </div>
    </div>
  );
};

export default HomePage;
