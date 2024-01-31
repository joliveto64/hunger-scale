export default function Modal() {
  return (
    <div className="modal">
      <h1>What is Hunger Scale?</h1>
      <p>
        This is not a health app! Hunger scale looks at nutrition information
        and determines how satisfying (satiating) a particular food is likely to
        be. Choosing foods which are more satisfying can help you feel more
        full.
      </p>
      <h3>Satiety</h3>
      <p>
        <strong>
          A state or condition of fullness; the opposite of hunger.
        </strong>
      </p>
      <p>
        Certain nutritional details (like high fiber and protein) are thought to
        indicate greater satiety whereas others (like high sugar and high
        caloric density) are thought to indicate lesser satiety. A rating of 6
        or higher indicates generally higher satisfaction, whereas a rating of 4
        or less indicates generally lower satisfaction. 100g is standardized by
        default to produce consistent comparisons unless otherwise specified.{" "}
      </p>
      <p>
        Limitations: this app is intended to be used as a general guide. There
        are many factors to include when considering levels of satisfaction,
        some of which are not taken into account in Hunger Scale. Lastly,
        satiety is partially subjective. Some people might find the same food to
        be more or less satisfying than someone else. Because of this, Hunger
        Scale is best used to compare the relative satiety between foods. Some
        foods that are not typically considered "healthy" may indicate a high
        level of satisfaction, this is correct and expected behavior.{" "}
      </p>
    </div>
  );
}
