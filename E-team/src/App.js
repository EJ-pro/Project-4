import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import Levels from "./components/Levels";
import QuizScreen from "./components/QuizScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import QuizScreen_beginner from "./components/QuizScreen_beginner";
import QuizScreen_intermediate from "./components/QuizScreen_intermediate";
import QuizScreen_advanced from "./components/QuizScreen_advanced";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainWithStartButton />} />

          {/* 레벨 선택 페이지 */}
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

          {/* 레벨 선택 페이지 */}
          <Route path="/levels" element={<Levels />} />

          {/* 각 레벨별 퀴즈 페이지 */}
          <Route path="/quiz/beginner" element={<div><Header/> <QuizScreen_beginner /></div>} />
          <Route path="/quiz/intermediate" element={<div><Header/> <QuizScreen_intermediate /></div>} />
          <Route path="/quiz/advanced" element={<div><Header/> <QuizScreen_advanced /></div>} />
        </Routes>
      </div>
    </Router>
  );
};

const MainWithStartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/home");
  };

  return <Main handleStartClick={handleStartClick} />;
};

// QuizScreen에 level 전달
const QuizWithLevel = () => {
  const { level } = useParams(); // URL에서 level 가져오기
  return <QuizScreen level={level} />;
};

export default App;
