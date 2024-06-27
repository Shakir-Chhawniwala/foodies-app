import MealItem from "./meal-item";
import styles from "./meals-gid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul>
        {meals.map((meals) => (
          <li key={meals.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
