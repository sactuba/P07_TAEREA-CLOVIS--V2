const inputIng = document.getElementById("ingredients");
const inputAppareils = document.getElementById("appareils");
const inputUstensils = document.getElementById("ustensils");
const inputRecherche = document.getElementById("barre-de-recherche");

let ingredientsArray = [];
let appareilsArray = [];
let ustensilsArray = [];
let finArticlesArray = [];

const filtreListeIngredients = document.getElementById(
  "filtre-liste-ingredients"
);
const filtreListeAppareils = document.getElementById("filtre-liste-appareils");
const filtreListeUstensils = document.getElementById("filtre-liste-ustensils");

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

/* Fonctions  pour les ingrdients par input */

let ingredients = [];
const arrowIng = document.getElementById("ingredient-arrow-id");
const arrowboxIng = document.getElementById("ingredient-arrow");

for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    ingredients.push(recipes[i].ingredients[j].ingredient.toLowerCase());
  }
}
ingredientsArray = Array.from(new Set(ingredients));

function ingredientsInput() {
  //const ListeIngredients = document.getElementsByClassName("ingredientItem");

  arrowboxIng.addEventListener("click", function () {
    let index = 0;
    arrowUp(inputIng, arrowIng, arrowboxIng);
    ingredientsArray.forEach(function (ingredient) {
      let listeItems = `
        <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem', ${index++})">${ingredient}</li>
        `;
      filtreListeIngredients.innerHTML += listeItems;
    });
    arrowboxIng.addEventListener("click", function () {
      filtreListeIngredients.innerHTML = " ";
      arrowDown(inputIng, arrowIng, arrowboxIng);
    });
  });
  filtreListeIngredients.addEventListener("click", function () {
    filtreListeIngredients.innerHTML = " ";
    arrowDown(inputIng, arrowIng, arrowboxIng);
  });
}

inputIng.addEventListener("keyup", function () {
  let value = document.getElementById("ingredients").value;
  let result = ingredientsArray.filter((ingredient) =>
    ingredient.toLowerCase().includes(value.toLowerCase())
  );
  filtreListeIngredients.innerHTML = " ";
  result.forEach(function (ingredient) {
    let listeItems = `
    <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
    filtreListeIngredients.innerHTML += listeItems;
  });
});

inputRecherche.addEventListener("keyup", function () {
  let valueRecherche = inputRecherche.value;
  let result = ingredientsArray.filter((ingredient) =>
    ingredient.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeIngredients.innerHTML = " ";
  result.forEach(function (ingredient) {
    let listeItems = `
    <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
    filtreListeIngredients.innerHTML += listeItems;
  });
});

ingredientsInput();

let appliance = [];
const arrowAppareils = document.getElementById("appareil-arrow-id");
const arrowboxAppareils = document.getElementById("appareil-arrow");

arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
for (let i = 0; i < recipes.length; i++) {
  appliance.push(recipes[i].appliance);
}
appareilsArray = Array.from(new Set(appliance));

function appareilsInput() {
  const filtreListeAppareils = document.getElementById(
    "filtre-liste-appareils"
  );
  arrowboxAppareils.addEventListener("click", function () {
    let index = 0;
    appareilsArray.forEach(function (appliance) {
      let listeItems = `
      <li class="appareilItem" onclick="createDiv('${appliance}', 'appareilItem', ${index++})">${appliance}</li>
      `;
      filtreListeAppareils.innerHTML += listeItems;
    });
    arrowbox.addEventListener("click", function () {
      filtreListeAppareils.innerHTML = "";
      arrowDown(inputIng, arrowAppareils, arrowboxAppareils);
    });
  });
}
filtreListeAppareils.addEventListener("click", function () {
  filtreListeAppareils.innerHTML = "";
  arrowDown(inputAppareils, arrowAppareils, arrowboxAppareils);
});
inputAppareils.addEventListener("keyup", function (event) {
  let value = document.getElementById("appareils").value;
  let result = appareilsArray.filter((appliance) =>
    appliance.toLowerCase().includes(value.toLowerCase())
  );
  filtreListeAppareils.innerHTML = " ";
  result.forEach(function (appliance) {
    let listeItems = `
      <li class="appareilItem" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
    filtreListeAppareils.innerHTML += listeItems;
  });
});

appareilsInput();

let ustensils = [];
const arrowUstensils = document.getElementById("ustensil-arrow-id");
const arrowboxUstensils = document.getElementById("ustensil-arrow");

for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    ustensils.push(recipes[i].ustensils[j].toLowerCase());
  }
}
ustensilsArray = Array.from(new Set(ustensils));

function ustensilsInput() {
  arrowboxUstensils.addEventListener("click", function () {
    let index = 0;
    arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
    ustensilsArray.forEach(function (ustensils) {
      let listeItems = `
      <li class="ustensilItem" onclick="createDiv('${ustensils}', 'ustensilItem', ${index++})">${ustensils}</li>
      `;
      filtreListeUstensils.innerHTML += listeItems;
    });
    arrowboxUstensils.addEventListener("click", function () {
      filtreListeUstensils.innerHTML = "";
      arrowDown(inputIng, arrowUstensils, arrowboxUstensils);
    });
  });
}

filtreListeUstensils.addEventListener("click", function () {
  filtreListeUstensils.innerHTML = "";
  arrowDown(inputUstensils, arrowUstensils, arrowboxUstensils);
});

inputUstensils.addEventListener("keyup", function (event) {
  let value = document.getElementById("ustensils").value;
  let result = ustensilsArray.filter((ustensil) =>
    ustensil.toLowerCase().includes(value.toLowerCase())
  );

  filtreListeUstensils.innerHTML = " ";
  result.forEach(function (ustensil) {
    let listeItems = `
      <li class="ustensilItem" onclick="createDiv('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
    filtreListeUstensils.innerHTML += listeItems;
  });
});

