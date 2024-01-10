const ulList = document.querySelector(".list-group");

const fetchPokemonData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.results)
    .catch((error) => {
      console.error("Error:", error);
    });
};

const loadPokemonList = (url) => {
  fetchPokemonData(url)
    .then((pokemonList) => {
      pokemonList.forEach((pokemon) => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        li.classList.add("list-group-item");
        ulList.appendChild(li);
      });
    });
};

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

loadPokemonList(apiUrl);