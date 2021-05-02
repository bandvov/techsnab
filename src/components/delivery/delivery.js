import React from "react";
const deliveryDetails = [
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

function Delivery() {
  const mappedItems = deliveryDetails.map((value, index) => {
    return (
      <div
        style={{
          display: "flex",
          maxWidth: "45%",
          alignItems: "center",
          marginTop: "1rem",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              lineHeight: "54px",
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              border: "2px solid #F7941E",
              boxSizing: "border-box",
              marginRight: "1rem",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#F7941E",
            }}
          >
            <span
              style={{
                fontSize: "36px",

                textAlign: "center",
              }}
            >
              {index + 1}
            </span>
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "17px",
            fontVariant: "small-caps",
            color: "#8B868F",
          }}
        >
          {value}
        </div>
      </div>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid red",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      {mappedItems}
    </div>
  );
}

export default Delivery;
