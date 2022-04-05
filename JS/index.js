let ingredientsArray = [];
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
    //console.log(ingredientsArray);
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
    let appareilsArray = Array.from(new Set(appliance));
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
        //console.log(recipes[i].ustensils[j]);
        ustensils.push(recipes[i].ustensils);
      }
    }
    let ustensilsArray = Array.from(new Set(ustensils));
    //console.log(ustensilsArray);
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
}

ustensilsInput();

/* Fonction pour afficher les items de recherche */

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

/* Rechercher avec les input */
document
  .getElementById("ingredients")
  .addEventListener("keyup", function (event) {
    let input = document.getElementsByClassName("ingredientItem");
    let value = document.getElementById("ingredients").value;
    console.log(event);
    const result = searchStringInArray(value, ingredients, input);
  });

function searchStringInArray(value, elements, classElements) {
  for (i = 0; i < value.length; i++) {
    if (!value[i].innerHTML.toLowerCase().includes(input)) {
      console.log("hello");
      classElements[i].style.display = "none";
    } else {
      console.log("hello toi");
      classElements[i].style.display = "list-item";
    }
  }
}
/* function rechercherIngredient() {
  let input = document.getElementById("ingredients").value;
  input = input.toLowerCase();
  let lettre = document.getElementsByClassName("ingredientItem");

  for (i = 0; i < lettre.length; i++) {
    if (!lettre[i].innerHTML.toLowerCase().includes(input)) {
      lettre[i].style.display = "none";
    } else {
      lettre[i].style.display = "list-item";
    }
  }
} */

function rechercherUstensils() {
  let input = document.getElementById("ustensils").value;
  input = input.toLowerCase();
  let lettre = document.getElementsByClassName("ustensilItem");

  for (i = 0; i < lettre.length; i++) {
    if (!lettre[i].innerHTML.toLowerCase().includes(input)) {
      lettre[i].style.display = "none";
    } else {
      lettre[i].style.display = "list-item";
    }
  }
}

function rechercherAppareil() {
  let input = document.getElementById("appareils").value;
  input = input.toLowerCase();
  let lettre = document.getElementsByClassName("appareilItem");

  for (i = 0; i < lettre.length; i++) {
    if (!lettre[i].innerHTML.toLowerCase().includes(input)) {
      lettre[i].style.display = "none";
    } else {
      lettre[i].style.display = "list-item";
    }
  }
}

/* document.querySelector("#recherche").addEventListener("keyup", function () {
  // On ajoute un gestionnaire "keyup" sur ton champ "#recherche"
  const that = this; // On garde en mémoire le context ("#recherche") dans une variable
  const elements = Array.from(document.querySelectorAll(".element")); // On récupère les éléments ".element" et on place la NodeList dans un Array pour pouvoir utiliser "filter"
  elements.forEach((element) => {
    // Pour chaque ".element"...
    element.style.display = null; // ... on réinitialise le "style.display"
  });
  elements
    .filter(
      (
        element // On filtre l'array d'".element"...
      ) => !element.innerText.toLowerCase().includes(that.value.toLowerCase()) // ... en vérifiant que "innerText" (et pas innerHTML) ne contient pas la valeur de "#recherche" (contenu dans la variable "that")
    )
    .forEach(
      (
        element // Pour chaque éléments retenu (c'est à dire quand le test précédent a renvoyé "true" et que l'élément n'inclue pas la recherche)...
      ) => (element.style.display = "none") // ... on définit la propriété "style.display" sur "none"
    );
}); */
