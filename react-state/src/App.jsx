import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import viratImage from "./assets/OP.jpg";
import Abc from "./components/Abc";

function App() {
  let [bgColor, setBgColor] = useState("green");
  // let [count, setCount] = useState(0);

  // function handelOnclick() {
  //   setCount(count + 1);
  // }

  // function handelSubBtnClick() {
  //   setCount(count - 1);
  // }

  function handeBtnChange() {
    if (bgColor === "green") {
      setBgColor("red");
    }
    if (bgColor === "red") {
      setBgColor("green");
    }
  }

  return (
    <>
      {/* <div className=" h-screen bg-black lg:bg-green-500 text-white lg:text-3xl flex justify-center items-center text-4xl flex-col">
        <div>{count}</div>
        <button
          onClick={handelOnclick}
          className=" bg-amber-300 text-2xl text-black  py-2 px-4 rounded-lg"
        >
          Add
        </button>
        <button
          onClick={handelSubBtnClick}
          className="bg-amber-300 text-2xl text-black  py-2 px-4 rounded-lg"
        >
          Sub
        </button>
      </div> */}

      <div className={`bg-${bgColor}-500  h-screen text-center`}>
        <button onClick={handeBtnChange} className=" bg-amber-300 px-4 py-2 ">
          change background{" "}
        </button>
      </div>
    </>
  );
}

export default App;
