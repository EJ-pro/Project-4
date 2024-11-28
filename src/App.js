import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizScreen_beginner from "./components/QuizScreen_beginner";
import QuizScreen_intermediate from "./components/QuizScreen_intermediate";
import QuizScreen_advanced from "./components/QuizScreen_advanced";
import Levels from "./components/Levels";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Levels />} />
        <Route path="/quiz/beginner" element={<QuizScreen_beginner />} />
        <Route path="/quiz/intermediate" element={<QuizScreen_intermediate />} />
        <Route path="/quiz/advanced" element={<QuizScreen_advanced />} />
      </Routes>
    </Router>
  );
};

export default App;
