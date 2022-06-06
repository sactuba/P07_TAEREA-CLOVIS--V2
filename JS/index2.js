/* getIngredientsV2, getAppareilsV2, et getUstensilsV2 sont de functions qui
permette de recuperer les differents elements des recette que l'on va utiliser
pour les filtrer.
 */

// Recupere  les ingredients depuis le fichier recipes.js
function getIngredientsV2(recipesArray) {
  // Creé un tableau pour y ajouter les ingredients
  let ingredientsV2 = [];
  // Atteindre les ingredients
  recipesArray.forEach((recipe) => {
    //Mettre les ingredient dans une variale
    let ings = recipe.ingredients;
    //Parcourir les ingredients grace a la méthode foreach
    ings.forEach((ing) => {
      //Récuperer les ingredient sans lettre majuscule et on les met dans le tableau ingredientsV2
      ingredientsV2.push(ing.ingredient.toLowerCase());
    });
  });
  /* On transfert les elements dans le tableau ingredientsArrayV2 en enlevant
   les doublons grace a la methode new Set */
  ingredientsArrayV2 = Array.from(new Set(ingredientsV2));
  console.log(ingredientsArrayV2);
}
getIngredientsV2(recipesArray);

/*On repete le memes processus pour recuperer les appareil et les ustensils */

function getAppareilsV2(recipesArray) {
  let applianceV2 = [];
  recipesArray.forEach((recipe) => {
    applianceV2.push(recipe.appliance.toLowerCase());
  });
  appareilsArrayV2 = Array.from(new Set(applianceV2));
}
getAppareilsV2(recipesArray);

function getUstensilsV2(recipesArray) {
  let ustensilsV2 = [];
  recipesArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensilsV2.push(ustensil);
    });
  });
  ustensilsArrayV2 = Array.from(new Set(ustensilsV2));
}
getUstensilsV2(recipesArray);

/* ************************************************************************ */

