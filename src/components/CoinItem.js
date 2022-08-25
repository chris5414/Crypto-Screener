import React from "react";
import "./Coins.css";

const CoinItem = ({ coins }) => {
  return (
    <div className="coin-row">
      <div className="img-symbol">
        <img src={coins.image} alt="" />
        <p className="coin-symbol">{coins.symbol.toUpperCase()}</p>
      </div>
      <p className="coin-name">{coins.name}</p>
      <p className="coin-price">${coins.current_price.toLocaleString()}</p>
      {coins.price_change_percentage_24h < 0 ? (
        <p className="coin-change red">
          {coins.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="coin-change green">
          {coins.price_change_percentage_24h.toFixed(2)}%{" "}
        </p>
      )}
      <p className="coin-volume">${coins.total_volume.toLocaleString()}</p>
      <p className="coin-cap">${coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
