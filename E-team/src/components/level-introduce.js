// level-introduce.js
export const images = [
  {
    src: "/img/main_img_01.png",
    title: "일상 회화",
    subtitle: "일상에서 자주 사용하는 짧은 표현과 문장들",
  },
  {
    src: "/img/main_img_02.png",
    title: "상황별 대화",
    subtitle: "쇼핑, 여행, 레스토랑 등 다양한 상황에서의 대화연습",
  },
  {
    src: "/img/main_img_03.png",
    title: "비즈니스 영어",
    subtitle: "비즈니스 상황에서 사용하는 영어, 발표 및 면접 연습",
  },
];

// 콘텐츠 업데이트 로직 (필요하면 export)
export function getNextIndex(currentIndex, length) {
  return (currentIndex + 1) % length; // 순환 인덱스 계산
}
