import React from "react";
import Navbar from "./Navbar";
import Feature from "./Feature";
import BackgroundBox from "./BackgroundBox";
import CardBox from "./CardBox";

function App() {
  return (
    <div className="App">
     <Navbar />
     <BackgroundBox />
     <CardBox />
     <Feature />
    </div>
  );
}

export default App;
