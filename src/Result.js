export default function Result({ apiData }) {
  function calculateFullness(data) {
    const protein = data.protein_g;
    const carbs = data.carbohydrates_total_g - data.fiber_g - data.sugar_g;
    const fat = data.fat_total_g;
    const fiber = data.fiber_g;
    const sugar = data.sugar_g;

    // weights
    const proteinWeight = 2;
    const carbsWeight = 0.75;
    const fatWeight = -0.5;
    const fiberWeight = 2;
    const sugarWeight = -1;

    let result =
      protein * proteinWeight +
      carbs * carbsWeight +
      fat * fatWeight +
      fiber * fiberWeight +
      sugar * sugarWeight;

    if (typeof result === "number" && !Number.isNaN(result)) {
      // Normalize score to num between 1 and 10
      const minScore = -100; // possible min
      const maxScore = 100; // possible max

      result = ((result - minScore) / (maxScore - minScore)) * 9 + 1;

      // Clamp result between 1 and 10
      result = Math.max(1, Math.min(10, result));

      return result.toFixed(1);
    }

    return "???";
  }

  const potatoData = {
    calories: 92.7,
    carbohydrates_total_g: 21,
    cholesterol_mg: 0,
    fat_saturated_g: 0,
    fat_total_g: 0.1,
    fiber_g: 2.2,
    name: "potato",
    potassium_mg: 70,
    protein_g: 2.5,
    serving_size_g: 100,
    sodium_mg: 10,
    sugar_g: 1.2,
  };

  const data = apiData ? apiData : potatoData;
  console.log(data, calculateFullness(data));

  return (
    <>
      <div className="results">
        <h1 className="food-name">
          {data.name ? data.name[0].toUpperCase() : "Loading..."}
          {data.name ? data.name.slice(1) : ""}
        </h1>
        <h3 className="food-satisfaction">
          Satisfaction rating:
          {` ${calculateFullness(data)}`} / 10
        </h3>
        <p>
          Serving size (g): <strong>{data.serving_size_g}</strong>
        </p>
        <p>
          Calories: <strong>{data.calories}</strong>
        </p>
        <p>
          Protein: <strong>{data.protein_g}</strong>
        </p>
        <p>
          Fat: <strong>{data.fat_total_g}</strong>
        </p>
        <p>
          Carbohydrates: <strong>{data.carbohydrates_total_g}</strong>
        </p>
        <p className="indent">
          Fiber: <strong>{data.fiber_g}</strong>
        </p>
        <p className="indent">
          Sugar: <strong>{data.sugar_g}</strong>
        </p>
        <h1
          className="score"
          style={{
            color:
              calculateFullness(data) >= 5
                ? "var(--good-color)"
                : "var(--bad-color)",
          }}
        >
          {calculateFullness(data)}
          <span className="out-of">/10</span>
        </h1>
      </div>
    </>
  );
}
