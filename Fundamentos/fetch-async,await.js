// fetch, cosume una URL, devuelve promesa
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.results.forEach((objeto) => {
      console.log(objeto.name);
    });
  })
  .catch((error) => console.log(error));

// async await, await tiene que estar dentro de una funcion async
const obtenerPokemons = async () => {
    try {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
      const datos = await respuesta.json();
      console.log(datos.results);
      datos.results.forEach((pokemon) => {
        console.log(pokemon.name);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  obtenerPokemons();