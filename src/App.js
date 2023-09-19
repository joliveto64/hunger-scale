import React, { useEffect, useState } from "react";
import Result from "./Result";

function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});

  // api stuff ///////////////////////////////////////////////////////
  async function fetchNutritionData(text) {
    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${text}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "IsI8cnFPSFh0lBs+qBH+tg==Z4YzbUlY7QWxrKIo",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data.items[0]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchNutritionData("potato");
  }, []);

  function handleSearch() {
    fetchNutritionData(inputText);
    setInputText("");
  }

  // user events //////////////////////////////////////////////////
  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    handleSearch();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="App">
      <div className="top-container">
        <h1 className="title">Hunger Scale ⚖️</h1>
        <input
          onKeyDown={handleKeyDown}
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="(fav food here)"
          className="input"
        />
        <button onClick={handleClick} className="button">
          Search
        </button>
      </div>
      <Result apiData={data} />
    </div>
  );
}

export default App;
