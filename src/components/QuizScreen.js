import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  // Firestore에서 문제 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      const q = query(collection(db, "questions"), orderBy("id", "asc"));
      const querySnapshot = await getDocs(q);
      const fetchedQuestions = querySnapshot.docs.map((doc) => doc.data());
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, []);

  // 현재 문제 가져오기
  const currentQuestion =
    questions.length > 0 ? questions[currentQuestionIndex] : null;

  // 정답 제출 함수
  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(null);
        setUserAnswer("");
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 1000); // 1초 후 다음 문제로 이동
    } else {
      setIsCorrect(false);
    }
  };

  if (!currentQuestion) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Question {currentQuestionIndex + 1}
      </h1>
      <p className="text-lg mb-2">{currentQuestion.question}</p>
      <p className="text-sm text-gray-500 mb-4">{currentQuestion.hint}</p>

      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Type your answer"
        className="border rounded-md p-2 w-full mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Submit Answer
      </button>

      {isCorrect === true && (
        <p className="text-green-600 mt-4">Correct! Moving to the next question...</p>
      )}
      {isCorrect === false && (
        <p className="text-red-600 mt-4">Incorrect! Try again.</p>
      )}

      {currentQuestionIndex >= questions.length - 1 && (
        <p className="mt-4 text-blue-600">You've completed all the questions!</p>
      )}
    </div>
  );
};

export default QuizScreen;
