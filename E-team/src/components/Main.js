import React, { useState, useEffect } from "react";
import { images, getNextIndex } from "./level-introduce.js";
import "../styles/Main.css";


const LevelIntroduction = ({ handleStartClick }) => {
  // 현재 표시 중인 이미지 인덱스를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 5초마다 이미지 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => getNextIndex(prevIndex, images.length));
    }, 5000); // 5초마다 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  // 현재 표시할 데이터
  const currentImage = images[currentIndex];
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
        {/* 이미지 및 텍스트 동적 업데이트 */}
        <div className="main-img">
          <img src={currentImage.src} alt={currentImage.title} />
          <div className="overlay-text">
            <div className="overlay-title-text">{currentImage.title}</div>
            <div className="overlay-subtext">{currentImage.subtitle}</div>
          </div>
        </div>

        <div className="main-content-01-text">
          <div className="main-content-01-title">
            모두를 위한 
            <div className="main-content-01-highlight">영어 학습 파트너</div>
          </div>
          <div className="main-content-01-subtitle">
            영어 학습의 시작, 당신의 목표 달성을 위한&nbsp;
            <span className="main-content-01-subtitle-highlight">최고의 선택! </span>
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

      <div className="container_main">
        <div className="image-section">
          <div className="image-wrapper">
            <img src="/img/content03_img_02.png" alt="Business Meeting" /> {/* 경로 수정 */}
          </div>
        </div>
        <div className="text-section">
          <div className="content03-text">
            영어 시험 준비, 영어 에세이 작성, <br/>
            영어 회화 등 학업에 필요한 영어 학습 콘텐츠를 <br/>
            제공합니다.
          </div>
        </div>
        <img src="/img/Vector(2).png" alt="Overlay Icon" className="background-image" /> {/* 경로 수정 */}
      </div>

      <div className="container_main">
        <div className="image-section">
          <div className="image-wrapper">
            <img src="/img/content03_img_03.png" alt="Business Meeting" /> {/* 경로 수정 */}
          </div>
        </div>
        <div className="text-section">
          <div className="content03-text">
            여행 중 필요한 기본적인 영어 표현, 관광지 정보, <br/>
            이해 등을 학습할 수 있습니다.  
          </div>
        </div>
        <img src="/img/Vector(3).png" alt="Overlay Icon" className="background-image" /> {/* 경로 수정 */}
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

      {/* 컴포넌트 5: 레벨 테스트 */}
      <div className="level-test-container">
        <div className="image-section">
          <img
            src="/img/test_paper.png"
            alt="체크리스트 이미지"
            className="checklist-image"
          />
        </div>
        <div className="text-section">
          <div className="test-section-title">레벨 테스트</div>
          <p>
            <span className="icon">▼</span> 레벨 테스트를 통해 나에게 맞는 학습 방향을 설정하세요.
          </p>
          <ul>
            <li>
              레벨 테스트는 사용자의 현재 영어 실력을 정확하게 평가합니다.
              테스트 결과를 바탕으로 개인에게 최적화된 학습 커리큘럼을 추천합니다.
            </li>
          </ul>
          <p>
            <span className="icon">▼</span> 다양한 유형의 문제로 구성된 레벨 테스트
          </p>
          <ul>
            <li>
              듣기, 읽기, 쓰기, 말하기 등 다양한 영역을 평가하여,
              균형적인 영어 실력을 도모합니다.
            </li>
          </ul>
        </div>
      </div>

      {/* 컴포넌트 6: 주제별 학습 콘텐츠 */}
      <div className="studycontents-container">
        <div className="contentsbox-01">
          <div className="image-container">
            <img src="/img/studycontent_01.png" alt="학습콘텐츠 이미지 01" />
            <div className="overlay">
              <div className="contentsbox-title">생활 영어</div>
              <div className="contentsbox-text">
                일상생활에서 자주 사용하는 <br />
                기본적인 영어 표현을 학습합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="contentsbox-01">
          <div className="image-container">
            <img src="/img/studycontent_02.png" alt="학습콘텐츠 이미지 02" />
            <div className="overlay">
              <div className="contentsbox-title">여행 영어</div>
              <div className="contentsbox-text">
                여행 중 필요한 기본적인 <br />
                영어 표현, 관광지 정보, 문화 이해 <br />
                등을 학습합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="contentsbox-01">
          <div className="image-container">
            <img src="/img/studycontent_03.png" alt="학습콘텐츠 이미지 03" />
            <div className="overlay">
              <div className="contentsbox-title">비즈니스 영어</div>
              <div className="contentsbox-text">
                회의, 협상, 이메일 작성 등 <br />
                비즈니스 상황에서 필요한 영어 표현을 학습합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 컴포넌트 7: 문법 및 어휘 학습 */}
      <div className="studylanguage-container">
        <div className="studylanguage-box">
          <div className="studylanguage-title">문법 학습</div>
          <div className="studylanguage-text">
            쉬운 설명과 다양한 예시를 통해 영어 문법을 <br />
            이해하기 쉽게 구성했습니다.
          </div>
        </div>
        <div className="studylanguage-box">
          <div className="studylanguage-title">어휘 학습</div>
          <div className="studylanguage-text">
            다양한 퀴즈와 게임을 통해 재미있게 <br />
            어휘력을 늘릴 수 있습니다.
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
