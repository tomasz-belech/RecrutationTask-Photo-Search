import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  //SIkhfMxSrmtPJUAQKEL6FBL1P8diE2z8ekIK - BqNTJk
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=SIkhfMxSrmtPJUAQKEL6FBL1P8diE2z8ekIK-BqNTJk&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };
  return (
    <div className="App">
      <div className="mydiv">
        <div className="container">
          <span>Search</span>
          <input
            style={{ width: "60%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => fetchImages()}>send</button>
        </div>
        <div className="gallery">
          {results.map((item) => {
            return (
              <img className="image" key={item.id} src={item.urls.regular} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
