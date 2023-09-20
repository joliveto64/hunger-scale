export default function Result({ apiData }) {
  const potatoData = {
    calories: "???",
    carbohydrates_total_g: "???",
    cholesterol_mg: "???",
    fat_saturated_g: "???",
    fat_total_g: "???",
    fiber_g: "???",
    name: "Try again...",
    potassium_mg: "???",
    protein_g: "???",
    serving_size_g: "???",
    sodium_mg: "???",
    sugar_g: "???",
  };

  const data = apiData ? apiData : potatoData;
  const fullness = calculateFullness(data) || 5;
  //   const caloricDensity = (data.calories / data.serving_size_g).toFixed(1);
  const foodName =
    (data.name ? data.name[0].toUpperCase() : "Loading...") +
    (data.name ? data.name.slice(1) : "");
  const styles = {
    backgroundColor:
      calculateFullness(data) >= 5
        ? "var(--good-color)"
        : calculateFullness(data) <= 3
        ? "var(--bad-color)"
        : "var(--okay-color)",
    width: `${fullness * 10}%`,
  };

  function calculateFullness(data) {
    const protein = data.protein_g;
    const carbs = data.carbohydrates_total_g - data.fiber_g - data.sugar_g;
    const fat = data.fat_total_g;
    const fiber = data.fiber_g;
    const sugar = data.sugar_g;
    const density = (data.calories / data.serving_size_g).toFixed(1);

    // weights
    const proteinWeight = 2;
    const carbsWeight = 0.75;
    const fatWeight = -0.5;
    const fiberWeight = 2;
    const sugarWeight = -1;
    const densityWeight = -10;

    let result =
      protein * proteinWeight +
      carbs * carbsWeight +
      fat * fatWeight +
      fiber * fiberWeight +
      sugar * sugarWeight +
      density * densityWeight;

    if (typeof result === "number" && !Number.isNaN(result)) {
      // normalize score between 1 and 10
      const minScore = -100; // possible min
      const maxScore = 100; // possible max

      result = ((result - minScore) / (maxScore - minScore)) * 9 + 1;

      // clamp result between 1 and 10
      result = Math.max(1, Math.min(10, result));

      return result.toFixed(1);
    }

    return " ???";
  }

  return (
    <>
      <div className="results">
        <h1 className="food-name">{foodName}</h1>
        <h3 style={styles} className="food-satisfaction">
          Satisfaction rating:
          {fullness} / 10
        </h3>
        {/* <p>
          Caloric density: <strong>{caloricDensity} kcal/g</strong>
        </p> */}
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
      </div>
    </>
  );
}
