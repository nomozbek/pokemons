// Get ul element from html
let elPokemonsList = $(".js-pokemons-lists");

let elTemplatePokemon = $("#pokemon-templates").content;

//Create a function to create and append elements
let createPokemonItem = function(pokemon) {
  let elNewLi = createElement("li", "card w-25 m-3");

  let elNewImg = createElement("img", "pokemon-img card-img-top");
  elNewImg.src = pokemon.img;

  let elNewInfoWrapper = createElement("div", "card-body");

  let elNewHeading = createElement("h3", "card-title h5 text-center", pokemon.name);
  let elNewText = createElement("p", "card-text text-center", pokemon.type.join(", "));

  elNewInfoWrapper.append(elNewHeading, elNewText);
  elNewLi.append(elNewImg, elNewInfoWrapper);
  
  return elNewLi;
}


let renderElements = function() {
  let elPokemonsWrapperFragment = document.createDocumentFragment();

  pokemons.forEach(function(pokemon) {
    elPokemonsWrapperFragment.appendChild(createPokemonItem(pokemon));
  });
  
  elPokemonsList.appendChild(elPokemonsWrapperFragment);
}

renderElements(pokemons);


