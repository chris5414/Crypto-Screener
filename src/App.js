import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./pages/Coin";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState("");

  const coinList =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline";

  const fetchCoins = async () => {
    setIsLoading(true);
    axios
      .get(coinList)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  useEffect(() => {
    const backspace = (event) => {
      // console.log(`user pressed ${event.key}`);

      if (event.key === "Backspace" && inputs === "") {
        fetchCoins();
      }
    };

    document.addEventListener("keyup", backspace);

    // clean up function
    return () => {
      document.removeEventListener("keyup", backspace);
    };
  });

  const handleChangeInput = (event) => {
    // console.log(event.target.value);
    setInputs(event.target.value);
  };

  const filterCoin = () => {
    const filteredCoin = coins.filter(
      (item) =>
        item.name.includes(inputs.toLowerCase()) ||
        item.symbol.includes(inputs.toLowerCase())
    );
    // console.log(filteredCoin);
    setCoins(filteredCoin);
  };

  useEffect(() => {
    // console.log(`app.js mounted or rendered`);
    filterCoin();
  }, [inputs]);

  return (
    <div className="container">
      <Header />
      <br></br>
      <Form inputs={inputs} handleChangeInput={handleChangeInput} />
      <br></br>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
