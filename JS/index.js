function recipesCards() {
  let container = document.getElementById("recipes_container");
  for (let i = 0; i < recipes.length; i++) {
    //console.log(id);
    let cards = `
    <article class="recipes_cards">
  <img src="..." alt="..." class="recipes_cards--image" />
  <h5 class="--description__ingredients--title lato">
  <span class="--description__ingredients--name">${recipes[i].name}</span>
  <span class="--description__excplication--timer">${recipes[i].time} min</span>
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

function ingredientsInput() {
  const filtreListeIngredients = document.getElementById(
    "filtre-liste-ingredients"
  );
  const inputIng = document.getElementById("ingredients");
  inputIng.addEventListener("click", function () {
    filtreListeIngredients.style.display = "grid";
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        let listeItems = `
        <li onclick="createDiv(${recipes[i].ingredients[j].ingredient})">${recipes[i].ingredients[j].ingredient}</li>
        `;
        filtreListeIngredients.innerHTML += listeItems;
        //listeItems.addEventListener("click", createDiv(listeItems));
      }
      /*       let test = new Set(recipes[i].ingredients);
      console.log(test);
      test.forEach((ing) => {
        let displayIng = `
        <li>${ing.ingredient}</li>
        `;
        filtreListeIngredients.innerHTML += displayIng;
      }); */
    }
  });
  body.addEventListener("blur", function () {
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
    filtreListeAppareils.style.display = "block";
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        let listeItems = `
      <li>${recipes[i].appliance}</li>
      `;
        filtreListeAppareils.innerHTML += listeItems;
      }
    }
  });
  inputAppareils.addEventListener("blur", function () {
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
    for (let i = 0; i < recipes.length; i++) {
      filtreListeUstensils.style.display = "block";
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        let listeItems = `
      <li>${recipes[i].ustensils}</li>
      `;
        filtreListeUstensils.innerHTML += listeItems;
      }
    }
  });
  inputUstensils.addEventListener("blur", function () {
    filtreListeUstensils.innerHTML = "";
    filtreListeUstensils.style.display = "none ";
  });
}

ingredientsUstensils();

function createDiv(value) {
  let containerArticle = document.getElementById("liste-findArticles");
  //console.log(containerArticle);
  const element = "<li>" + value + "</li>";
  //  const element = `<li>value</li>`;
  containerArticle.innerHTML += element;
}
