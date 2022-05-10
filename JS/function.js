/* Accés aux input */

const inputIng = document.getElementById("ingredients");
const inputAppareils = document.getElementById("appareils");
const inputUstensils = document.getElementById("ustensils");
const inputRecherche = document.getElementById("barre-de-recherche");

/* Accés aux value */
const inputIngValue = document.getElementById("ingredients").value;
const inputAppareilsValue = document.getElementById("appareils").value;
const inputUstensilsValue = document.getElementById("ustensils").value;
const inputRechercheValue = document.getElementById("barre-de-recherche").value;

/* Accés aux container des input */

const ingredientContainer = document.getElementById(
 "filtre-container-ingredients"
);
const appareilsContainer = document.getElementById(
 "filtre-container-appareils"
);
const ustensilsContainer = document.getElementById(
 "filtre-container-ustensils"
);

let ingredientsArray = [];
let appareilsArray = [];
let ustensilsArray = [];
let findArticlesArray = [];

let ingredientsArrayV2 = [];
let appareilsArrayV2 = [];
let ustensilsArrayV2 = [];
let findArticlesArrayV2 = [];

let ingredients = [];
let appliance = [];
let ustensils = [];

let searchingRecipes = [];
let isSearching = false;
let criteriasArray = [];

/* Afficher les recettes */
let cardsIngredientsArray = [];
let cardsAppareilArray = [];
let cardsUstensilsArray = [];

const filtreListeIngredients = document.getElementById(
 "filtre-liste-ingredients"
);
const filtreListeAppareils = document.getElementById("filtre-liste-appareils");
const filtreListeUstensils = document.getElementById("filtre-liste-ustensils");

const ingredientItem = document.getElementsByClassName("ingredientItem");
const appareilItem = document.getElementsByClassName("appareilItem");
const ustensilItem = document.getElementsByClassName("ustensilItem");

/* Accés a la liste des input valider */
const findArticles = document.getElementById("liste-findArticles");

/* Accés aux fleches des input valider */
const arrowIng = document.getElementById("ingredient-arrow-id");
const arrowboxIng = document.getElementById("ingredient-arrow");
const arrowAppareils = document.getElementById("appareil-arrow-id");
const arrowboxAppareils = document.getElementById("appareil-arrow");
const arrowUstensils = document.getElementById("ustensil-arrow-id");
const arrowboxUstensils = document.getElementById("ustensil-arrow");

/* Fonction pour afficher les items de recherche et les suprimez */
function createDiv(value, style) {
 let containerItem = document.getElementById("liste-findArticles");
 const item = `
    <li id="${value}"class="lato ${style}"value="${value}">${value}<i onclick="deleteDiv('${value}')" class="fa-solid fa-xmark"></i></li>`;
 containerItem.innerHTML += item;
 criteriasArray.push(value);
 filterRecipesElement();
}

let results = [];

// Trier les recettes au clique sur un element des inputs
function filterRecipesElement() {
 criteriasArray.forEach((criteria) => {
  const foundRecipes = recipes.filter((item) =>
   item.name.toLowerCase().includes(criteria.toLowerCase())
  );
  const foundIngredients = recipes.filter((item) =>
   item.ingredients.find((el) =>
    el.ingredient.toLowerCase().includes(criteria.toLowerCase())
   )
  );
  const foundDescription = recipes.filter((item) =>
   item.description.toLowerCase().includes(criteria.toLowerCase())
  );
  results = [
   ...new Set([...foundRecipes, ...foundIngredients, ...foundDescription]),
  ];

  searchingRecipes = results;
 });
 if (criteriasArray.length === 0) {
  recipesCards(recipes);

  getIngredients(recipes);
  handleIngredients();

  getAppareils(recipes);
  handleAppareils();

  getUstensils(recipes);
  handleUstensils();
 } else {
  recipesCards(searchingRecipes);

  getIngredients(searchingRecipes);
  handleIngredients();

  getAppareils(searchingRecipes);
  handleAppareils();

  getUstensils(searchingRecipes);
  handleUstensils();
 }
}

function deleteDiv(value) {
 let elt = document.getElementById(value);
 elt.remove();
 criteriasArray = criteriasArray.filter((elt) => elt !== value);
 filterRecipesElement();
 console.log(criteriasArray);
 console.log(searchingRecipes);
}
