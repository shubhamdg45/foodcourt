const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");

// Render recipe cards on Home page
function renderRecipes() {
  const recipes = getRecipes();
  let filtered = recipes;

  const search = searchInput.value.toLowerCase();

  // Search filter
  filtered = filtered.filter((r) =>
    r.title.toLowerCase().includes(search)
  );

  // Difficulty filter
  if (difficultyFilter.value !== "all") {
    filtered = filtered.filter(
      (r) => r.difficulty === difficultyFilter.value
    );
  }

  // No recipes message
  if (filtered.length === 0) {
    grid.innerHTML = `
      <p class="no-recipes">No recipes found.</p>
    `;
    return;
  }

  // Render recipe cards
  grid.innerHTML = filtered
    .map(
      (r) => `
        <div class="card" onclick="location.href='recipe.html?id=${r.id}'">
            <img src="${r.image || "https://via.placeholder.com/300"}" />
            <h3>${r.title}</h3>
            <p>${r.description.length > 60 ? r.description.substring(0, 60) + "..." : r.description}</p>
            <small>${r.difficulty} • ${r.prep} mins</small>
        </div>
        `
    )
    .join("");
}

// Event listeners
searchInput.addEventListener("input", renderRecipes);
difficultyFilter.addEventListener("change", renderRecipes);

// Initial render
renderRecipes();

// Hamburger menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
