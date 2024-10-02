import Navbar from "./components/NavBar";
import DifficultyDropdown from "./components/inputs/DifficultyDropdown"; // Import the new component
import CategoryDropdown from "./components/inputs/categoryDropdown";
import DescriptionTextarea from "./components/inputs/TexArea";



function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <div>
      <div className="p-8">
      <div className="mt-4">
        <CategoryDropdown />
          {/* Render the DifficultyDropdown component */}
          <DifficultyDropdown />
          <DescriptionTextarea />
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
