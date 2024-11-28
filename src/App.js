import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Levels from "./components/Levels";
import QuizScreen from "./components/QuizScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 항상 표시될 Header */}
        <Header />

        {/* 라우팅으로 변경될 메인 콘텐츠 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
                <div>
                <Hero />
                <Levels />
                <Footer />
                </div>} />
            <Route path="/quiz" element={<QuizScreen />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
