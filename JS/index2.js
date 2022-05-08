let ingredientsArrayV2 = [];
let appareilsArrayV2 = [];
let ustensilsArrayV2 = [];
let findArticlesArrayV2 = [];

function getIngredientsV2() {
 let ing = recipes.map((recipe) => recipe.ingredients);
 ing.forEach((item) => {
  ingredientsArrayV2.push(item[1].ingredient);
  ingredientsArrayV2 = Array.from(new Set(ingredientsArrayV2));
 });
 //console.log(ingredientsArrayV2);
}
getIngredientsV2();

function getAppliancesV2() {
 recipes.forEach((recipe) => {
  appareilsArrayV2.push(recipe.appliance);
  appareilsArrayV2 = Array.from(new Set(appareilsArrayV2));
 });
 //console.log(appareilsArrayV2);
}
getAppliancesV2();

function getUstensilsV2() {
 let test = recipes.ustensils;
 //recipes.map((recipe) => recipe.ustensils);
 recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ustensil) => {
   ustensilsArrayV2.push(ustensil);
   ustensilsArrayV2 = Array.from(new Set(ustensilsArrayV2));
  });
 });
 //console.log(ustensilsArrayV2);
}
getUstensilsV2();

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
  console.log(cards);
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
//recipesCardsV2(recipes);

function handleIngredientsV2() {
 arrowboxIng.addEventListener("click", function () {
  let index = 0;
  filtreListeIngredients.style.display = "grid";
  filtreListeIngredients.innerHTML = " ";
  arrowUp(inputIng, arrowIng, arrowboxIng);
  ingredientsArray.forEach(function (ingredient) {
   let listeItems = `
                    <li class="ingredientItem" value="${ingredient}" onclick="createDiv('${ingredient}', 'ingredientItem', ${index++})">${ingredient}</li>
                    `;
   filtreListeIngredients.innerHTML += listeItems;
  });
 });
}
//handleIngredientsV2();

function handleAppareilsV2() {
 arrowboxAppareils.addEventListener("click", function () {
  filtreListeAppareils.style.display = "grid";

  filtreListeAppareils.innerHTML = " ";
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  appareilsArray.forEach(function (appliance) {
   let listeItems = `
               <li class="appareilItem" value="${appliance}" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>
               `;
   filtreListeAppareils.innerHTML += listeItems;
  });
 });
}
//handleAppareilsV2();

function handleUstensilsV2() {
 arrowboxUstensils.addEventListener("click", function () {
  filtreListeUstensils.style.display = "grid";
  filtreListeUstensils.innerHTML = " ";

  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  ustensilsArray.forEach(function (ustensils) {
   let listeItems = `
               <li class="ustensilItem" value="${ustensils}" onclick="createDiv('${ustensils}', 'ustensilItem')">${ustensils}</li>
               `;
   filtreListeUstensils.innerHTML += listeItems;
  });
 });
}
//handleUstensilsV2()
