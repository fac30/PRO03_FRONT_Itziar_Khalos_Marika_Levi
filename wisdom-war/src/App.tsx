import Navbar from './components/NavBar';
import QuestionComponent from './components/quiz/Question'; 

function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />

      <div className="quiz-container">
        <QuestionComponent />
      </div>
    </>
  );
}

export default App;
