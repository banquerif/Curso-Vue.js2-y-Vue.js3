// async await, await tiene que estar dentro de una funcion async
const obtenerPokemons = async () => {
    try {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
      const datos = await respuesta.json();
      // console.log(datos.results);
      const arrayNombres = datos.results.map((pokemon) => pokemon.name);
      console.log(arrayNombres);
    } catch (error) {
      console.log(error);
    }
  };
  
  obtenerPokemons();