const form = document.getElementById("recipeForm");
const params2 = new URLSearchParams(location.search);
const editId = params2.get("id");

// If editing
if (editId) {
  document.getElementById("formTitle").innerText = "Edit Recipe";
  loadRecipeForEdit(editId);
}

// Load recipe into form for editing
function loadRecipeForEdit(id) {
  const r = getRecipe(id);

  title.value = r.title;
  description.value = r.description;
  
  // Join ingredients & steps with newlines for cleaner editing
  ingredients.value = r.ingredients.join("\n");
  steps.value = r.steps.join("\n");

  prep.value = r.prep;
  difficulty.value = r.difficulty;
  image.value = r.image;
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipeData = {
    title: title.value.trim(),
    description: description.value.trim(),
    ingredients: ingredients.value
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0),

    steps: steps.value
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0),

    prep: Number(prep.value),
    difficulty: difficulty.value,
    image: image.value.trim()
  };

  if (editId) {
    updateRecipe(Number(editId), recipeData);
  } else {
    addRecipe(recipeData); // addRecipe will auto-create ID
  }

  location.href = "index.html";
});
