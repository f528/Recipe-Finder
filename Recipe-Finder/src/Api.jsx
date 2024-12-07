// api.js
export const getRecipes = async () => {
    const api = "e3c7fea020f04e81b10950c384111372";
  const response = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=api"
  );
  const data = await response.json();
  return data.results; // Restituisce le ricette
};
