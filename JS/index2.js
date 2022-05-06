let ingredientsV2 = [];
let applianceV2 = [];
let ustensilsV2 = [];

let ingredientsArrayV2 = [];
let appareilsArrayV2 = [];
let ustensilsArrayV2 = [];
let findArticlesArrayV2 = [];

function getIngredientsV2() {
 let ing = recipes.map((recipe) => recipe.ingredients);
 /*  let test = ing.reduce(function (prev, curr) {
  return [...prev, ...curr.ingerdient];
 }); */
 console.log(ing);
}
getIngredientsV2();

function getAppliancesV2() {
 let appliances = recipes.map((recipe) => recipe.appliance);
 appareilsArrayV2.push(appliances);
 applianceV2 = Array.from(new Set(appareilsArrayV2));
 console.log(applianceV2);
}
getAppliancesV2();

function getUstensilsV2() {
 let ustensils = recipes.map((recipe) => recipe.ustensils);
 ustensilsArrayV2.push(ustensils);
 console.log(ustensils);
}
getUstensilsV2();
