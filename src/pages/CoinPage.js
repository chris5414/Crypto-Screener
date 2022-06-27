import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  const ClickedCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

  const fetchCoin = async () => {
    const { data } = await axios.get(ClickedCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="container">
      <h5>This is Coin Page </h5>
      <img src={coin?.image} alt={coin?.name} />
      <div>
        {coin?.current_price}
        <div>{coin?.market_cap}</div>
        <div>{coin?.total_volume}</div>
      </div>
    </div>
  );
};

export default CoinPage;
