import React from "react";
import Games from "../../../Shared/Games/Games/Games";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Videos from "../Videos/Videos";

const Home = () => {
  const number = [1, 2, 3, 4, 56, 7, 8, 9];
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Header />
      <Games />
      <Videos/>
      <Footer/>
    </div>
  );
};

export default Home;
