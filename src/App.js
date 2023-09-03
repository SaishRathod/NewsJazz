import React, { useState } from "react";
import Cards from "./componenets/Cards";
import Card from "./componenets/Card";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Datetime from "./componenets/Datetime";
import LatestNews from "./componenets/LatestNews";
import AstrologyNews from "./componenets/AstrologyNews";
import data from "./sampleOutput.json";

function App() {
  return (
    <div>
      <Datetime />
      <Navbar />
      {/* {data.articles.map((item) => {
        return <Cards key={item.title} item={item} />;
      })} */}
      {/* {data.articles.map((item) => {
        return <Card key={item.title} item={item} />;
      })} */}
    </div>
  );
}

export default App;
