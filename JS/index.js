function recipesCards() {
  let container = document.getElementById("recipes_container");
  for (let i = 0; i < recipes.length; i++) {
    let cards = `
    <article class="recipes_cards" id="${recipes[i].id}">
  <img src="..." alt="..." class="recipes_cards--image" />
  <h5 class="--description__ingredients--title">
  <span class="--description__ingredients--name">${recipes[i].name}</span>
  <span class="--description__excplication--timer">${recipes[i].time} min</span>
  </h5>
  <div class="recipes_cards--description">
    <div class="--description__ingredients"></div>
    <div class="--description__excplication">
      ${recipes[i].description}
  </div>
</article>
    `;
    container.innerHTML += cards;
  }
}

recipesCards();

function ingredientsInput() {
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      console.log(recipes[i].ingredients[j]);
    }
  }
}

ingredientsInput();