/* Afficher les recette en parcourant le fichier recipes.js qui est contenue dans la variable
recipesArray */
function recipesCardsV2(recipesArray) {
  /* on recupere le container ou seront afficher les recettes */
  let container = document.getElementById("recipes_container");
  /* on efface le contenue du container pour eviter que les recttes
  s'affiche a chaque iteration */
  container.innerHTML = "";
  /* On utilise la methode foreach pour parcourir les recettes et les afficher
  via l'element card qui representera chaque recette a chaque iteration */
  recipesArray.forEach((recipe) => {
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
recipesCardsV2(recipesArray);

/* fonctions pour afficher les ingredient par rapport aux elements dans 
le tableau ingredientsArrayV2 */

function handleIngredientsV2() {
  arrowboxIng.addEventListener("click", function () {
    /* lindex ne me srt plus mais je l'ai laisser pour essayer quelque chose */
    let index = 0;
    filtreListeIngredients.style.display = "grid";
    filtreListeIngredients.innerHTML = " ";
    /* arrowUp est une fonctions qui permet de faire tourner les fleche des champs
    elle se situe dans le fichier cssFunction */
    arrowUp(inputIng, arrowIng, arrowboxIng);
    /* On utilise la m'ethode foreach pour crée le li qui contiendra les ingredients
    a chaque iterations */
    ingredientsArrayV2.forEach(function (ingredient) {
      let listeItems = `
                    <li class="ingredientItem" value="${ingredient}" onclick="createDivV2('${ingredient}', 'ingredientItem', ${index++})">${ingredient}</li>
                    `;
      filtreListeIngredients.innerHTML += listeItems;
    });
  });
}
handleIngredientsV2();

/* On utilisera le meme fonctionement pour itérer les ustensils et les appareils */

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

/* ******************************************************************************************** */

/* On utilise un addEventListener sur les 3 champs(ingredients, appareils, ustensils)
on filtre les elements dans chaque tableaux(ingredientsArrayV2, appareilsArrayV2,ustensilsArrayV2)
que lo'n compare avec la value que l'on recupere dans les variable value 
que lon recupere en cliquant sur dans la liste des differents champs */

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

/* *************************************************************************** */

/* On utilise un addEventListener sur la barre de recherche
on filtre les elements dans chaque tableaux(ingredientsArrayV2, appareilsArrayV2,ustensilsArrayV2)
que lo'n compare avec la value que l'on recupere dans les variable value 
que lon recupere en cliquant sur dans la liste des differents champs */

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

/* ***************************************************************************** */

/* Fonctions pour filtrer les elemnt des 3 differents champs */
function filterRecipesElementV2() {
  /* On filtre les recette par leur nom par rapport aux value contenue dans le 
  tableau criteriasArrayV2 en utilisant la méthode filter */
  criteriasArrayV2.forEach((criteria) => {
    const foundRecipesV2 = recipesArray.filter((item) =>
      item.name.toLowerCase().includes(criteria.toLowerCase())
    );
    /* On filtre les recette par rapport au ingredient contenu dans 
    criteria du tableau criteriasArrayV2 */
    const foundIngredientsV2 = recipesArray.filter((item) =>
      item.ingredients.find((el) =>
        el.ingredient.toLowerCase().includes(criteria.toLowerCase())
      )
    );
    /* On filtre les recette par rapport au description et si il contient 
la criteria contenue dans criteriasArrayV2 */
    const foundDescriptionV2 = recipesArray.filter((item) =>
      item.description.toLowerCase().includes(criteria.toLowerCase())
    );
    /* On renvoie le tout dans un tableau avec la methode new set pour
    eviter les doublons */
    resultsV2 = [
      ...new Set([
        ...foundRecipesV2,
        ...foundIngredientsV2,
        ...foundDescriptionV2,
      ]),
    ];
    /* On met le resultat dans une variable */
    searchingRecipesV2 = resultsV2;

    //console.log(searchingRecipesV2);
  });

  /* On fait utilise une condition if pour filtrer par rapport au tableau
  criteriasArrayV2, si celui si est vide il resortira toutes les recettes 
  sinon il filtrera les recettes par rapport au element du tableau criteriasArrayV2*/
  if (criteriasArrayV2.length === 0) {
    recipesCardsV2(recipesArray);

    getIngredientsV2(recipesArray);
    handleIngredientsV2();

    getAppareilsV2(recipesArray);
    handleAppareilsV2();

    getUstensilsV2(recipesArray);
    handleUstensilsV2();
  } else {
    recipesCardsV2(searchingRecipesV2);

    getIngredientsV2(searchingRecipesV2);
    handleIngredientsV2();

    getAppareilsV2(searchingRecipesV2);
    handleAppareilsV2();

    getUstensilsV2(searchingRecipesV2);
    handleUstensilsV2();
    console.log(ingredientsArrayV2);
    console.log(searchingRecipesV2);
  }
}

/* FOnctions pour effacer les element crée par la fonction createDiv() */
function deleteDivV2(value) {
  let elt = document.getElementById(value);
  elt.remove();
  criteriasArrayV2 = criteriasArrayV2.filter((elt) => elt !== value);
  filterRecipesElementV2();
  console.log(criteriasArrayV2);
  console.log(searchingRecipesV2);
}

/* fonction pour crée les element cliquable dans les different champs(
  ingredient, ustensils, appareil). On recupere la value de l'element cliqué
  pour le mettre dans le tableau criteriasArrayV2 */
function createDivV2(value, style) {
  let containerItem = document.getElementById("liste-findArticles");
  const item = `
          <li id="${value}"class="lato ${style}"value="${value}">${value}<i onclick="deleteDivV2('${value}')" class="fa-solid fa-xmark"></i></li>`;
  containerItem.innerHTML += item;
  criteriasArrayV2.push(value);
  filterRecipesElementV2();
}
