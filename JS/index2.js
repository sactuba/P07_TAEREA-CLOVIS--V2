function getIngredientsV2(recipes) {
 recipes.forEach((recipe) => {
  let ings = recipe.ingredients;
  ings.forEach((ing) => {
   ingredientsArrayV2.push(ing.ingredient.toLowerCase());
  });
 });
 ingredientsArrayV2 = Array.from(new Set(ingredientsArrayV2));
 console.log(ingredientsArrayV2);
}
getIngredientsV2(recipes);

function getAppareilsV2(recipes) {
 recipes.forEach((recipe) => {
  appareilsArrayV2.push(recipe.appliance.toLowerCase());
 });
 appareilsArrayV2 = Array.from(new Set(appareilsArrayV2));
}
getAppareilsV2(recipes);

function getUstensilsV2(recipes) {
 recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ustensil) => {
   ustensilsArrayV2.push(ustensil);
  });
 });
 ustensilsArrayV2 = Array.from(new Set(ustensilsArrayV2));
}
getUstensilsV2(recipes);

function recipesCardsV2(recipes) {
 let container = document.getElementById("recipes_container");
 container.innerHTML = "";
 recipes.forEach((recipe) => {
  let cards = `
          <article class="recipes_cards">
        <img src="..." alt="..." class="recipes_cards--image" />
        <h5 class="--description__ingredients--title lato">
        <span class="--description__ingredients--name">${recipe.name}</span>
        <span class="--description__excplication--timer"><i class="fa-solid fa-clock fa-2x"></i> ${recipe.time} min</span>
        </h5>
        <div class="recipes_cards--description">
          <div class="--description__ingredients">
          <ul class="liste-description lato" id="liste-ing-${recipe.id}"></ul>
          </div>
          <div class="--description__excplication roboto">
            ${recipe.description}
        </div>
      </article>
          `;

  container.innerHTML += cards;
  let liste = document.getElementById("liste-ing-" + recipe.id);

  recipe.ingredients.forEach((ing) => {
   let displayIng = `
            <li><span class="bold">${ing.ingredient}</span>: ${
    ing.quantity ? ing.quantity : ""
   }
               ${ing.unit ? ing.unit : ""}</li>
            `;
   liste.innerHTML += displayIng;
  });
 });
}
recipesCardsV2(recipes);

function handleIngredientsV2() {
 arrowboxIng.addEventListener("click", function () {
  let index = 0;
  filtreListeIngredients.style.display = "grid";
  filtreListeIngredients.innerHTML = " ";
  arrowUp(inputIng, arrowIng, arrowboxIng);
  ingredientsArrayV2.forEach(function (ingredient) {
   let listeItems = `
                    <li class="ingredientItem" value="${ingredient}" onclick="createDivV2('${ingredient}', 'ingredientItem', ${index++})">${ingredient}</li>
                    `;
   filtreListeIngredients.innerHTML += listeItems;
  });
 });
}
handleIngredientsV2();

function handleAppareilsV2() {
 arrowboxAppareils.addEventListener("click", function () {
  filtreListeAppareils.style.display = "grid";

  filtreListeAppareils.innerHTML = " ";
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  appareilsArrayV2.forEach(function (appliance) {
   let listeItems = `
               <li class="appareilItem" value="${appliance}" onclick="createDivV2('${appliance}', 'appareilItem')">${appliance}</li>
               `;
   filtreListeAppareils.innerHTML += listeItems;
  });
 });
}
handleAppareilsV2();

function handleUstensilsV2() {
 arrowboxUstensils.addEventListener("click", function () {
  filtreListeUstensils.style.display = "grid";
  filtreListeUstensils.innerHTML = " ";

  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  ustensilsArrayV2.forEach(function (ustensils) {
   let listeItems = `
               <li class="ustensilItem" value="${ustensils}" onclick="createDivV2('${ustensils}', 'ustensilItem')">${ustensils}</li>
               `;
   filtreListeUstensils.innerHTML += listeItems;
  });
 });
}
handleUstensilsV2();

