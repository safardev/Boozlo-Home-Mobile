import React from "react";
import "../CSS/TopProducts.css";
import bottle from "../assets/Component 28.png";

export default function TopProducts() {
  return (
    <div className="tp">
      <img src={bottle} alt="" />
      <p>Top Products</p>
    </div>
  );
}
