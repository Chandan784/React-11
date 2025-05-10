import React, { useState } from "react";

function BgMode() {
  let [bgColor, setBgColor] = useState("white");
  let [textColor, setTextColor] = useState("black");

  let [isDarkMode, setDarkMode] = useState(false);

  function handelBtnClick() {
    if (isDarkMode) {
      setBgColor("white");
      setTextColor("black");
      setDarkMode(false);
    } else {
      setBgColor("black");
      setTextColor("white");
      setDarkMode(true);
    }
  }

  return (
    <div
      style={{
        height: "60vh",
        backgroundColor: `${bgColor}`,
        border: "2px solid black",
        color: `${textColor}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <button
        onClick={handelBtnClick}
        style={{ top: 0, right: 0, position: "absolute" }}
      >
        {isDarkMode ? "Light mode" : " Dark mode"}
      </button>

      <h1>welcome to applute</h1>
    </div>
  );
}

export default BgMode;
