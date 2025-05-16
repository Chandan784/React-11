import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  console.log(navigate, "naviagte");

  setTimeout(() => {
    navigate("/about");
  }, 3000);

  return (
    <>
      <div style={{ height: "80vh", backgroundColor: "green" }}>
        Home
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          contact
        </button>
      </div>
      ;
    </>
  );
}

export default Home;
