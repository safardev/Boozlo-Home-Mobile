import React from "react";
import ShopAllCard from "./ShopAllCard";
import "../CSS/ShopAll.css";
import food from "../assets/Frame 2495.png";
import pop from "../assets/Frame 2498.png";

export default function ShopAll() {
  return (
    <div className="shopAll">
      <div className="products">
        <ShopAllCard
          img={food}
          title="TBH Herbed Taro"
          offer="447"
          price="402.30"
        />
        <ShopAllCard
          img={pop}
          title="4700 BC Hawaiian BBQ"
          offer="447"
          price="402.30"
        />
      </div>
      <div className="all">
        Shop All
        <span style={{ marginLeft: "5px" }}>
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
    </div>
  );
}
