// import Button from './components/buttons/Button';
import Navbar from "./components/NavBar";
import DifficultyDropdown from "./components/inputs/DifficultyDropdown"; // Import the new component
import CategoryDropdown from "./components/inputs/CategoryDropdown";
import TextArea from "./components/inputs/TexArea";
import TextInput from "./components/inputs/TextInput";
import Logo from "./components/Logo";



function App() {
  // Handler for TextInput change
  const handleTextInputChange = (value: string) => {
    console.log("Text Input Value:", value);
  };

  // Handler for TextArea change
  const handleTextAreaChange = (value: string) => {
    console.log("Text Area Value:", value);
  };
  
  // event handler for the butotn click
  // const handleButtonClick = () => {
  //   alert('Button clicked!');
  // };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
      <Logo />
    </div>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <div>
      <div className="p-8">
      <div className="mt-4">
      <TextInput
        label="Enter a "
        placeholder="Enter a title here"
        onChange={handleTextInputChange}
      />
          <TextArea
        label="Add a brief description"
        placeholder="Enter a description here"
        onChange={handleTextAreaChange}
        />
      </div>
        <CategoryDropdown />
          {/* Render the DifficultyDropdown component */}
          <DifficultyDropdown />
       
      </div>
      </div>
    </>
  );
}

export default App;


