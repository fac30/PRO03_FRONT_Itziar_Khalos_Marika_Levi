import React from "react";
import Navbar from "../components/NavBar";
import Button from "../components/buttons/Button";


const ResultPage = () => {
 
    return (
        <div className="">
            <Navbar title="Result Quiz: Wow well do you know your cohort?" />
            {/* <p>Correct Answers: {goes the result quiz logic}</p>  */}
            <Button text="Play Again" path="/QuizQuestionsPage" />
            <Button text="Explore More Quizzes" path="/ExplorePage" />
        </div>
    );
};

export default ResultPage;