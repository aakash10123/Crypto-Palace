import React from 'react';

const data = [
  { id: 1, coin: "Bitcoin - btc", price: "$96,917", change: "2.89", cap: "$1,924,843,380,530", icon: "🟠" },
  { id: 2, coin: "Ethereum - eth", price: "$1,839.53", change: "2.39", cap: "$222,068,361,447", icon: "⚫" },
  { id: 3, coin: "Tether - usdt", price: "$1", change: "0", cap: "$149,413,902,700", icon: "💚" },
  { id: 4, coin: "XRP - xrp", price: "$2.14", change: "2.22", cap: "$125,429,348,215", icon: "⚪" },
  { id: 5, coin: "BNB - bnb", price: "$606.32", change: "1.61", cap: "$88,457,033,232", icon: "🟡" },
  { id: 6, coin: "Solana - sol", price: "$147.79", change: "2.5", cap: "$76,701,429,777", icon: "🟣" },
  { id: 7, coin: "USDC - usdc", price: "$1", change: "-0.01", cap: "$60,975,399,525", icon: "🔵" },
  { id: 8, coin: "Dogecoin - doge", price: "$0.173", change: "3.45", cap: "$25,862,873,940", icon: "🟤" },
  { id: 9, coin: "Cardano - ada", price: "$0.684", change: "4.08", cap: "$24,662,705,853", icon: "🔷" },
  { id: 10, coin: "TRON - trx", price: "$0.245", change: "0.19", cap: "$23,291,610,126", icon: "🔺" },
];

const  CryptocurrencyTable = () => {
  return (

    <div className="min-h-screen rounded-lg bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] p-8 text-white">
      <div className="w-240 mx-auto rounded-lg overflow-hidden">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-center  text-sm uppercase text-gray-300">
              <th className="py-4 px-4">#</th>
              <th className="py-4 px-4 text-left ">Coins</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">24H Change</th>
              <th className="py-4 px-4">Market Cap</th>
            </tr>

          </thead>
          <tbody>
            {data.map((coin, i) => (
              <tr key={coin.id} className="border-t border-[#30274d] text-sm hover:bg-[#151030]">
                <td className="py-4 px-4">{coin.id}</td>
                <td className="py-4 px-4 flex items-center gap-2">{coin.icon} {coin.coin}</td>
                <td className="py-4 px-4">{coin.price}</td>
                <td className={`py-4 px-4 font-medium ${parseFloat(coin.change) < 0 ? "text-red-500" : "text-green-400"}`}>
                  {coin.change}
                </td>
                <td className="py-4 px-4">{coin.cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default CryptocurrencyTable;

