<template>
  <div class="pokemon-card">
    <div class="card-header">
      <span class="pokemon-name">{{ pokemon.name }}</span>
      <span class="pokemon-id">#{{ String(pokemon.id).padStart(3, '0') }}</span>
    </div>

    <div class="image-container">
      <img :src="pokemon.image" :alt="pokemon.name" />
    </div>

    <div class="pokemon-types">
      <span v-for="type in pokemon.types" :key="type" class="type-badge" :class="type">
        {{ type }}
      </span>
    </div>

    <div class="pokemon-info">
      <p><strong>Altura:</strong> {{ pokemon.height / 10 }} m</p>
      <p><strong>Peso:</strong> {{ pokemon.weight / 10 }} kg</p>
    </div>

    <div class="pokemon-abilities">
      <strong>Habilidades:</strong>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability">
          {{ ability }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})
</script>

<style src="./PokemonCard.css" scoped></style>
