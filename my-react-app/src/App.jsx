import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Day4/Home";

function App() {
  const [tasks, setTasks] = useState([])



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element/>
      </Routes>
    </>
  );
}

export default App;
