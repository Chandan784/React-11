import React, { useEffect } from "react";
import Nodata from "./components/Nodata";
import BgMode from "./components/BgMode";

function App() {
  let bookData = [
    {
      title: "math",
    },
    {
      title: "computer science",
    },
    {
      title: "physics",
    },
    {
      title: "chemistry",
    },
  ];

  useEffect(() => {
    console.log("hii i am in use effect");
  }, [id]);

  return (
    <>
      <div>
        {bookData.length == 0 ? (
          <Nodata />
        ) : (
          bookData.map((book) => {
            return <h1>{book.title}</h1>;
          })
        )}
      </div>

      <BgMode />
    </>
  );
}

export default App;
