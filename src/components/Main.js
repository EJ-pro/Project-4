import React from "react";
import "../styles/Main.css";

const LevelIntroduction = ({ handleStartClick }) => {
  return (
    <div>
      {/* 네비게이션 바 */}
      <div className="navbar">
        <a href="#home" className="logo">E-Card</a>
        <div className="nav-links">
          <div className="group-left">
            <a href="#about">About us</a>
            <a href="#test">Test</a>
          </div>
          <div className="group-right">
            <a href="#sign-up">Sign up</a>
            <a href="#login" className="login-btn">Login</a>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="main-content-01">
        <div className="main-img">
          <img src="/img/main_img_01.png" alt="Main Image" />
          <div className="overlay-text">
            <div className="overlay-title-text">일상 회화</div>
            <div className="overlay-subtext">
              일상에서 자주 사용하는 짧은 표현과 문장들
            </div>
          </div>
        </div>
        <div className="main-content-01-text">
          <div className="main-content-01-title">
            모두를 위한
            <div className="main-content-01-highlight">영어 학습 파트너</div>
          </div>
          <div className="main-content-01-subtitle">
            영어 학습의 시작, 당신의 목표 달성을 위한
            <span className="main-content-01-subtitle-highlight"> 최고의 선택! </span>
          </div>
          <div className="main-content-01-btn">
            <button className="main-content-01-button" onClick={handleStartClick}>
              START →
            </button>
          </div>
        </div>
      </div>

      {/* 소개 01 */}
      <div className="main-content-02">
        <div className="main-content-02-title">맞춤형 학습 콘텐츠</div>
        <div className="main-content-02-subtest">
          자신에게 맞는 학습 콘텐츠를 찾아보세요!
        </div>
      </div>

      {/* 컴포넌트 3 */}
      <div className="container_main">
        <div className="image-section">
          <div className="image-wrapper">
            <img src="/img/content03_img_01.png" alt="Business Meeting" /> {/* 경로 수정 */}
          </div>
        </div>
        <div className="text-section">
          <div className="content03-text">
            비즈니스 영어, 프레젠테이션, 이메일 작성 등<br />
            직장 생활에 필요한 영어 학습 콘텐츠를 제공합니다.
          </div>
        </div>
        <img src="/img/Vector.png" alt="Overlay Icon" className="background-image" /> {/* 경로 수정 */}
      </div>

      {/* 컴포넌트 4 */}
      <div className="levels-container">
        <div className="level-box level-box-1">
          <div className="level-icon">1 초급</div>
          <div className="level-line"></div>
          <div className="level-text">
            일상에서 자주 쓰이는 표현과<br />
            기초 문법, 단어 학습을 통해<br />
            영어 기초를 다져요.
          </div>
        </div>
        <div className="level-box level-box-2">
          <div className="level-icon">2 중급</div>
          <div className="level-line"></div>
          <div className="level-text">
            다양한 상황에서의<br />
            대화 연습과 문화 이해를 통해<br />
            실생활 영어를 익혀요.
          </div>
        </div>
        <div className="level-box level-box-3">
          <div className="level-icon">3 고급</div>
          <div className="level-line"></div>
          <div className="level-text">
            비즈니스 영어와<br />
            심화 문법을 통해 유창하고<br />
            전문적인 영어를 연습해요.
          </div>
        </div>
      </div>

      {/* 하단 소개 */}
      <div className="bottom-introduce">
        대표자: 홍길동 | 서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 [06620]
      </div>
      <div className="bottom-navbar">
        <div className="bottom-nav-links">
          <a href="#cookie">쿠키설정</a>
          <a href="#terms-of-Use">구매 이용약관</a>
          <a href="#privacy-policy">개인정보 처리방침</a>
        </div>
        <div className="bottom-navbar-text">
          E-Card Korea, ECARD. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default LevelIntroduction;
