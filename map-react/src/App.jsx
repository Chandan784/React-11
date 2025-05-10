import React from "react";
import ProductCard from "./components/ProductCard";
import StudentCard from "./components/StudentCard";
import Products from "./components/Products";

function App() {
  let students = ["chandan", "benziman", "harika"];

  return (
    <div>
      <Products />

      <div className="students">
        {students.map((stu) => {
          return <StudentCard studentName={stu} />;
        })}
      </div>
    </div>
  );
}

export default App;
