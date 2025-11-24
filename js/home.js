const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");
const prepTimeFilter = document.getElementById("preptimeFilter");

// Render recipe cards
function renderRecipes() {
  const recipes = getRecipes(); // your function to fetch recipes
  const search = searchInput.value.toLowerCase();

  // Filter by search
  let filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(search)
  );

  // Filter by difficulty
  if (difficultyFilter && difficultyFilter.value !== "all") {
    filtered = filtered.filter(r => r.difficulty === difficultyFilter.value);
  }

  // Filter by prep time
  if (prepTimeFilter && prepTimeFilter.value !== "all") {
    const maxPrep = parseInt(prepTimeFilter.value, 10);
    filtered = filtered.filter(r => {
      const prepTime = typeof r.prep === "string" ? parseInt(r.prep, 10) : r.prep;
      return prepTime <= maxPrep;
    });
  }

  // If no recipes found
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-recipes">No recipes found.</p>`;
    return;
  }

  // Render filtered recipes
  grid.innerHTML = filtered.map(r => `
    <div class="card reveal">
      <div class="card-image">
        <img src="${r.image || 'https://via.placeholder.com/300'}" alt="${r.title}">
      </div>
      <div class="card-content">
        <h3>${r.title}</h3>
        <p>${r.description.length > 80 ? r.description.substring(0, 80) + "..." : r.description}</p>
        <small>${r.difficulty} • ${r.prep} mins</small>
        <button class="view-btn" onclick="location.href='recipe.html?id=${r.id}'">View Recipe</button>
      </div>
    </div>
  `).join("");

  revealOnScroll(); // trigger scroll reveal animation
}

// Event listeners for filters and search
searchInput.addEventListener("input", renderRecipes);
difficultyFilter.addEventListener("change", renderRecipes);
prepTimeFilter.addEventListener("change", renderRecipes);

// Hamburger menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("active"));
}
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  showToast(document.body.classList.contains("dark") ? "Dark Mode Enabled" : "Light Mode Enabled");
});

// Toast notifications
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// Scroll reveal animation
window.addEventListener("scroll", revealOnScroll);
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("active");
  });
}

// Initial render
renderRecipes();
revealOnScroll();
