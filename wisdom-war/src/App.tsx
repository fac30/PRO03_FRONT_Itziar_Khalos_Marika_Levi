import Button from './components/buttons/Button';
import Navbar from "./components/NavBar";

function App() {
  // event handler for the butotn click
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <Button
      text="Click me!"
      className=''
      onClick={handleButtonClick}
      />
    </>
  );
}

export default App;


