import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import CoinsTable from "./CoinsTable";
import axios from "axios";

const CoinsDisplay = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  //   const [error, setError] = useState(null);
  const history = useNavigate();
  const CoinList = () =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline`;

  const fetchCoins = async () => {
    setIsLoading(true);
    const { data } = await axios.get(CoinList());
    console.log(data);

    setCoins(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    // setSearch(event.target.value);
    return coins.filter((coin) => coin.name.toLowerCase().includes(search));
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="container">
      <h3>List of Crypto</h3>
      <form>
        Search for a Crypto
        <input type="text" onChange={handleSearch} value={search} />
      </form>
      <br></br>
      {/* <CoinsTable /> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">Last 24hr</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.current_price}</td>
              <td>{item.price_change_24h}</td>
              <td>{item.market_cap}</td>
            </tr>
          ))}
          {/* {handleSearch().coins.map((item) => {
            return (
              <tr
                key={item.name}
                onClick={() => history.push(`/coins/${item.id}`)}
              >
                <td>{item.name}</td>
                <td>{item.current_price}</td>
                <td>{item.price_change_24h}</td>
                <td>{item.market_cap}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsDisplay;
