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

let ingredients = [];
let appliance = [];
let ustensils = [];

let searchingRecipes = [];
let isSearching = false;
let criteriasArray = [];

const filtreListeIngredients = document.getElementById(
 "filtre-liste-ingredients"
);
const filtreListeAppareils = document.getElementById("filtre-liste-appareils");
const filtreListeUstensils = document.getElementById("filtre-liste-ustensils");

/* const listeIngredients = document.getElementById("filtre-liste-ingredients");
const listeAppareils = document.getElementById("filtre-liste-appareils");
const listeUstensils = document.getElementById("filtre-liste-ustensils"); */

const ingredientItem = document.getElementsByClassName("ingredientItem");
const appareilItem = document.getElementsByClassName("appareilItem");
const ustensilItem = document.getElementsByClassName("ustensilItem");

/* Accés a la liste des input valider */
const findArticles = document.getElementById("liste-findArticles");

/* tableaux des ingredients sans doublon */

function getIngredients(recipes) {
 let ingredients = [];
 for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
   ingredients.push(recipes[i].ingredients[j].ingredient.toLowerCase());
  }
 }
 ingredientsArray = Array.from(new Set(ingredients));
}

getIngredients(recipes);

/* tableaux des appareils sans doublon */

function getAppareils(recipes) {
 let appliance = [];
 for (let i = 0; i < recipes.length; i++) {
  appliance.push(recipes[i].appliance);
 }
 appareilsArray = Array.from(new Set(appliance));
}

getAppareils(recipes);

/* tableaux des ustensils sans doublon */

function getUstensils(recipes) {
 for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
   ustensils.push(recipes[i].ustensils[j].toLowerCase());
  }
 }
 ustensilsArray = Array.from(new Set(ustensils));
}

getUstensils(recipes);

/* Afficher les recettes */
let cardsIngredientsArray = [];
let cardsAppareilArray = [];
let cardsUstensilsArray = [];

function recipesCards(recipes) {
 let container = document.getElementById("recipes_container");
 container.innerHTML = "";
 for (let i = 0; i < recipes.length; i++) {
  let cards = `
    <article class="recipes_cards">
  <img src="..." alt="..." class="recipes_cards--image" />
  <h5 class="--description__ingredients--title lato">
  <span class="--description__ingredients--name">${recipes[i].name}</span>
  <span class="--description__excplication--timer"><i class="fa-solid fa-clock fa-2x"></i> ${recipes[i].time} min</span>
  </h5>
  <div class="recipes_cards--description">
    <div class="--description__ingredients">
    <ul class="liste-description lato" id="liste-ing-${recipes[i].id}"></ul>
    </div>
    <div class="--description__excplication roboto">
      ${recipes[i].description}
  </div>
</article>
    `;

  container.innerHTML += cards;

  let liste = document.getElementById("liste-ing-" + recipes[i].id);

  recipes[i].ingredients.forEach((ing) => {
   let displayIng = `
      <li><span class="bold">${ing.ingredient}</span>: ${
    ing.quantity ? ing.quantity : ""
   }
         ${ing.unit ? ing.unit : ""}</li>
      `;
   liste.innerHTML += displayIng;
  });
 }
}

recipesCards(recipes);

const arrowIng = document.getElementById("ingredient-arrow-id");
const arrowboxIng = document.getElementById("ingredient-arrow");

function handleIngredients() {
 arrowboxIng.addEventListener("click", function () {
  let index = 0;
  filtreListeIngredients.style.display = "grid";
  filtreListeIngredients.innerHTML = " ";
  arrowUp(inputIng, arrowIng, arrowboxIng);
  for (let i = 0; i < ingredientsArray.length; i++) {
   let listeItems = `
                <li class="ingredientItem" value="${
                 ingredientsArray[i]
                }" onclick="createDiv('${
    ingredientsArray[i]
   }', 'ingredientItem', ${index++})">${ingredientsArray[i]}</li>
                `;
   console.log(ingredientsArray[i]);
   filtreListeIngredients.innerHTML += listeItems;
  }
 });
}

handleIngredients();

filtreListeIngredients.addEventListener("click", function () {
 filtreListeIngredients.style.display = "none";
 filtreListeIngredients.innerHTML = " ";
 arrowDown(inputIng, arrowIng, arrowboxIng);
});

/* Recherche des ingredients avec la barre de recherche */

