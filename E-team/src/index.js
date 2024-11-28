import React from "react";
import ReactDOM from "react-dom/client"; // 올바른 import 경로
import App from "./App";
import "./styles/App.css"; // 스타일 파일 불러오기

// React 18에서는 createRoot 사용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
