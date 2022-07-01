import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../pages/Coin";
import { Link } from "react-router-dom";
import "./Coins.css";

const Coins = (props) => {
  return (
    <div>
      <div className="heading">
        <p>Symbol</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>Last 24hr</p>
        <p>Volume</p>
        <p>Market Cap</p>
      </div>

      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
