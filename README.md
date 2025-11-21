#  Recipe Manager

A **responsive and interactive web application** to manage your favorite recipes. Users can **add, edit, delete, view, and search recipes** with ease. This project uses **HTML, CSS, JavaScript, and localStorage** to persist data.

---

## Features

- **Add/Edit Recipes** with:
  - Title, Description
  - Ingredients (comma or newline separated)
  - Steps (comma or newline separated)
  - Preparation time
  - Difficulty level (Easy, Medium, Hard)
  - Image URL with **live preview**

- **Recipe List**:
  - Search recipes by title
  - Filter by difficulty
  - Responsive card layout
  - Hover effects for better interaction

- **Recipe Details**:
  - View ingredients and steps in a structured layout
  - Edit or delete recipes directly
  - Smart Cancel button in form (returns to detail or home page)

- **Responsive Design**:
  - Works on desktop, tablet, and mobile
  - Hamburger menu on small screens

- **Persistent Storage**:
  - Recipes are stored in **localStorage** so they persist across sessions

- **Interactive Features**:
  - Real-time character/item count
  - Live image preview
  - Save button disabled until all required fields are filled
  - Confirmation dialogs for cancel and delete

---



---

## How to Run the App

This project is fully front-end and does **not require a backend**. Follow these steps:

### 1. Clone or Download the Repository
**Clone using Git:**
```bash```
git clone https://github.com/shubhamdg45/recipe_manager.git


# Or download ZIP:

Click Code → Download ZIP on GitHub.

Extract the ZIP to a folder.

2. Open the Project in a Browser

Navigate to the project folder.

Open index.html in a web browser (Chrome, Firefox, Edge, etc.).


## Using the App

Home Page (index.html): Browse recipes, search by name, filter by difficulty.

Add Recipe (form.html): Click Add Recipe, fill the form, click Save, or Cancel to return.

Edit Recipe: Open a recipe → click Edit, update the form, and Save.

Delete Recipe: Open a recipe → click Delete → confirm deletion.

## Data Structure in localStorage

Recipes are stored in localStorage under the key recipes as a JSON array of objects.

```

[
  {
    "id": 1699999999999,
    "title": "Paneer Masala",
    "description": "A flavorful paneer masala cooked using Indian spices.",
    "ingredients": [
      "200g paneer",
      "1 onion",
      "1 tomato"
    ],
    "steps": [
      "Chop onion, tomato, chili, coriander.",
      "Cut paneer into cubes."
    ],
    "prep": 30,
    "difficulty": "Medium",
    "image": "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg"
  }
]
```
### Assumptions and Limitations

Recipes are stored only in localStorage, so they are browser-specific.

Users must provide valid image URLs; no file upload is implemented.

Ingredients and steps can be comma-separated or newline-separated.

No authentication or multi-user support.

No strict validation beyond required fields.

LocalStorage has a size limit (~5MB), so very large data sets may cause issues.

### Known Issues

Images: Broken URLs show a placeholder image.

Sorting: Recipes cannot be sorted by prep time or difficulty.

Mobile Layout: Long recipe titles may overflow on small screens.

No Undo: Deleted recipes cannot be restored.

Validation: Numeric fields (prep time) are only validated using HTML input type.

### Author

Shubham Giram

GitHub: @shubhamdg45

LinkedIn: Shubham Giram

Made with  using JavaScript, HTML, and CSS

---

✅ This README now **includes step-by-step instructions to run the app**, both by opening `index.html` directly and using a local server.  

If you want, I can also **add screenshots of Home, Form, and Detail pages inside the README**—this makes it **more visually appealing for assessment submissions**.  

Do you want me to add screenshots as well?
