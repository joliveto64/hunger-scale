export default function Result({ data }) {
  function calculateFullness(data) {
    const result =
      data.fiber_g +
      data.protein_g +
      (data.carbohydrates_total_g - data.sugar_g) /
        (data.calories / data.serving_size_g);

    return typeof result === "number" && !Number.isNaN(result)
      ? result.toFixed(1)
      : "???";
  }

  console.log(data, calculateFullness(data));

  return (
    <>
      <div className="results">
        <h1 className="food-name">
          {data.name ? data.name[0].toUpperCase() : "Loading..."}
          {data.name ? data.name.slice(1) : ""}
        </h1>
        <h3 className="food-satisfaction">
          Level of satisfaction (per 100g):
          {` ${calculateFullness(data)}`}
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

// calories
// :
// 262.9
// carbohydrates_total_g
// :
// 32.9
// cholesterol_mg
// :
// 16
// fat_saturated_g
// :
// 4.5
// fat_total_g
// :
// 9.8
// fiber_g
// :
// 2.3
// name
// :
// "pizza"
// potassium_mg
// :
// 217
// protein_g
// :
// 11.4
// serving_size_g
// :
// 100
// sodium_mg
// :
// 587
// sugar_g
// :
// 3.6
