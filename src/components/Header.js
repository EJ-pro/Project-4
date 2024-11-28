import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // 메인(Main) 페이지로 이동
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        E-Card
      </div>
      <nav className="nav">
        <a href="#about">About us</a>
        <a href="#test">Test</a>
        <a href="#sign-up">Sign up</a>
        <a href="#login" className="login-btn">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
