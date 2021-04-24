import React from "react";
import Card from "../components/card/Card";

function WeRecomendContainer({ items }) {
  const mappedItems = items.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div className="root">
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .root h2 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          text-transform: uppercase;
          color: #8b868f;
          margin-bottom: 0;
        }
        .root .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin: 0 5rem;
        }
      `}</style>

      <h2>We recomend</h2>

      <div className="container">{mappedItems}</div>
    </div>
  );
}

export default WeRecomendContainer;
