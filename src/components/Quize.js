import React from "react";
import QuizScreen from "./QuizScreen";


const Main = () => {
    return (
      <main className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <div className="flex w-full max-w-4xl">
          {/* 왼쪽 광고 배너 */}
          <div className="w-1/4 p-2">
            <img
              src="https://via.placeholder.com/150x600"
              alt="Ad Banner"
              className="w-full h-auto rounded-md"
            />
          </div>
  
          {/* 퀴즈 컨텐츠 */}
          <div className="flex-grow p-4">
            <QuizScreen />
          </div>
        </div>
      </main>
    );
  };
  

export default Main;
