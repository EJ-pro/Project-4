// src/components/Header.js
// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">E-Card</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">About us</li>
          <li className="nav-item">Test</li>
          {/* 세로 선 추가 */}
          <div className="nav-item-separator"></div>
          <li className="nav-item">Sign up</li>
          {/* 로그인 버튼 수정 */}
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
