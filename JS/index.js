function recipesCards() {
  let container = document.getElementById("recipes_container");
  for (let i = 0; i < recipes.length; i++) {
    //console.log(id);
    let cards = `
    <article class="recipes_cards">
  <img src="..." alt="..." class="recipes_cards--image" />
  <h5 class="--description__ingredients--title">
  <span class="--description__ingredients--name">${recipes[i].name}</span>
  <span class="--description__excplication--timer">${recipes[i].time} min</span>
  </h5>
  <div class="recipes_cards--description">
    <div class="--description__ingredients">
    <ul class="liste-ing-${recipes[i].id}" id="${recipes[i].id}"></ul>
    </div>
    <div class="--description__excplication">
      ${recipes[i].description}
  </div>
</article>
    `;
    container.innerHTML += cards;

    let liste = document.getElementsByClassName("liste-ing-" + recipes[i].id);
    //console.log(liste);

    recipes[i].ingredients.forEach((ingredients) => {
      let displayIng = `
      <li>${ingredients.ingredient}</li>
      `;
      liste.innerHTML += displayIng;
    });
  }
}

recipesCards();

function ingredientsInput() {
  const filtreListeIngredients = document.getElementsByClassName(
    "filtre-liste-ingredients"
  );
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      let listeItems = `
      <li>${recipes[i].ingredients[j].ingredient}</li>
      `;
      filtreListeIngredients.innerHTML += listeItems;
    }
  }
}

ingredientsInput();
