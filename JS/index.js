/* Se fichier est exactement comme le fichier index2.js sauf que a la place
de foreach on utilise des boucle for */

/* tableaux des ingredients sans doublon */

function getIngredients(recipesArray) {
  let ingredients = [];
  for (let i = 0; i < recipesLength; i++) {
    for (let j = 0; j < recipesArray[i].ingredients.length; j++) {
      ingredients.push(recipesArray[i].ingredients[j].ingredient.toLowerCase());
    }
  }
  ingredientsArray = Array.from(new Set(ingredients));
}

getIngredients(recipesArray);

/* tableaux des appareils sans doublon */

function getAppareils(recipesArray) {
  let appliance = [];
  for (let i = 0; i < recipesLength; i++) {
    appliance.push(recipesArray[i].appliance);
  }
  appareilsArray = Array.from(new Set(appliance));
}

getAppareils(recipesArray);

/* tableaux des ustensils sans doublon */

function getUstensils(recipesArray) {
  for (let i = 0; i < recipesLength; i++) {
    for (let j = 0; j < recipesArray[i].ustensils.length; j++) {
      ustensils.push(recipesArray[i].ustensils[j].toLowerCase());
    }
  }
  ustensilsArray = Array.from(new Set(ustensils));
}

getUstensils(recipesArray);

function recipesCards(recipesArray) {
  let container = document.getElementById("recipes_container");
  container.innerHTML = "";
  for (let i = 0; i < recipesLength; i++) {
    let cards = `
    <article class="recipes_cards">
  <img src="..." alt="..." class="recipes_cards--image" />
  <h5 class="--description__ingredients--title lato">
  <span class="--description__ingredients--name">${recipesArray[i].name}</span>
  <span class="--description__excplication--timer"><i class="fa-solid fa-clock fa-2x"></i> ${recipes[i].time} min</span>
  </h5>
  <div class="recipes_cards--description">
    <div class="--description__ingredients">
    <ul class="liste-description lato" id="liste-ing-${recipesArray[i].id}"></ul>
    </div>
    <div class="--description__excplication roboto">
      ${recipesArray[i].description}
  </div>
</article>
    `;

    container.innerHTML += cards;

    let liste = document.getElementById("liste-ing-" + recipesArray[i].id);

    recipesArray[i].ingredients.forEach((ing) => {
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

recipesCards(recipesArray);

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

/* Recherche des ingredients avec la barre de recherche */

inputIng.addEventListener("keyup", function () {
  arrowUp(inputIng, arrowIng, arrowboxIng);
  filtreListeIngredients.style.display = "grid";
  let value = document.getElementById("ingredients").value;
  let result = ingredientsArray.filter((ingredient) =>
    ingredient.toLowerCase().includes(value.toLowerCase())
  );
  console.log(result);
  filtreListeIngredients.innerHTML = " ";
  for (let i = 0; i < result.length; i++) {
    let listeItems = `
    <li class="ingredientItem" value="${result[i]}" onclick="createDiv('${result[i]}', 'ingredientItem')">${result[i]}</li>`;
    filtreListeIngredients.innerHTML += listeItems;
  }
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
    for (let i = 0; i < result.length; i++) {
      let listeItems = `
          <li class="ingredientItem" value="${result[i]}" onclick="createDiv('${result[i]}', 'ingredientItem')">${result[i]}</li>`;
      filtreListeIngredients.innerHTML += listeItems;
    }
  }
});

/* Fonctions  pour l'input des appareils */

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

inputAppareils.addEventListener("keyup", function (event) {
  arrowUp(inputAppareils, arrowAppareils, arrowboxAppareils);
  filtreListeAppareils.style.display = "grid";
  let value = document.getElementById("appareils").value;
  let result = appareilsArray.filter((appliance) =>
    appliance.toLowerCase().includes(value.toLowerCase())
  );

  filtreListeAppareils.innerHTML = " ";
  for (let i = 0; i < result.length; i++) {
    let listeItems = `
  <li class="appareilItem" value="${result[i]}" onclick="createDiv('${result[i]}', 'appareilItem')">${result[i]}</li>`;
    filtreListeAppareils.innerHTML += listeItems;
  }
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
    for (leti = 0; i < result.length; i++) {
      let listeItems = `
          <li class="appareilItem" value="${appliance}" onclick="createDiv('${appliance}', 'appareilItem')">${appliance}</li>`;
      filtreListeAppareils.innerHTML += listeItems;
    }
  }
});

/* Fonctions  pour l'input des ustensils */

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

inputUstensils.addEventListener("keyup", function (event) {
  filtreListeUstensils.style.display = "grid";
  arrowUp(inputUstensils, arrowUstensils, arrowboxUstensils);
  let value = document.getElementById("ustensils").value;
  let result = ustensilsArray.filter((ustensil) =>
    ustensil.toLowerCase().includes(value.toLowerCase())
  );

  filtreListeUstensils.innerHTML = " ";
  for (let i = 0; i < result.length; i++) {
    let listeItems = `
   <li class="ustensilItem" value="${result[i]}" onclick="createDiv('${result[i]}', 'ustensilItem')">${result[i]}</li>`;
    filtreListeUstensils.innerHTML += listeItems;
  }
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
    for (let i = 0; i < result.length; i++) {
      let listeItems = `
          <li class="ustensilItem" value="${result[i]}" onclick="createDiv('${result[i]}', 'ustensilItem')">${result[i]}</li>`;
      filtreListeUstensils.innerHTML += listeItems;
    }
  }
});

function filterRecipesElement() {
  criteriasArray.forEach((criteria) => {
    const foundRecipes = recipesArray.filter((item) =>
      item.name.toLowerCase().includes(criteria.toLowerCase())
    );
    const foundIngredients = recipesArray.filter((item) =>
      item.ingredients.find((el) =>
        el.ingredient.toLowerCase().includes(criteria.toLowerCase())
      )
    );
    const foundDescription = recipesArray.filter((item) =>
      item.description.toLowerCase().includes(criteria.toLowerCase())
    );
    results = [
      ...new Set([...foundRecipes, ...foundIngredients, ...foundDescription]),
    ];

    searchingRecipes = results;
  });
  if (criteriasArray.length === 0) {
    recipesCards(recipesArray);

    getIngredients(recipesArray);
    handleIngredients();

    getAppareils(recipesArray);
    handleAppareils();

    getUstensils(recipesArray);
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

function createDiv(value, style) {
  let containerItem = document.getElementById("liste-findArticles");
  const item = `
     <li id="${value}"class="lato ${style}"value="${value}">${value}<i onclick="deleteDiv('${value}')" class="fa-solid fa-xmark"></i></li>`;
  containerItem.innerHTML += item;
  criteriasArray.push(value);
  filterRecipesElement();
}
