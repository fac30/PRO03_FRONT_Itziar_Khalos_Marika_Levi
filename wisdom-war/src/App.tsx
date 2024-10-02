import Navbar from "./components/NavBar";
import Categories from "./components/sections/Categories";

function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <Categories categoryName="FAC" />
    </>
  );
}

export default App;
