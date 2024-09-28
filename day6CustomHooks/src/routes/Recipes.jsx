import { useState } from "react";
import { useRecipes } from "../hooks/API.js";
import "../App.css";

export const Recipes = () => {
  const [page, setPage] = useState(0);
  const recipes = useRecipes(page);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes?.recipes.map((recipe) => (
          <li key={recipe.id}>
            <div
              className="product-image"
              style={{ backgroundImage: `url("${recipe.image}")` }}
            />
            {recipe.name}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)}>⬅️</button>
        Page {page}
        <button onClick={() => setPage(page + 1)}>➡️</button>
      </div>
    </div>
  );
};
