const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    for (let character of characters) {
      console.log(character);
      $container.innerHTML += `
        <div class="option-name"> <img class="character-img" src="${character.image}" alt="imagen de ${character.name}"> 
        <h3>${character.name}</h3>
        </div>
      `;
    }
  });