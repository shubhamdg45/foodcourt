const STORAGE_KEY = "recipes";

function initStorage() {
  let data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    const defaultRecipes = [
      {
        id: Date.now(),
        title: "Paneer Masala",
        description: "A flavorful paneer masala cooked using Indian spices.",
        ingredients: [
          "200g paneer",
          "1 onion",
          "1 tomato",
          "1/2 cup fresh cream",
          "1 tsp ginger-garlic paste",
          "1 green chili",
          "8-10 coriander leaves",
          "1/2 tsp red chili powder",
          "1/4 tsp turmeric",
          "1 tsp garam masala",
          "1/2 tsp cumin powder",
          "1.5 tsp salt",
          "25 ml oil",
          "1/2 cup water"
        ],
        steps: [
          "Chop onion, tomato, chili, coriander.",
          "Cut paneer into cubes.",
          "Heat oil in a deep pan.",
          "Add onions and sauté until golden.",
          "Add ginger-garlic paste and sauté 1 minute.",
          "Add tomatoes & cook until mushy.",
          "Add all powdered spices and mix well.",
          "Add paneer cubes and gently mix.",
          "Add water & cream and simmer 5–7 mins.",
          "Turn off flame and garnish with coriander.",
          "Serve hot with roti or rice."
        ],
        prep: 30,
        difficulty: "Medium",
        image:
          "https://images.pexels.com/photos/5127316/pexels-photo-5127316.jpeg"
      },

      {
        id: Date.now() + 1,
        title: "Maggi Masala",
        description: "Quick and tasty Maggi masala noodles.",
        ingredients: [
          "1 packet Maggi noodles",
          "1 onion",
          "1 tomato",
          "1 carrot",
          "1/4 cup green peas",
          "1 green chili (optional)",
          "1 tsp oil",
          "1/4 tsp turmeric",
          "1/4 tsp red chili powder",
          "1/4 tsp salt",
          "Maggi tastemaker",
          "1/2 cup water"
        ],
        steps: [
          "Chop onion, tomato, carrot, chili.",
          "Heat oil in a pan.",
          "Sauté onions for 2 mins.",
          "Add veggies and cook 2 mins.",
          "Add turmeric, chili powder, salt.",
          "Add water and bring to boil.",
          "Add Maggi noodles (broken).",
          "Add tastemaker and mix.",
          "Cook 2–3 mins until soft.",
          "Serve hot."
        ],
        prep: 15,
        difficulty: "Easy",
        image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg"
      },

      {
        id: Date.now() + 2,
        title: "Veg Momos",
        description: "Soft steamed vegetable-stuffed momos.",
        ingredients: [
          "2 cups all-purpose flour",
          "1/2 cup water",
          "1 cabbage (finely chopped)",
          "1 carrot (finely chopped)",
          "1 onion (finely chopped)",
          "1/2 tsp ginger-garlic paste",
          "1 tbsp soy sauce",
          "Salt & pepper to taste"
        ],
        steps: [
          "Knead dough with flour, salt, and water.",
          "Heat oil and sauté ginger-garlic paste.",
          "Add chopped veggies and cook 5 minutes.",
          "Add soy sauce, salt, and pepper.",
          "Roll dough into small circles.",
          "Fill with veggie mixture.",
          "Fold and shape momos.",
          "Steam for 10–12 minutes.",
          "Serve hot with momo chutney."
        ],
        prep: 40,
        difficulty: "Medium",
        image:
          "https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg"
      }
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultRecipes));
  }
}

initStorage();
