const poke_container = document.getElementById('poke_container'); //partimos referenciando elemento donde inyectaremos los pokemon
const pokemons_number = 150; //definimos el número máximo de pokemones
const colors = { //arreglo para identificar colores de los tipo
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors); //se relacionan los tipos con los colores definidos

console.log(main_types); // (prueba para verificar si cargan los tipos)

//fetch all the pokemons
const fetchPokemons = async () => { 
    for(let i=1; i<=pokemons_number; i++){
        await getPokemon(i);
    }
}

//get specific pokemon
const getPokemon = async id => {
    const url = 
`https://pokeapi.co/api/v2/pokemon/${id}`;
const res = await fetch(url);
const pokemon = await res.json();
createPokemonCard(pokemon);
}

fetchPokemons();

//this create cards
function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

const poke_types = pokemon.types.map(el => el.type.name);
const type = main_types.find(
    type => poke_types.indexOf(type) > -1
    );

    const name = pokemon.name[0].toUpperCase()
    + pokemon.name.slice(1);
    const color = colors[type];
    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
    <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
    </div>
    <div class="info">
<span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
<h3  class="name">${name}</h3>
<small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
}


// //Buscador opcion 1
// $(document).ready(function () {
//     $("#anythingSearch").on("keyup", function () {
//       var value = $(this).val().toLowerCase();
//       $(".pokemon").filter(function () {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });

  //Buscador opcion 2
//   $(document).ready(function () {
// const searchBar = document.forms['formS'].querySelector('input');
// searchBar.addEventListener('keyup', function(e) {
//     const term = e.target.value.toLowerCase();
//     const pokemones = poke_container.getElementsByClassName('.pokemon');
//     Array.from(pokemones).forEach(function(el) {
//         if(el.name.indexOf(term) == -1){
//             el.style.display = 'none';
//         }
//     } )
// })});

//Buscador opcion 3
$(document).ready(function () {
$("#anythingSearch").on("keyup", function () {
 var value = $(this).val().toLowerCase();
 console.log('Value: ', value);
 const pokemones = poke_container.getElementsByClassName('.pokemon');
    Array.from(pokemones).forEach(function(el) {
        if(el.name.indexOf(term) == -1){
            el.style.display = 'none';
        }
    } )
})});