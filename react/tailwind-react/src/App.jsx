import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NoInternet from "./components/NoInternet";

function App() {
  const [count, setCount] = useState(0);

  let compnment1 = <h1>hello</h1>;
  let compnment2 = <h1>hii</h1>;

  let x = 1;

  return <>{x ? <NoInternet /> : compnment2}</>;
}

export default App;