ustensilsInput();

/* Fonction de la barre de la recherche */
function test() {
  let inputrecherche = document.getElementById("barre-de-recherche");
  inputrecherche.addEventListener("keyup", function () {
    let value = inputrecherche.value;
    for (let i = 3; i < value.length; i++) {
      console.log(value);
    }
  });
}

/* function barreDeRecherche() {
  let input = document.getElementById("barre-de-recherche");
  let ingredients = [];
  let appliance = [];
  let ustensils = [];

  input.addEventListener("keyup", function (event) {
    let value = input.value;
    for (let i = 3; i < value.length; i++) {
      console.log(value);
    }

    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        ingredients.push(recipes[i].ingredients[j].ingredient.toLowerCase());
      }
    }
    for (let i = 0; i < recipes.length; i++) {
      appliance.push(recipes[i].appliance);
    }
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        ustensils.push(recipes[i].ustensils[j].toLowerCase());
      }
    }

    let ingredientsArray = Array.from(new Set(ingredients));
    let ustensilsArray = Array.from(new Set(ustensils));
    let appareilsArray = Array.from(new Set(appliance));

    let resultIng = ingredientsArray.filter((ingredient) =>
      ingredient.toLowerCase().includes(value.toLowerCase())
    );
    let resultApp = appareilsArray.filter((appliance) =>
      appliance.toLowerCase().includes(value.toLowerCase())
    );
    let resultUst = ustensilsArray.filter((ustensil) =>
      ustensil.toLowerCase().includes(value.toLowerCase())
    );

    filtreListeIngredients.innerHTML = " ";
    filtreListeAppareils.innerHTML = " ";
    filtreListeUstensils.innerHTML = " ";

    resultIng.forEach(function (ingredient) {
      let arrowbox = document.getElementById("ingredient-arrow");
      let arrow = document.getElementById("ingredient-arrow-id");
      arrowUp(filtreListeIngredients, inputIng, arrow, arrowbox);

      let listeItems = `
        <li class="ingredientItem" onclick="createDiv('${ingredient}', 'ingredientItem')">${ingredient}</li>
        `;
      filtreListeIngredients.innerHTML += listeItems;

      input.addEventListener("blur", function () {
        arrowDown(filtreListeIngredients, inputIng, arrow, arrowbox);
      });
    });

    resultApp.forEach(function (appliance) {
      const arrow = document.getElementById("appareil-arrow-id");
      const arrowbox = document.getElementById("appareil-arrow");
      arrowUp(filtreListeAppareils, inputAppareils, arrow, arrowbox);

      let listeItems = `
      <li class="appareilItem" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
      filtreListeAppareils.innerHTML += listeItems;

      input.addEventListener("blur", function () {
        arrowDown(filtreListeAppareils, inputAppareils, arrow, arrowbox);
      });
    });

    resultUst.forEach(function (ustensil) {
      const arrow = document.getElementById("ustensil-arrow-id");
      const arrowbox = document.getElementById("ustensil-arrow");
      arrowUp(filtreListeUstensils, inputUstensils, arrow, arrowbox);

      let listeItems = `
      <li class="ustensilItem" onclick="createDiv('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
      filtreListeUstensils.innerHTML += listeItems;

      input.addEventListener("blur", function () {
        arrowDown(filtreListeUstensils, inputUstensils, arrow, arrowbox);
      });
    });
  });

  const findArticles = document.getElementById("liste-findArticles");
} */

//barreDeRecherche();

/* Fonction pour afficher les items de recherche et les suprimez */

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
    ')" class="fa-solid fa-xmark"></i></li>';
  containerItem.innerHTML += item;
}

function deleteDiv(element) {
  let elt = document.getElementById(element);
  elt.remove();
}

/* Fonctions pour faire tourner les fleche des input + css des bordure des input */

function arrowUp(input, arrow, arrowbox) {
  arrow.style.transform = "rotate(180deg)";
  arrowbox.style.borderRadius = "0 5px 0 0";
  input.style.borderRadius = "5px 0 0 0";
}

function arrowDown(input, arrow, arrowbox) {
  arrow.style.transform = "rotate(360deg)";
  arrowbox.style.borderRadius = "0 5px 5px 0";
  input.style.borderRadius = "5px 0 0 5px";
}
