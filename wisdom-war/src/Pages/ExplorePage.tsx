import React from "react"
import Navbar from "../components/NavBar";
import Button from "../components/buttons/Button";
import Categories from "../components/sections/Categories";
import { useNavigate } from "react-router-dom";

// const ExplorePage: React.FC = () => { 
//    

const ExplorePage = () => {
    const navigate = useNavigate();
    return (
        <div className="explore">
        <Navbar title="Explore Quizzes" />
            <Categories />
            <Button text="Play" path="/QuizQuestionsPage" />
        </div>
      );
};

export default ExplorePage;