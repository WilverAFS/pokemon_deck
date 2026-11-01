/**
 * src/services/pokemonServices.js
 *
 * Servicio encargado de consumir la PokeAPI. Se encarga de traer el listado de pokemones de una sola vez.
 */

let cachedPokemonList = []

export async function getAllPokemonList() {
  if (cachedPokemonList.length > 0) {
    return cachedPokemonList
  }

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await response.json()
    cachedPokemonList = data.results // Contiene el arreglo con { name, url }
    return cachedPokemonList
  } catch (error) {
    console.error('Error al obtener la lista general de Pokémon:', error)
    throw error
  }
}
