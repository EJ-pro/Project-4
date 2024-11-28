import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import Levels from "./components/Levels";
import QuizScreen from "./components/QuizScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Main 페이지 */}
          <Route
            path="/"
            element={<MainWithStartButton />}
          />

          {/* Hero와 Levels 페이지 */}
          <Route
            path="/home"
            element={
              <div>
                <Header />
                <Hero />
                <Levels />
                <Footer />
              </div>
            }
          />

          {/* Quiz 페이지 */}
          <Route
            path="/quiz"
            element={
              <div>
                <Header />
                <QuizScreen />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

// Main 페이지와 버튼 핸들러를 포함한 컴포넌트
const MainWithStartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/home"); // Hero와 Levels로 이동
  };

  return <Main handleStartClick={handleStartClick} />;
};

export default App;