inputIng.addEventListener("keyup", function () {
 arrowUp(inputIng, arrowIng, arrowboxIng);
 filtreListeIngredients.style.display = "grid";
 let value = document.getElementById("ingredients").value;
 let result = ingredientsArrayV2.filter((ingredient) =>
  ingredient.toLowerCase().includes(value.toLowerCase())
 );
 filtreListeIngredients.innerHTML = " ";
 result.forEach(function (ingredient) {
  let listeItems = `
   <li class="ingredientItem" value="${ingredient}" onclick="createDivV2('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
  filtreListeIngredients.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function () {
 filtreListeIngredients.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputIng, arrowIng, arrowboxIng);
  let valueRecherche = inputRecherche.value;
  let result = ingredientsArrayV2.filter((ingredient) =>
   ingredient.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeIngredients.innerHTML = " ";
  result.forEach(function (ingredient) {
   let listeItems = `
          <li class="ingredientItem" value="${ingredient}" onclick="createDivV2('${ingredient}', 'ingredientItem')">${ingredient}</li>`;
   filtreListeIngredients.innerHTML += listeItems;
  });
 }
});

inputAppareils.addEventListener("keyup", function (event) {
 arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
 filtreListeAppareils.style.display = "grid";
 let value = document.getElementById("appareils").value;
 let result = appareilsArrayV2.filter((appliance) =>
  appliance.toLowerCase().includes(value.toLowerCase())
 );

 filtreListeAppareils.innerHTML = " ";
 result.forEach(function (appliance) {
  let listeItems = `
   <li class="appareilItem" value="${appliance}" onclick="createDivV2('${appliance}', 'appareilItem')">${appliance}</li>`;
  filtreListeAppareils.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function () {
 filtreListeAppareils.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  let valueRecherche = inputRecherche.value;
  let result = appareilsArrayV2.filter((appliance) =>
   appliance.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeAppareils.innerHTML = " ";
  result.forEach(function (appliance) {
   let listeItems = `
          <li class="appareilItem" value="${appliance}" onclick="createDivV2('${appliance}', 'appareilItem')">${appliance}</li>`;
   filtreListeAppareils.innerHTML += listeItems;
  });
 }
});

inputUstensils.addEventListener("keyup", function (event) {
 filtreListeUstensils.style.display = "grid";
 arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
 let value = document.getElementById("ustensils").value;
 let result = ustensilsArrayV2.filter((ustensil) =>
  ustensil.toLowerCase().includes(value.toLowerCase())
 );

 filtreListeUstensils.innerHTML = " ";
 result.forEach(function (ustensil) {
  let listeItems = `
   <li class="ustensilItem" value="${ustensil}" onclick="createDivV2('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
  filtreListeUstensils.innerHTML += listeItems;
 });
});

inputRecherche.addEventListener("keyup", function (event) {
 filtreListeUstensils.style.display = "grid";
 for (let i = 3; i < inputRecherche.value.length; i++) {
  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  let valueRecherche = inputRecherche.value;
  let result = ustensilsArrayV2.filter((ustensil) =>
   ustensil.toLowerCase().includes(valueRecherche.toLowerCase())
  );

  filtreListeUstensils.innerHTML = " ";
  result.forEach(function (ustensil) {
   let listeItems = `
          <li class="ustensilItem" value="${ustensil}" onclick="createDivV2('${ustensil}', 'ustensilItem')">${ustensil}</li>`;
   filtreListeUstensils.innerHTML += listeItems;
  });
 }
});

function filterRecipesElementV2() {
 criteriasArrayV2.forEach((criteria) => {
  const foundRecipesV2 = recipes.filter((item) =>
   item.name.toLowerCase().includes(criteria.toLowerCase())
  );
  const foundIngredientsV2 = recipes.filter((item) =>
   item.ingredients.find((el) =>
    el.ingredient.toLowerCase().includes(criteria.toLowerCase())
   )
  );
  const foundDescriptionV2 = recipes.filter((item) =>
   item.description.toLowerCase().includes(criteria.toLowerCase())
  );
  resultsV2 = [
   ...new Set([
    ...foundRecipesV2,
    ...foundIngredientsV2,
    ...foundDescriptionV2,
   ]),
  ];

  searchingRecipesV2 = resultsV2;
  console.log(searchingRecipesV2);
 });
 if (criteriasArrayV2.length === 0) {
  recipesCardsV2(recipes);

  getIngredientsV2(recipes);
  handleIngredientsV2();

  getAppareilsV2(recipes);
  handleAppareilsV2();

  getUstensilsV2(recipes);
  handleUstensilsV2();
 } else {
  recipesCardsV2(searchingRecipesV2);

  getIngredientsV2(searchingRecipesV2);
  handleIngredientsV2();

  getAppareilsV2(searchingRecipesV2);
  handleAppareilsV2();

  getUstensilsV2(searchingRecipesV2);
  handleUstensilsV2();
 }
}

function deleteDivV2(value) {
 let elt = document.getElementById(value);
 elt.remove();
 criteriasArrayV2 = criteriasArrayV2.filter((elt) => elt !== value);
 filterRecipesElementV2();
 console.log(criteriasArrayV2);
 console.log(searchingRecipesV2);
}

function createDivV2(value, style) {
 let containerItem = document.getElementById("liste-findArticles");
 const item = `
          <li id="${value}"class="lato ${style}"value="${value}">${value}<i onclick="deleteDivV2('${value}')" class="fa-solid fa-xmark"></i></li>`;
 containerItem.innerHTML += item;
 criteriasArrayV2.push(value);
 filterRecipesElementV2();
}
