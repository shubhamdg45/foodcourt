function getRecipes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveRecipes(recipes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function getRecipe(id) {
  return getRecipes().find((r) => r.id == id);
}

function addRecipe(recipe) {
  recipe.id = Date.now(); // generate unique ID
  const data = getRecipes();
  data.push(recipe);
  saveRecipes(data);
}

function updateRecipe(id, updatedRecipe) {
  updatedRecipe.id = id; // keep the same ID
  const data = getRecipes().map((r) => (r.id == id ? updatedRecipe : r));
  saveRecipes(data);
}

function deleteRecipe(id) {
  saveRecipes(getRecipes().filter((r) => r.id != id));
}
