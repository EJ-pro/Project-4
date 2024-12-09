import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Levels.css";

const Levels = () => {
  const navigate = useNavigate();

  const levels = {
    beginner: [
      {
        id: "level-1",
        title: "일상 회화",
        description: "오늘은 어떤 공부를 할까?",
        image: process.env.PUBLIC_URL + "/img/easy2.png",
        keywords: ["일상 표현", "인사"],
      },
      {
        id: "level-2",
        title: "기초 문법",
        description: "이것은 빨간색이에요 그것은 파란색이에요.",
        image: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/img/easy3.png",
        keywords: ["문장 구조", "기본 문법"],
      },
      {
        id: "level-3",
        title: "어휘 확장",
        description: "안녕, 밥 먹었어?.",
        image: process.env.PUBLIC_URL + "/img/easy4.png",
        keywords: ["인사말", "일상 어휘"],
        spanFull: true,
      },
    ],
    intermediate: [
      {
        id: "level-5",
        title: "상황별 회화",
        description: "얼마에요? 현금으로 결제할게요.",
        image: process.env.PUBLIC_URL + "/img/normal2.png",
        keywords: ["상황 연습", "결제 표현"],
      },
      {
        id: "level-6",
        title: "문법 확장",
        description: "이 영화는 영미 드라마를 보는 것과 같아",
        image: process.env.PUBLIC_URL + "/img/normal3.png",
        keywords: ["문법 심화", "드라마 표현"],
      },
      {
        id: "level-7",
        title: "문화 이해",
        description: "한국 음식을 좋아해요. 한번 같이 가요.",
        image: process.env.PUBLIC_URL + "/img/normal4.png",
        keywords: ["한국 문화", "음식 표현"],
        spanFull: true,
      },
    ],
    advanced: [
      {
        id: "level-9",
        title: "비즈니스 영어",
        description: "We need to improve our synergy for better results.",
        image: process.env.PUBLIC_URL + "/img/hard2.png",
        keywords: ["비즈니스", "회의 표현"],
      },
      {
        id: "level-10",
        title: "고급 문법과 관용구",
        description: "It's time to step up our game and deliver the results.",
        image: process.env.PUBLIC_URL + "/img/hard3.png",
        keywords: ["고급 문법", "관용 표현"],
      },
      {
        id: "level-11",
        title: "토론 주제",
        description: "~ 문제에 대한 다양한 의견을 공유하고자 합니다.",
        image: process.env.PUBLIC_URL + "/img/hard4.png",
        keywords: ["토론", "의견 교환"],
        spanFull: true,
      },
    ],
  };

  const topLevels = {
    beginner: {
      id: "level-0",
      title: "초급",
      description: "일상 회화 : 일상에서 자주 사용하는 짧은 표현과 문장들",
      image: process.env.PUBLIC_URL + "/img/easy1.png",
    },
    intermediate: {
      id: "level-4",
      title: "중급",
      description:
        "상황별 대화 : 쇼핑, 여행, 레스토랑 등 다양한 상황에서의 대화연습",
      image: process.env.PUBLIC_URL + "/img/normal1.png",
    },
    advanced: {
      id: "level-8",
      title: "고급",
      description:
        "비즈니스 영어 : 비즈니스 상황에서 사용하는 영어, 발표 및 면접 연습",
      image: process.env.PUBLIC_URL + "/img/hard1.png",
    },
  };

  const renderKeywords = (keywords, category) => (
    <div className={`keyword-container_level ${category}-keywords_level`}>
      {keywords.map((keyword, index) => (
        <span key={index} className="keyword_level">
          {keyword}
        </span>
      ))}
    </div>
  );

  const renderTopLevel = (topLevel, levelPath) => (
    <div className="level-card_level no-border_level top-level_level">
      <img
        src={topLevel.image}
        alt={topLevel.title}
        className="large-image_level"
      />
      <div className="level-text_level">
        <h2>{topLevel.title}</h2>
        <p className="title_description_level">{topLevel.description}</p>
        <button
          className="learn-button_level"
          onClick={() => navigate(levelPath)}
        >
          학습 시작
        </button>
      </div>
    </div>
  );

  const renderLevels = (category, topLevel, levelPath) => (
    <section className="container_level">
      {renderTopLevel(topLevel, levelPath)}
      <div className="grid-layout_level">
        {levels[category].map((level) => (
          <div
            key={level.id}
            className={`level-card_level ${
              level.spanFull ? "full-span_level" : ""
            }`}
          >
            <img
              src={level.image}
              alt={level.title}
              className="level-image_level"
            />
            <div className="level-text_level">
              <h3>{level.title}</h3>
              <p className="description_level">{level.description}</p>
              {level.keywords && renderKeywords(level.keywords, category)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      {renderLevels("beginner", topLevels.beginner, "/quiz/beginner")}
      {renderLevels("intermediate", topLevels.intermediate, "/quiz/intermediate")}
      {renderLevels("advanced", topLevels.advanced, "/quiz/advanced")}
    </div>
  );
};

export default Levels;
