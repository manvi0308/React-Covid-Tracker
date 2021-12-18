import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/SearchBar/Search";
import { useEffect, useState } from "react";
import Covid from "./Components/covid";
function App() {

  return (
    <div className="App">
      <Header />
      <Search />
      <Covid/>
    </div>
  );
}

export default App;
