import React from "react";
import Navbar from "../components/NavBar";
import Button from "../components/buttons/Button";

type ResultPageProps = {
  totalQuestions: number;
  score?: number;
};

function ResultPage(props: ResultPageProps) {
  return (
    <div>
      <h1>Your Quiz Results</h1>
      <p>
        Correct Answers: {props.score} out of {props.totalQuestions}
      </p>
    </div>
  );
}

export default ResultPage;
