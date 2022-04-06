/* Afficher les recettes */
let ingredientsArray = [];
let appareilsArray = [];
let ustensilsArray = [];
function recipesCards() {
  let container = document.getElementById("recipes_container");
  for (let i = 0; i < recipes.length; i++) {
    //console.log(id);
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

recipesCards();

/* Fonctions  pour afficher touts les ingrdients par input */

function ingredientsInput() {
  const filtreListeIngredients = document.getElementById(
    "filtre-liste-ingredients"
  );
  const arrow = document.getElementById("ingredient-arrow-id");

  const inputIng = document.getElementById("ingredients");
  const ListeIngredients = document.getElementsByClassName("ingredientItem");
  inputIng.addEventListener("click", function () {
    let ingredients = [];
    let index = 0;
    arrow.style.transform = "rotate(180deg)";
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        ingredients.push(recipes[i].ingredients[j].ingredient.toLowerCase());
      }
    }
    ingredientsArray = Array.from(new Set(ingredients));
    ingredientsArray.forEach(function (ingredient) {
      let listeItems = `
        <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem', ${index++})">${ingredient}</li>
        `;
      filtreListeIngredients.innerHTML += listeItems;
    });
  });
  filtreListeIngredients.addEventListener("click", function () {
    filtreListeIngredients.innerHTML = "";
    arrow.style.transform = "rotate(360deg)";
  });
  inputIng.addEventListener("keyup", function (event) {
    let value = document.getElementById("ingredients").value;
    let result = ingredientsArray.filter((ingredient) =>
      ingredient.toLowerCase().startsWith(value.toLowerCase())
    );
    filtreListeIngredients.innerHTML = " ";
    result.forEach(function (ingredient) {
      let listeItems = `
      <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
      filtreListeIngredients.innerHTML += listeItems;
    });
  });
}

ingredientsInput();

function appareilsInput() {
  const filtreListeAppareils = document.getElementById(
    "filtre-liste-appareils"
  );
  const arrow = document.getElementById("appareil-arrow-id");
  const inputAppareils = document.getElementById("appareils");
  inputAppareils.addEventListener("click", function () {
    let appliance = [];
    let index = 0;
    arrow.style.transform = "rotate(180deg)";
    filtreListeAppareils.style.display = "grid";
    for (let i = 0; i < recipes.length; i++) {
      appliance.push(recipes[i].appliance);
    }
    appareilsArray = Array.from(new Set(appliance));
    //console.log(appareilsArray);
    appareilsArray.forEach(function (appliance) {
      let listeItems = `
    <li class="appareilItem" onclick="createDiv('${appliance}', 'appareilItem', ${index++})">${appliance}</li>
    `;
      filtreListeAppareils.innerHTML += listeItems;
    });
  });
  filtreListeAppareils.addEventListener("click", function () {
    filtreListeAppareils.innerHTML = "";
    arrow.style.transform = "rotate(360deg)";
  });
  inputAppareils.addEventListener("keyup", function (event) {
    let value = document.getElementById("appareils").value;
    let result = appareilsArray.filter((appliance) =>
      appliance.toLowerCase().startsWith(value.toLowerCase())
    );
    filtreListeAppareils.innerHTML = " ";
    result.forEach(function (appliance) {
      let listeItems = `
      <li class="appareilItem" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
      filtreListeAppareils.innerHTML += listeItems;
    });
  });
}

appareilsInput();

function ustensilsInput() {
  const filtreListeUstensils = document.getElementById(
    "filtre-liste-ustensils"
  );
  const arrow = document.getElementById("ustensil-arrow-id");
  const inputUstensils = document.getElementById("ustensils");
  inputUstensils.addEventListener("click", function () {
    let ustensils = [];
    let index = 0;
    arrow.style.transform = "rotate(180deg)";
    filtreListeUstensils.style.display = "grid";
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        ustensils.push(recipes[i].ustensils);
      }
    }
    ustensilsArray = Array.from(new Set(ustensils));
    ustensilsArray.forEach(function (ustensils) {
      let listeItems = `
      <li class="ustensilItem" onclick="createDiv('${ustensils}', 'ustensilItem', ${index++})">${ustensils}</li>
      `;
      filtreListeUstensils.innerHTML += listeItems;
    });
  });
  filtreListeUstensils.addEventListener("click", function () {
    filtreListeUstensils.innerHTML = "";
    arrow.style.transform = "rotate(360deg)";
  });
  inputUstensils.addEventListener("keyup", function (event) {
    let value = document.getElementById("ustensils").value;
    console.log(ustensilsArray);
    let result = ustensilsArray.filter((ustensil) =>
      ustensil.toLowerCase().startsWith(value.toLowerCase())
    );
    filtreListeUstensils.innerHTML = " ";
    result.forEach(function (ustensil) {
      let listeItems = `
      <li class="ustensilItem" onclick="createDiv('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
      filtreListeUstensils.innerHTML += listeItems;
    });
  });
}

ustensilsInput();

/* Fonction pour afficher les items de recherche et les suprimez*/

function createDiv(value, style, idIndex) {
  let containerItem = document.getElementById("liste-findArticles");
  const item =
    '<li id="' +
    idIndex +
    '" class="lato ' +
    style +
    '">' +
    value +
    '<i onclick="deleteDiv(' +
    idIndex +
    ')" class="fa-solid fa-xmark fa-2x"></i></li>';
  containerItem.innerHTML += item;
}

function deleteDiv(element) {
  let elt = document.getElementById(element);
  elt.remove();
}
