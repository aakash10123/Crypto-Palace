import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CoinDetail from "./pages/CoinDetail";

const App = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] min-h-screen text-white ">
        <NavBar/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
