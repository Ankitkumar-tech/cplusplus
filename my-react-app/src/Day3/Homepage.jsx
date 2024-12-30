import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);

  function handleClick() {
    if (val === "") {
      alert("Add some value first");
    } else {
      // adhfda

   
      setData((prev) => [...prev, val]);
      setVal("");
    }
  }

  console.log(data);

  return (
    <div>

      <Link to={'/'}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/taskDetail"}>Task Details</Link>
      <h1>Task Manager App.</h1>
      {/* Add a navigation */}
      <input
        type="text"
        onChange={(e) => setVal(e.target.value)}
        placeholder="Add Your Task"
        value={val}
      />
      <button onClick={handleClick}>Add New Task</button>

      <h2>All Tasks</h2>

      {data.length === 0 ? (
        <p>No Task Available</p>
      ) : (
        <>
          {data.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Homepage;
