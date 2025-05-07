import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner } from 'react-icons/fa';


function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => setCoin(res.data))
      .catch((err) => console.error(err));
  }, [id]);



  

  if (!coin) return <div className="flex justify-center items-center h-40 bg-gray-900 rounded-lg">
  <FaSpinner className="animate-spin text-blue-500 text-2xl" />
  <span className="ml-2 text-gray-300">Loading contributions...</span>
</div>

  return (

    <>
        {/* <div className="p-6 text-white max-w-4xl mx-auto">
  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
    <img src={coin.image.large} alt={coin.name} className="w-28 h-28" />
    <div>
      <h1 className="text-4xl font-extrabold tracking-wide">
        {coin.name} <span className="text-purple-400">({coin.symbol.toUpperCase()})</span>
      </h1>
      <p
        className="text-gray-300 mt-2 text-sm leading-relaxed max-w-xl"
        dangerouslySetInnerHTML={{
          __html: coin.description.en.split(". ")[0],
        }}
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    <div className="border border-purple-700 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
      <p className="text-gray-400 text-sm">Current Price</p>
      <p className="text-2xl font-semibold text-purple-300">
        ${coin.market_data.current_price.usd.toLocaleString()}
      </p>
    </div>

    <div className="border border-purple-700 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
      <p className="text-gray-400 text-sm">Market Cap</p>
      <p className="text-2xl font-semibold text-purple-300">
        ${coin.market_data.market_cap.usd.toLocaleString()}
      </p>
    </div>

    <div className="border border-purple-700 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
      <p className="text-gray-400 text-sm">24H High / Low</p>
      <p className="text-lg">
        <span className="text-green-400">
          ${coin.market_data.high_24h.usd.toLocaleString()}
        </span>{" "}
        /{" "}
        <span className="text-red-400">
          ${coin.market_data.low_24h.usd.toLocaleString()}
        </span>
      </p>
    </div>
  </div>
</div> */}


{/* 2nd  */}

<div className="max-w-4xl mx-auto p-6 text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <img 
          src={coin.image.large} 
          alt={coin.name} 
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {coin.name} <span className="text-gray-300">({coin.symbol.toUpperCase()})</span>
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-semibold">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </span>
            <span className={`px-2 py-1 rounded text-sm ${
              coin.market_data.price_change_percentage_24h >= 0 
                ? 'bg-green-900/30 text-green-400' 
                : 'bg-red-900/30 text-red-400'
            }`}>
              {coin.market_data.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white/5 p-4 rounded-lg hover:scale-110 transition-transform duration-300">
          <p className="text-gray-400 text-sm">Market Cap</p>
          <p className="text-lg font-medium">
            ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg hover:scale-110 transition-transform duration-300">
          <p className="text-gray-400 text-sm">24h Trading Vol</p>
          <p className="text-lg font-medium">
            ${coin.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg hover:scale-110 transition-transform duration-300">
          <p className="text-gray-400 text-sm">Circulating Supply</p>
          <p className="text-lg font-medium">
            {coin.market_data.circulating_supply?.toLocaleString() || 'N/A'} {coin.symbol.toUpperCase()}
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg hover:scale-110 transition-transform duration-300">
          <p className="text-gray-400 text-sm">All Time High</p>
          <p className="text-lg font-medium">
            ${coin.market_data.ath.usd.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">About {coin.name}</h2>
        <p 
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: coin.description.en }} 
        />
      </div>


      {/* Links */}

      <h2 className="text-xl font-semibold mb-3">Links for {coin.name}</h2>

      <div className="flex flex-wrap gap-4">
        {coin.links.homepage.filter(Boolean).map((link, i) => (
          <a 
            key={i} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/40 rounded-md text-sm transition-colors"
          >
            Official Website
          </a>
        ))}
        {coin.links.blockchain_site.filter(Boolean).map((link, i) => (
          <a 
            key={i} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
          >
            Blockchain Explorer
          </a>
        ))}
      </div>
    </div>


    </>

  );
}

export default CoinDetail;


<>

</>

// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const CoinDetail = () => {
//   const { id } = useParams();
//   const [coin, setCoin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCoinData = async () => {
//       try {
//         const { data } = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${id}`
//         );
//         setCoin(data);
//       } catch (error) {
//         console.error('Error fetching coin data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoinData();
//   }, [id]);

//   if (loading) return <div className="p-4 text-white">Loading...</div>;
//   if (!coin) return <div className="p-4 text-white">Coin not found</div>;

//   return (
    // <div className="max-w-4xl mx-auto p-6 text-white">
    //   {/* Header Section */}
    //   <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
    //     <img 
    //       src={coin.image.large} 
    //       alt={coin.name} 
    //       className="w-20 h-20 md:w-24 md:h-24 object-contain"
    //     />
    //     <div>
    //       <h1 className="text-3xl md:text-4xl font-bold">
    //         {coin.name} <span className="text-gray-300">({coin.symbol.toUpperCase()})</span>
    //       </h1>
    //       <div className="flex items-center gap-4 mt-2">
    //         <span className="text-2xl font-semibold">
    //           ${coin.market_data.current_price.usd.toLocaleString()}
    //         </span>
    //         <span className={`px-2 py-1 rounded text-sm ${
    //           coin.market_data.price_change_percentage_24h >= 0 
    //             ? 'bg-green-900/30 text-green-400' 
    //             : 'bg-red-900/30 text-red-400'
    //         }`}>
    //           {coin.market_data.price_change_percentage_24h?.toFixed(2)}%
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Stats Grid */}
    //   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    //     <div className="bg-white/5 p-4 rounded-lg">
    //       <p className="text-gray-400 text-sm">Market Cap</p>
    //       <p className="text-lg font-medium">
    //         ${coin.market_data.market_cap.usd.toLocaleString()}
    //       </p>
    //     </div>
    //     <div className="bg-white/5 p-4 rounded-lg">
    //       <p className="text-gray-400 text-sm">24h Trading Vol</p>
    //       <p className="text-lg font-medium">
    //         ${coin.market_data.total_volume.usd.toLocaleString()}
    //       </p>
    //     </div>
    //     <div className="bg-white/5 p-4 rounded-lg">
    //       <p className="text-gray-400 text-sm">Circulating Supply</p>
    //       <p className="text-lg font-medium">
    //         {coin.market_data.circulating_supply?.toLocaleString() || 'N/A'} {coin.symbol.toUpperCase()}
    //       </p>
    //     </div>
    //     <div className="bg-white/5 p-4 rounded-lg">
    //       <p className="text-gray-400 text-sm">All Time High</p>
    //       <p className="text-lg font-medium">
    //         ${coin.market_data.ath.usd.toLocaleString()}
    //       </p>
    //     </div>
    //   </div>

    //   {/* Description */}
    //   <div className="mb-8">
    //     <h2 className="text-xl font-semibold mb-3">About {coin.name}</h2>
    //     <p 
    //       className="text-gray-300 leading-relaxed"
    //       dangerouslySetInnerHTML={{ __html: coin.description.en }} 
    //     />
    //   </div>

    //   {/* Price Chart Section */}
    //   <div className="mb-8">
    //     <h2 className="text-xl font-semibold mb-3">Price History (7d)</h2>
    //     <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
    //       <p className="text-gray-400">Chart would render here</p>
    //       {/* You would integrate a charting library here */}
    //     </div>
    //   </div>

    //   {/* Links */}
    //   <div className="flex flex-wrap gap-4">
    //     {coin.links.homepage.filter(Boolean).map((link, i) => (
    //       <a 
    //         key={i} 
    //         href={link} 
    //         target="_blank" 
    //         rel="noopener noreferrer"
    //         className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/40 rounded-md text-sm transition-colors"
    //       >
    //         Official Website
    //       </a>
    //     ))}
    //     {coin.links.blockchain_site.filter(Boolean).map((link, i) => (
    //       <a 
    //         key={i} 
    //         href={link} 
    //         target="_blank" 
    //         rel="noopener noreferrer"
    //         className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
    //       >
    //         Blockchain Explorer
    //       </a>
    //     ))}
    //   </div>
    // </div>
//   );
// };

// export default CoinDetail;