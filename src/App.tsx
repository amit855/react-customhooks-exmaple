import { useState, useEffect } from "react";
import './App.css'
import Todo from './components/todo/todo.tsx';
import Timer from './components/timer/timer.tsx';
import CustomHookCounter from './components/customHookCounter/customHookCounter.tsx';

function App() {

  return (
    <>
      <Todo />
      <Timer />
      <CustomHookCounter />
    </>
  );
}

export default App;
