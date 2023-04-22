import React, { useState } from "react";
import "../CSS/Navbar.css";
import logo from "../assets/img_boozlo1 1 (no bg).png";
import icon from "../assets/Icon.png"


export default function Navbar() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "375px", height: "60px" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}><img src={icon} alt="" /></div>
        </div>
        <div className="logo"><img src={logo} alt="" /></div>
      </nav>

      <div className={menu_class}>
        <ul>
          <li>Home</li>
          <li>Offer Zone</li>
          <li>Fashion</li>
          <li>Elctronics</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}
