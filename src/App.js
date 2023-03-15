
import React from "react";
  import NavBar from "./Components/Navbar/NavBar";
  import './app.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/rowPost/RowPost";
import { Popular, Trending, TopRated } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Trending} title="Trending" isSmall/>
      <RowPost url={Popular} title="Popular" />
      <RowPost url={TopRated} title="TopRated" />

      
      
    </div>
  );
}

export default App;
