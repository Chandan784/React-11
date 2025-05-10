import { useEffect, useState } from "react";
import Products from "./components/Products";

function App() {
  let [count, setCount] = useState(0);
  let [x, setX] = useState(0);
  useEffect(() => {
    console.log("i am in useEffect hook");
  }, [x]);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add count
      </button>

      <h1>{x}</h1>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        add x
      </button>

      <Products />
    </>
  );
}

export default App;
