import React from "react";
import "../CSS/MadeWith.css";
import madewith from "../assets/Vector.png";

export default function MadeWith() {
  return (
    <div className="made">
      <img src={madewith} alt="" />
      <p>
        Made with{" "}
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>
      </p>
      <span
        style={{
          margin: "0 0 0px 107px",
          fontWeight: "700",
          fontSize: "10px",
          color: "#cdcdcd",
        }}
      >
        Teetotallers E-Retail Private Limited
      </span>
    </div>
  );
}
