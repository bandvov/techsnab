import React from "react";
import WeRecomendContainer from "../../containers/we-recomend-container";
import About from "../about/about";
import MainDivContent from "../main-page-content/main-page-content";
import Slider from "simple-react-slider-v1";
const cardItems = [
  {
    name: "lorem ipsum lorem",
    article: "89 315 007",
  },
  {
    name: "lorem ipsum",
    article: " 89 315 007",
  },
  {
    name: "lorem ipsum",
    article: " 89 315 007",
  },
  {
    name: "lorem ipsum",
    article: " 89 315 007",
  },
];

function MainPage() {
  return (
    <div style={{ width: "100%", height: "auto", background: "#F2F2F0" }}>
      <MainDivContent />
      <WeRecomendContainer items={cardItems} />
      <About />
      <Slider>
        <div style={{ width: "100px", height: "100px" }}></div>
        <div style={{ width: "100px", height: "100px" }}></div>
        <div style={{ width: "100px", height: "100px" }}></div>
      </Slider>
    </div>
  );
}
export default MainPage;
