import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import "../styles/QuizScreen.css";

const QuizScreen = ({ level }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState(null); // { message: "", type: "" }
  const [error, setError] = useState(null);

  // Firestore에서 데이터 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // beginner는 기본 컬렉션, 나머지는 레벨별 컬렉션
        const collectionName =
          level === "beginner" ? "questions" : `questions_${level}`;
        const q = query(
          collection(db, collectionName),
          orderBy("id", "asc") // id 순으로 정렬
        );
        const querySnapshot = await getDocs(q);
        const fetchedQuestions = querySnapshot.docs.map((doc) => doc.data());

        if (fetchedQuestions.length === 0) {
          setError(`"${level}" 레벨에 대한 문제가 없습니다.`);
        } else {
          setQuestions(fetchedQuestions);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions: ", err);
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [level]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const handleInputChange = (e) => setUserAnswer(e.target.value);

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (
      userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()
    ) {
      setFeedback({ message: "정답입니다!", type: "correct" });
      if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
          moveToNextQuestion();
        }, 1000);
      } else {
        alert("모든 문제를 완료했습니다!");
      }
    } else {
      setFeedback({ message: "틀렸습니다! 다시 시도해보세요.", type: "incorrect" });
    }
  };

  const handleSkip = () => {
    setFeedback({ message: "문제를 건너뛰었습니다.", type: "skipped" });
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        moveToNextQuestion();
      }, 1000);
    }
  };

  const handleShowAnswer = () => {
    const answer = questions[currentQuestionIndex]?.answer || ""; // 현재 문제의 정답 가져오기
    navigator.clipboard
      .writeText(answer)
      .then(() => {
        alert("힌트가 복사되었습니다!"); // 복사가 성공했을 때 사용자에게 알림
      })
      .catch((err) => {
        console.error("복사 실패: ", err); // 복사 실패 시 에러 출력
      });
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setFeedback(null);
    setUserAnswer("");
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-screen">
      <main className="main-content">
        <section className="question-area">
          <div className="status-bar">
            <span style={{ color: "#ff7755", fontWeight: "bold" }}>
              {level === "beginner" && "초급"}
              {level === "intermediate" && "중급"}
              {level === "advanced" && "고급"}
            </span>
            <span>
              총 문제: {questions.length} | 현재 문제:{" "}
              <span style={{ color: "#ffa500", fontWeight: "bold" }}>
                {currentQuestionIndex + 1}
              </span>
            </span>

            <div className="timer-container">
              <img
                src="/img/timer.png"
                alt="Timer Icon"
                className="timer-image"
              />
              <span className="timer">
                <i className="timer-icon fas fa-clock"></i>{" "}
                {formatTime(timeElapsed)}
              </span>
            </div>
          </div>

          {currentQuestion && (
            <>
              <div className="question-box">
                <p className="question">{currentQuestion.question}</p>
                <p className="hint">{currentQuestion.hint}</p>
              </div>

              {feedback && (
                <div className="feedback-container">
                  <p className={`feedback ${feedback.type}`}>{feedback.message}</p>
                </div>
              )}

              <div className="input-area">
                <input
                  type="text"
                  placeholder="Type your answer"
                  value={userAnswer}
                  onChange={handleInputChange}
                />
                <div className="hint-container">
                  <button className="hint-button" onClick={handleShowAnswer}>
                    💡
                  </button>
                  <span className="tooltip">정답: {currentQuestion.answer}</span>
                </div>
              </div>
            </>
          )}
        </section>
      </main>

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