inputIng.addEventListener("keyup", function () {
 arrowUp(inputIng, arrowIng, arrowboxIng);
 filtreListeIngredients.style.display = "grid";
 let value = document.getElementById("ingredients").value;
 let result = ingredientsArray.filter((ingredient) =>
  ingredient.toLowerCase().includes(value.toLowerCase())
 );
 filtreListeIngredients.innerHTML = " ";
 result.forEach(function (ingredient) {
  let listeItems = `
  <li class="ingredientItem" value="${ingredient}" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
  filtreListeIngredients.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function () {
 filtreListeIngredients.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputIng, arrowIng, arrowboxIng);
  let valueRecherche = inputRecherche.value;
  let result = ingredientsArray.filter((ingredient) =>
   ingredient.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeIngredients.innerHTML = " ";
  result.forEach(function (ingredient) {
   let listeItems = `
         <li class="ingredientItem" value="${ingredient}" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
   filtreListeIngredients.innerHTML += listeItems;
  });
 }
});

/* Fonctions  pour l'input des appareils */
const arrowAppareils = document.getElementById("appareil-arrow-id");
const arrowboxAppareils = document.getElementById("appareil-arrow");

function handleAppareils() {
 arrowboxAppareils.addEventListener("click", function () {
  filtreListeAppareils.style.display = "grid";

  filtreListeAppareils.innerHTML = " ";
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  for (let i = 0; i < appareilsArray.length; i++) {
   let listeItems = `
             <li class="appareilItem" value="${appareilsArray[i]}" onclick="createDiv('${appareilsArray[i]}', 'appareilItem')">${appareilsArray[i]}</li>
             `;
   filtreListeAppareils.innerHTML += listeItems;
  }
 });
}

handleAppareils();

filtreListeAppareils.addEventListener("click", function () {
 filtreListeAppareils.innerHTML = "";
 arrowDown(inputAppareils, arrowAppareils, arrowboxAppareils);
});

inputAppareils.addEventListener("keyup", function (event) {
 arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
 filtreListeAppareils.style.display = "grid";
 let value = document.getElementById("appareils").value;
 let result = appareilsArray.filter((appliance) =>
  appliance.toLowerCase().includes(value.toLowerCase())
 );

 filtreListeAppareils.innerHTML = " ";
 result.forEach(function (appliance) {
  let listeItems = `
  <li class="appareilItem" value="${appliance}" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
  filtreListeAppareils.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function () {
 filtreListeAppareils.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  let valueRecherche = inputRecherche.value;
  let result = appareilsArray.filter((appliance) =>
   appliance.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeAppareils.innerHTML = " ";
  result.forEach(function (appliance) {
   let listeItems = `
         <li class="appareilItem" value="${appliance}" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
   filtreListeAppareils.innerHTML += listeItems;
  });
 }
});

/* Fonctions  pour l'input des ustensils */

const arrowUstensils = document.getElementById("ustensil-arrow-id");
const arrowboxUstensils = document.getElementById("ustensil-arrow");

function handleUstensils() {
 arrowboxUstensils.addEventListener("click", function () {
  filtreListeUstensils.style.display = "grid";
  filtreListeUstensils.innerHTML = " ";

  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  for (let i = 0; i < ustensilsArray.length; i++) {
   let listeItems = `
              <li class="ustensilItem" value="${ustensilsArray[i]}" onclick="createDiv('${ustensilsArray[i]}', 'ustensilItem')">${ustensilsArray[i]}</li>
              `;
   filtreListeUstensils.innerHTML += listeItems;
  }
 });
}

handleUstensils();

filtreListeUstensils.addEventListener("click", function () {
 filtreListeUstensils.innerHTML = "";
 arrowDown(inputUstensils, arrowUstensils, arrowboxUstensils);
});

inputUstensils.addEventListener("keyup", function (event) {
 filtreListeUstensils.style.display = "grid";
 arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
 let value = document.getElementById("ustensils").value;
 let result = ustensilsArray.filter((ustensil) =>
  ustensil.toLowerCase().includes(value.toLowerCase())
 );

 filtreListeUstensils.innerHTML = " ";
 result.forEach(function (ustensil) {
  let listeItems = `
  <li class="ustensilItem" value="${ustensil}" onclick="createDiv('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
  filtreListeUstensils.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function (event) {
 filtreListeUstensils.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  let valueRecherche = inputRecherche.value;
  let result = ustensilsArray.filter((ustensil) =>
   ustensil.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeUstensils.innerHTML = " ";
  result.forEach(function (ustensil) {
   let listeItems = `
         <li class="ustensilItem" value="${ustensil}" onclick="createDiv('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
   filtreListeUstensils.innerHTML += listeItems;
  });
 }
});

/* Fonction pour afficher les items de recherche et les suprimez */
let indexArticles = 0;
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

/* Fonctions pour faire tourner les fleche des input + css des bordure des input */
