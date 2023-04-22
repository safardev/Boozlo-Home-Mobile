import React from "react";
import "../CSS/Footbar.css"


export default function Footbar() {
  return (
    <footer>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Book A Table</a></li>
        <li><a href="/">Profile</a></li>
        <li style={{marginRight:"26px"}}><a href="/">Cart</a></li>
      </ul>
    </footer>
  );
}
