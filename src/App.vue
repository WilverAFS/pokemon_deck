<template>
  <div id="app">
    <PokemonDeck />
  </div>
</template>

<script setup>
import PokemonDeck from '@/components/PokemonDeck.vue'
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1e1e2f;
  color: #fff;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
}
</style>
