import React from "react";
import "../CSS/ShopAllCard.css";

export default function ShopAllCard(props) {
  return (
    <div className="cont">
      <div className="box">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p><span>₹{props.offer} </span> ₹{props.price}</p>
      </div>
      <button><span><i className="fa-solid fa-cart-shopping"></i></span> Quick Add</button>
    </div>
  );
}
