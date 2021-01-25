import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  //SIkhfMxSrmtPJUAQKEL6FBL1P8diE2z8ekIK - BqNTJk
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=SIkhfMxSrmtPJUAQKEL6FBL1P8diE2z8ekIK-BqNTJk&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => fetchImages()}>send</button>
      </div>
    </div>
  );
}

export default App;
