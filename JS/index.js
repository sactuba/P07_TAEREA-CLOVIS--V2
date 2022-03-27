/* Afficher les recettes */
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
    //console.log(liste);

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
  const inputIng = document.getElementById("ingredients");
  filtreListeIngredients.style.display = "grid";
  const ListeIngredients = document.getElementsByClassName("ingredientItem");
  inputIng.addEventListener("click", function () {
    let ingredients = [];
    let index = 0;
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        ingredients.push(recipes[i].ingredients[j].ingredient);
      }
    }
    let ingredientsArray = Array.from(new Set(ingredients));
    //console.log(ingredientsArray);
    ingredientsArray.forEach(function (ingredients) {
      let listeItems = `
      <li class="ingredientItem" onclick="createDiv('${ingredients}', 'ingredientItem', ${index++})">${ingredients}</li>
      `;
      filtreListeIngredients.innerHTML += listeItems;
    });
  });
  filtreListeIngredients.addEventListener("click", function () {
    filtreListeIngredients.innerHTML = "";
    filtreListeIngredients.style.display = "none";
  });
}

ingredientsInput();

function ingredientsAppareils() {
  const filtreListeAppareils = document.getElementById(
    "filtre-liste-appareils"
  );
  const inputAppareils = document.getElementById("appareils");
  inputAppareils.addEventListener("click", function () {
    let appliance = [];
    filtreListeAppareils.style.display = "grid";
    for (let i = 0; i < recipes.length; i++) {
      appliance.push(recipes[i].appliance);
    }
    let appareilsArray = Array.from(new Set(appliance));
    console.log(appareilsArray);
    appareilsArray.forEach(function (appliance) {
      let listeItems = `
    <li onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>
    `;
      filtreListeAppareils.innerHTML += listeItems;
    });
  });
  filtreListeAppareils.addEventListener("click", function () {
    filtreListeAppareils.innerHTML = "";
    filtreListeAppareils.style.display = "none ";
  });
}

ingredientsAppareils();

function ingredientsUstensils() {
  const filtreListeUstensils = document.getElementById(
    "filtre-liste-ustensils"
  );
  const inputUstensils = document.getElementById("ustensils");
  inputUstensils.addEventListener("click", function () {
    let ustensils = [];
    filtreListeUstensils.style.display = "grid";
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        console.log(recipes[i].ustensils[j]);
        ustensils.push(recipes[i].ustensils);
      }
    }
    let ustensilsArray = Array.from(new Set(ustensils));
    console.log(ustensilsArray);
    ustensilsArray.forEach(function (ustensils) {
      let listeItems = `
      <li onclick="createDiv('${ustensils}', 'ustensilItem')">${ustensils}</li>
      `;
      filtreListeUstensils.innerHTML += listeItems;
    });
  });
  filtreListeUstensils.addEventListener("click", function () {
    filtreListeUstensils.innerHTML = "";
    filtreListeUstensils.style.display = "none ";
  });
}

ingredientsUstensils();

/* Fonction pour afficher les items de recherche */

function createDiv(value, style, idIndex) {
  let containerArticle = document.getElementById("liste-findArticles");
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
  containerArticle.innerHTML += item;
}

function deleteDiv(element) {
  let elt = document.getElementById(element);
  elt.remove();
}

function rechercher() {
  let input = document.getElementById("barre-de-recherche").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("ingredientItem");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
