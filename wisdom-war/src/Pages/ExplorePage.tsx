import React from "react"
import Navbar from "../components/NavBar";
import Categories from "../components/sections/Categories";
import { useNavigate } from "react-router-dom";

const ExplorePage: React.FC = () => { 
    const navigate = useNavigate();

    const goToQuiz = () => {
        navigate('./QuizQuestionPage')
      }
    return (
        <div className="explore">
        <Navbar title="Explore Quizzes" />
            <Categories />
        </div>
      );
};

export default ExplorePage;