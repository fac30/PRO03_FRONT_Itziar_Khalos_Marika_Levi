import React from "react";
import Navbar from "../components/NavBar";
import Categories from "../components/sections/Categories";

function ExplorePage() {
  return (
    <div className="explore">
      <Navbar title="Explore Quizzes" />
      <Categories />
    </div>
  );
}

export default ExplorePage;
