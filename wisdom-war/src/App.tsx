import Navbar from "./components/NavBar";
import DifficultyDropdown from "./components/inputs/DifficultyDropdown"; // Import the new component


function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <div className="p-8">
        <p>Difficulty Level</p>
        {/* Render the DifficultyDropdown component */}
        <DifficultyDropdown />
      </div>
    </>
  );
}

export default App;
