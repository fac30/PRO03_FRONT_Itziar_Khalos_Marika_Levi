import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button1 from './components/buttons/Button1';
import Button2 from './components/buttons/Button2';
import Button3 from './components/buttons/Buttons3';

function App() {
  return (
    <>
      <h1>Welcome to Wisdom War!</h1>
      {/* Render buttons */}
      <Button1 />
      <Button2 />
      <Button3 />
    </>
  );
}

export default App;


