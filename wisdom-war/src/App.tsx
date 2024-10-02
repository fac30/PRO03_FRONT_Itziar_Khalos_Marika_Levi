import Navbar from "./components/NavBar";
import Categories from "./components/sections/Categories";

function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      <Navbar title="Explore Quizzes" />
      <Categories categoryName="FAC" />
      {/* Render different components based on routing or state */}
      {/* <Example: Sections/> */}
    </>
  );
}

export default App;
