import React from "react";
import WeRecomendContainer from "../../containers/we-recomend-container";
import About from "../about/about";

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
      <WeRecomendContainer items={cardItems} />
      <About />
    </div>
  );
}
export default MainPage;
