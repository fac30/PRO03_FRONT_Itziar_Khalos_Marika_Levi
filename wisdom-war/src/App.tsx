import Navbar from "./components/NavBar";
import Card from "./components/sections/Cards"

function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <Card
        quizName="How well do you know your cohort?"
        description="Let's see who knows FAC30 better than anyone"
        level="Easy"
      />
    </>
  );
}

export default App;
