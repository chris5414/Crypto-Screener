import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Coin.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const singleCoin = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  const fetchCoin = async () => {
    axios
      .get(singleCoin)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div>
      <div className="coin-container">
        <h1>{coin.name}</h1>
      </div>

      <span className="rank">Rank # {coin.market_cap_rank}</span>
      <br></br>

      <div className="info">
        <div className="coin-heading">
          {coin.image ? <img src={coin.image.small} alt="" /> : null}
          <br></br>

          <p>{coin.name}</p>
          {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
        </div>
        <br></br>
        <div className="coin-price">
          {coin.market_data?.current_price ? (
            <h1>
              ${coin.market_data.current_price.usd.toFixed(5).toLocaleString()}
            </h1>
          ) : null}
          <br></br>
        </div>

        <div className="content"></div>
        <h4>24 Hour Low</h4>
        {coin.market_data?.low_24h ? (
          <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
        ) : null}
        <br></br>
        <h4>24 Hour High</h4>
        {coin.market_data?.high_24h ? (
          <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
        ) : null}
        <br></br>
        <h4>Market Cap</h4>
        {coin.market_data?.market_cap ? (
          <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
        ) : null}
        <br></br>
        <h4>Circulating Supply</h4>
        {coin.market_data ? (
          <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
        ) : null}
        <br></br>
        <div className="about">
          <h3>About</h3>

          <p>{coin.description ? coin.description.en : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
