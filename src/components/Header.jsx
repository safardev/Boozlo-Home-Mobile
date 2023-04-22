import React from "react";
import sale from "../assets/sale.png";
import del from "../assets/lettering fast delivery in the rocket with clouds and stars.png";
import go from "../assets/Declaration of love on a date.png";
import chicken from "../assets/Baked chicken.png"
import "../CSS/Header.css";
import BannerSlider from "./BannerSlider";
import home from "../assets/Home Page.png";
import face from "../assets/Face 37.png";
import ProductSlider from "./ProductSlider";

export default function Header() {
  return (
    <div className="header">
      <section>
        <div className="udet">
          <img src={home} alt="" />
          <div className="det">
              Home <span><i className="fa-solid fa-angle-down"></i></span>
            <p>1208, U Block, Sector 45, Gurugram</p>
          </div>
        </div>
        <div className="profile">
          <img src={face} alt="" />
        </div>
      </section>
      <div className="searchBar">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="item">
        <div className="imagCont">
          <img src={sale} alt="" style={{margin:"30px 0 0 17px"}} width="75px" height="50px"/>
          <p style={{margin:"18px 0 0 26px",width:"58px", height:"12px"}}>MarketPlace</p>
        </div>
        <div className="imagCont">
          <img src={del} alt="" style={{margin:"30px 0 0 14px"}} width="74.01px" height="50px"/>
          <p style={{margin:"18px 0 0 26px", width:"66px", height:"12px"}}>Quick Delivery</p>
        </div>
        <div className="imagCont">
          <img src={go} alt="" style={{margin:"30px 0 0 10.99px"}} width="80px" height="48px"/>
          <p style={{margin:"19px 0 0 37px",width:"35px", height:"12px"}}>Go Out!</p>
        </div>
        <div className="imagCont">
          <img src={chicken} alt="" style={{margin:"20px 23.59px 0 15px"}} width="65.41px" height="70px"/>
          <p style={{margin:"8px 20px 0 10px",width:"72px", height:"12px"}}>Chicken & More</p>
        </div>
      </div>
      <div className="banner">
        <BannerSlider />
      </div>
      <div className="categories">
        <div className="head">
          Categories
          <span>Shop All</span>
        </div>
        <div className="items">
          <ProductSlider/>
        </div>
      </div>
    </div>
  );
}
