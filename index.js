/**
 * Recipe Finder App - JavaScript Implementation
 * 
 * This application allows users to search for recipes using TheMealDB API.
 * Features include:
 * - Search recipes by keywords
 * - Display recipe cards with images and basic info
 * - View detailed recipe information including ingredients and instructions
 * - Responsive design with error handling
 * 

 */



/**
 * Core DOM elements for user interaction and content display
 */
const searchInput = document.getElementById("search-input");        // Search input field
const searchBtn = document.getElementById("search-btn");           // Search button
const mealsContainer = document.getElementById("meals");           // Container for meal cards
const resultHeading = document.getElementById("result-heading");    // Results heading text
const errorContainer = document.getElementById("error-container");  // Error message container
const mealDetails = document.getElementById("meal-details");       // Meal details modal
const mealDetailsContent = document.querySelector(".meal-details-content"); // Meal details content
const backBtn = document.getElementById("back-btn");               // Back button for meal details

// ============================================================================
// API CONFIGURATION
// ============================================================================

/**
 * TheMealDB API endpoints
 * Base URL for the free meal database API
 */
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";
const SEARCH_URL = `${BASE_URL}search.php?s=`;  // Search meals by name
const LOOKUP_URL = `${BASE_URL}lookup.php?i=`;  // Get meal details by ID

// ============================================================================
// EVENT LISTENERS
// ============================================================================

/**
 * Initialize all event listeners for user interactions
 */
searchBtn.addEventListener("click", searchMeals);


mealsContainer.addEventListener("click", handleMealClick);


backBtn.addEventListener("click", () => mealDetails.classList.add("hidden"));

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchMeals();
});


/**
 * Main search function that fetches recipes from TheMealDB API
 * 
 * This function:
 * 1. Validates the search input
 * 2. Makes API request to search for meals
 * 3. Handles the response and displays results
 * 4. Manages error states and user feedback
 * 

 */
async function searchMeals() {
  const searchTerm = searchInput.value.trim();

  // Input validation - ensure user provides a search term
  if (!searchTerm) {
    errorContainer.textContent = "Please enter a search term";
    errorContainer.classList.remove("hidden");
    return;
  }

  try {
    // Update UI to show search is in progress
    resultHeading.textContent = `Searching for "${searchTerm}"...`;
    mealsContainer.innerHTML = "";
    errorContainer.classList.add("hidden");

    // Fetch meals from TheMealDB API
    // API endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s={searchTerm}
    const response = await fetch(`${SEARCH_URL}${searchTerm}`);
    const data = await response.json();

    if (data.meals === null) {
      // No meals found - display appropriate message
      resultHeading.textContent = ``;
      mealsContainer.innerHTML = "";
      errorContainer.textContent = `No recipes found for "${searchTerm}". Try another search term!`;
      errorContainer.classList.remove("hidden");
    } else {
      // Meals found - display results
      resultHeading.textContent = `Search results for "${searchTerm}":`;
      displayMeals(data.meals);
      searchInput.value = ""; // Clear search input after successful search
    }
  } catch (error) {
    // Handle network or API errors
    console.error("Search error:", error);
    errorContainer.textContent = "Something went wrong. Please try again later.";
    errorContainer.classList.remove("hidden");
  }
}



/**
 * Renders meal cards in the meals container
 * 
 * Creates HTML cards for each meal with:
 * - Meal thumbnail image
 * - Meal name
 * - Category (if available)
 * - Click handler for detailed view
 * 

 */
function displayMeals(meals) {
  mealsContainer.innerHTML = "";

  // Loop through meals and create a card for each meal
  meals.forEach((meal) => {
    mealsContainer.innerHTML += `
      <div class="meal" data-meal-id="${meal.idMeal}">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info">
          <h3 class="meal-title">${meal.strMeal}</h3>
          ${meal.strCategory ? `<div class="meal-category">${meal.strCategory}</div>` : ""}
        </div>
      </div>
    `;
  });
}



/**
 * Handles clicks on meal cards to show detailed recipe information
 * 
 * This function:
 * 1. Fetches detailed meal information by ID
 * 2. Extracts ingredients and measurements
 * 3. Renders detailed meal view with instructions
 * 4. Includes YouTube link if available

 */
async function handleMealClick(e) {
  const mealEl = e.target.closest(".meal");
  if (!mealEl) return; // Exit if click wasn't on a meal card

  const mealId = mealEl.getAttribute("data-meal-id");

  try {
    // Fetch detailed meal information by ID
    // API endpoint: https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
    const response = await fetch(`${LOOKUP_URL}${mealId}`);
    const data = await response.json();

    if (data.meals && data.meals[0]) {
      const meal = data.meals[0];

      // Extract ingredients and measurements from meal data
      // TheMealDB stores ingredients as strIngredient1, strIngredient2, etc.
      // and measurements as strMeasure1, strMeasure2, etc.
      const ingredients = [];

      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {
          ingredients.push({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`],
          });
        }
      }

      // Display comprehensive meal details
      mealDetailsContent.innerHTML = `
           <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-details-img">
           <h2 class="meal-details-title">${meal.strMeal}</h2>
           <div class="meal-details-category">
             <span>${meal.strCategory || "Uncategorized"}</span>
           </div>
           <div class="meal-details-instructions">
             <h3>Instructions</h3>
             <p>${meal.strInstructions}</p>
           </div>
           <div class="meal-details-ingredients">
             <h3>Ingredients</h3>
             <ul class="ingredients-list">
               ${ingredients
          .map(
            (item) => `
                 <li><i class="fas fa-check-circle"></i> ${item.measure} ${item.ingredient}</li>
               `
          )
          .join("")}
             </ul>
           </div>
           ${meal.strYoutube
          ? `
             <a href="${meal.strYoutube}" target="_blank" class="youtube-link">
               <i class="fab fa-youtube"></i> Watch Video
             </a>
           `
          : ""
        }
         `;

      // Show meal details modal and scroll to it
      mealDetails.classList.remove("hidden");
      mealDetails.scrollIntoView({ behavior: "smooth" });
    }
  } catch (error) {
    // Handle errors when fetching meal details
    console.error("Meal details error:", error);
    errorContainer.textContent = "Could not load recipe details. Please try again later.";
    errorContainer.classList.remove("hidden");
  }
}