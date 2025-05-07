import React, { useEffect, useState } from "react";
import CryptocurrencyTable from "./Table";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchcoin, setsearchcoin] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setcurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  const navigate = useNavigate();
  const searchData = coins.filter((p) =>
    p.name.toLowerCase().includes(searchcoin.toLowerCase())
  );

  const currencyHandler = (e) => {
    switch (e) {
      case "usd":
        setcurrency({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setcurrency({ name: "inr", symbol: "₹" });
        break;
      case "eur":
        setcurrency({ name: "eur", symbol: "€" });
        break;

      default:
        setcurrency({ name: "usd", symbol: "$" }); // fallback
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=25`
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(searchcoin);
    setsearchcoin("");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col text-center items-center justify-center py-24 space-y-6">
        <h1 className=" text-6xl tracking-wide font-inter font-bold leading-18 ">
          Largest <br />
          Crypto Marketplace
        </h1>

        <p className="max-w-110">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        <form
          className="bg-white py-2 px-3 rounded-lg shadow-md max-w-xl mx-auto"
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <div className="flex">
            <input
              type="text"
              value={searchcoin}

              onChange={(e) => {
                setsearchcoin(e.target.value);
              }}
              placeholder="Search here..."
              className="flex-grow px-4 py-2 text-gray-800  outline-none rounded-l-md 
            focus:outline-none w-100 "
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* <CryptocurrencyTable/> */}

        <select
          value={currency.name}
          onChange={(e) => currencyHandler(e.target.value)}
          className="bg-gray-800 text-white p-2 pl-3 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>

        <div className="min-h-screen w-fit rounded-lg bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] p-8 text-white mt-15 ">
          <div className="w-240 mx-auto rounded-lg overflow-hidden">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-center  text-sm uppercase text-gray-300">
                  <th className="py-4 px-4">Rank</th>
                  <th className="py-4 px-4 text-left ">Coins</th>
                  <th className="py-4 px-4">Price</th>
                  <th className="py-4 px-4">24H Change</th>
                  <th className="py-4 px-4">Market Cap</th>
                </tr>
              </thead>

              <tbody>
                {searchData.map((coin, i) => (
                  //   <Link to={`/coin/${coin.id}`} >

                  <tr
                    key={coin.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/coin/${coin.id}`)}
                    className="border-t border-[#30274d]  hover:bg-[#151030]  "
                  >
                    <td className="py-4 px-4">{coin.market_cap_rank}</td>
                    <td className="py-4 px-4 flex items-center gap-2 cursor-pointer ">
                      <img
                        className="w-10 h-10"
                        src={coin.image}
                        alt={coin.name}
                      />

                      <h1>
                        {coin.name} - {coin.symbol}
                      </h1>
                    </td>
                    <td className="py-4 px-4">
                      {currency.symbol} {coin.current_price.toLocaleString()}
                    </td>
                    <td
                      className={`py-4 px-4 font-medium ${
                        parseFloat(coin.price_change_24h) < 0
                          ? "text-red-500"
                          : "text-green-400"
                      }`}
                    >
                      {coin.price_change_24h}
                    </td>
                    <td className="py-4 px-4">
                      {currency.symbol} {coin.market_cap.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
