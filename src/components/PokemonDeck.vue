<template>
  <div class="pokemon-deck-container">
    <header class="app-header">
      <h1>Generador de Deck Pokémon</h1>

      <!-- Formulario para configurar el número de cartas -->
      <form @submit.prevent="generateDeck" class="deck-form">
        <label for="deckSize">Número de cartas para el deck:</label>
        <input id="deckSize" type="number" v-model.number="deckSize" min="1" max="150" required />
        <button type="submit" class="btn-generate" :disabled="loading">
          {{ loading ? 'Generando Deck...' : 'Generar Deck Aleatorio' }}
        </button>
      </form>
    </header>

    <main class="deck-container">
      <div v-if="loading" class="loading-state">
        <p>Cargando cartas del mazo desde la PokéAPI... por favor espera.</p>
      </div>

      <div v-else-if="pokemonDeck.length === 0" class="loading-state">
        <p>Configura el tamaño del deck y haz clic en generar.</p>
      </div>

      <div v-else class="cards-grid">
        <PokemonCard v-for="pokemon in pokemonDeck" :key="pokemon.id" :pokemon="pokemon" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { getAllPokemonList } from '@/services/pokemonService'

const deckSize = ref(40) // Valor por defecto
const pokemonDeck = ref([])
const loading = ref(false)

const generateDeck = async () => {
  loading.value = true
  try {
    // 1. Obtenemos la lista completa de Pokémon
    const allPokemon = await getAllPokemonList()
    const totalCount = allPokemon.length

    // Validar que el tamaño solicitado no supere el total disponible
    const requestedSize = Math.min(Math.max(1, deckSize.value), totalCount)

    // 2. Generar números aleatorios únicos entre 0 y totalCount - 1
    const randomIndices = new Set()
    while (randomIndices.size < requestedSize) {
      const randomIndex = Math.floor(Math.random() * totalCount)
      randomIndices.add(randomIndex)
    }

    // Mapear los índices aleatorios a los objetos de resultados
    const selectedEntries = Array.from(randomIndices).map((index) => allPokemon[index])

    // 3. Consultar en paralelo los detalles de cada Pokémon seleccionado
    const detailedPromises = selectedEntries.map(async (item) => {
      const res = await fetch(item.url)
      const details = await res.json()

      return {
        id: details.id,
        name: details.name,
        image:
          details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
        height: details.height,
        weight: details.weight,
        types: details.types.map((t) => t.type.name),
        abilities: details.abilities.slice(0, 2).map((a) => a.ability.name),
      }
    })

    pokemonDeck.value = await Promise.all(detailedPromises)
  } catch (error) {
    console.error('Error al generar el deck:', error)
  } finally {
    loading.value = false
  }
}

// Generar el deck inicial automáticamente al cargar la vista
onMounted(() => {
  generateDeck()
})
</script>

<style src="./PokemonDeck.css" scoped></style>
