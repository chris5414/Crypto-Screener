import React from "react";
import { BsCoin } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <BsCoin className="icon" />
        <h1>Crypto Screener</h1>
      </div>
    </div>
  );
};

export default Header;
