import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //useEffect 를 한번만 실행시킬 거여서 [] 작성.
  return (
    //만약 loading 이 아니라면 아무것도 보여주지 않음.
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
