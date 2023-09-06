import React, { useState } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Datetime from "./componenets/Datetime";

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
