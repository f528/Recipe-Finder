import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "../api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const data = await getRecipes(query);
    setRecipes(data);
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>No recipes found. Try searching something!</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
