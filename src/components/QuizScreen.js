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
  const [feedback, setFeedback] = useState(""); // 정답/오답 피드백
  const [showAnswer, setShowAnswer] = useState(false); // 정답 표시 여부

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
    const currentQuestion = questions[currentQuestionIndex];

    // 정답 체크
    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback("정답입니다!");
      console.log("Correct Answer!");

      // 다음 문제로 이동
      if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setFeedback("");
          setShowAnswer(false); // 정답 힌트 초기화
          setUserAnswer(""); // 입력 필드 초기화
        }, 1000); // 1초 후 이동
      } else {
        alert("모든 문제를 완료했습니다!");
        setFeedback("");
      }
    } else {
      setFeedback("틀렸습니다! 다시 시도해보세요.");
      console.log("Wrong Answer!");
    }
  };

  const handleSkip = () => {
    setFeedback("문제를 건너뛰었습니다.");
    console.log("Skipped Question");

    // 다음 문제로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setFeedback("");
        setShowAnswer(false); // 정답 힌트 초기화
        setUserAnswer(""); // 입력 필드 초기화
      }, 1000); // 1초 후 이동
    } else {
      alert("모든 문제를 완료했습니다!");
      setFeedback("");
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-screen">
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
            {/* 문제 진행 상태 텍스트 */}
            <span className="status-text">
              {questions.length}문제중 {currentQuestionIndex + 1}번째 문제 풀이중
            </span>

            {/* 타이머와 이미지 */}
            <div className="timer-container">
              <span className="timer">
                <i className="timer-icon fas fa-clock"></i> {formatTime(timeElapsed)}
              </span>
              <img
                src="/img/timer.png"
                alt="Timer Icon"
                className="timer-image"
              />
            </div>
          </div>

          {/* 문제 텍스트 */}
          {currentQuestion ? (
            <>
              <div className="question-box">
                <p className="question">{currentQuestion.question}</p>
                <p className="hint">{currentQuestion.hint}</p>
              </div>

              {/* 정답/오답 피드백 */}
              {feedback && <p className="feedback">{feedback}</p>}

              {/* 입력 필드 */}
              <div className="input-area">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  placeholder="Type your answer"
                />

                <div className="hint-container">
                  <button className="hint-button">💡</button>
                  <span className="tooltip">정답: {currentQuestion.answer}</span>
                </div>
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
      <footer className="footer">
        <div className="footer-buttons">
          <button className="skip-button" onClick={handleSkip}>
            건너뛰기
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            정답제출
          </button>
        </div>
      </footer>
    </div>
  );
};

export default QuizScreen;
