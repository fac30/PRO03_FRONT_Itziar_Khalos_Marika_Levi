import React from "react"
import Button from "../components/buttons/Button"
import { useNavigate } from "react-router-dom";


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToExplore = () => {
    navigate('/explore')
  }
  
  const goToInput = () => {
    navigate("./InputPages")
  }
  return (
    <div className="logo p-8">
      <h1>Wisdom War!</h1>
      <Button 
        type ="button"
        onClick={goToInput} 
        buttonName="Create new quiz"
        text="Create new quiz">
      </Button>
      <Button onClick={goToExplore} buttonName="Explore quizzes" text="Explore quizzes"></Button>
    </div>
  );
}
  export default HomePage;