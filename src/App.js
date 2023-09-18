import { data } from "./data";

function App() {
  let query = "100g potato";
  const apiKey = "IsI8cnFPSFh0lBs+qBH+tg==Z4YzbUlY7QWxrKIo";

  async function fetchNutritionData() {
    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.items[0]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  fetchNutritionData();
  console.log(data.length);

  return <div className="App"></div>;
}

export default App;
