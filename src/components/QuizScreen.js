import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Firebase 인스턴스 가져오기
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import "../styles/QuizScreen.css";

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]); // Firebase에서 가져올 문제 데이터
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 문제 번호
  const [userAnswer, setUserAnswer] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0); // 경과 시간 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  // Firebase에서 문제 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const q = query(collection(db, "questions"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        const fetchedQuestions = querySnapshot.docs.map((doc) => doc.data());
        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, []);

  // 타이머 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Answer: ", userAnswer);

    // 다음 문제로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserAnswer(""); // 입력 필드 초기화
    } else {
      alert("모든 문제를 완료했습니다!");
    }
  };

  const handleSkip = () => {
    console.log("Skipped Question");

    // 다음 문제로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserAnswer(""); // 입력 필드 초기화
    } else {
      alert("모든 문제를 완료했습니다!");
    }
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-screen">
      {/* 헤더 */}
      <header className="header">
        <div className="logo">E-Card</div>
        <nav className="nav">
          <a href="#">About us</a>
          <a href="#">Test</a>
          <a href="#">Sign up</a>
          <button className="logout">Login</button>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 왼쪽 광고 배너 */}
        <aside className="left-banner">
          <img
            src="https://via.placeholder.com/150x400"
            alt="Ad Banner"
            className="banner-image"
          />
        </aside>

        {/* 문제 영역 */}
        <section className="question-area">
          {/* 문제 진행 상태 */}
          <div className="status-bar">
            <span>
              {questions.length}문제중 {currentQuestionIndex + 1}번째 문제 풀이중
            </span>
            <span className="timer">{formatTime(timeElapsed)}</span>
          </div>

          {/* 문제 텍스트 */}
          {currentQuestion ? (
            <>
              <div className="question-box">
                <p className="question">{currentQuestion.question}</p>
                <p className="hint">{currentQuestion.hint}</p>
              </div>

              {/* 입력 필드 */}
              <div className="input-area">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  placeholder="Type your answer"
                />
                <button className="hint-button">💡</button>
              </div>

              {/* 버튼 */}
              <div className="buttons">
                <button className="skip-button" onClick={handleSkip}>
                  건너뛰기
                </button>
                <button className="submit-button" onClick={handleSubmit}>
                  정답제출
                </button>
              </div>
            </>
          ) : (
            <div className="completion-message">
              <h2>모든 문제를 완료하셨습니다!</h2>
            </div>
          )}
        </section>
      </main>

      {/* 푸터 */}
      <footer className="footer">Footer Content (Optional)</footer>
    </div>
  );
};

export default QuizScreen;
