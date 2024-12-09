// src/components/Hero.js
import React, { useRef } from "react";
import "../styles/Hero.css";

const Hero = () => {
  // Ref to scroll target
  const scrollTargetRef = useRef(null);

  const handleScroll = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero">
        <h1>다양한 학습 레벨!</h1>
        <p>자신에게 맞는 다양한 학습 레벨들을 경험해 보세요.</p>
        <button className="hero-button" onClick={handleScroll}>
          둘러보기
        </button>
      </section>

      {/* Section to scroll to */}
      <section ref={scrollTargetRef} className="scroll-target"></section>
    </>
  );
};

export default Hero;
