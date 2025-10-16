<script setup lang="ts">
import { getAllPokemon } from '@/services/list.service'
import { onMounted, ref, type Ref } from 'vue'

const pokemons: Ref<string[]> = ref([])

async function loadPokemons() {
  try {
    const data = await getAllPokemon()
    pokemons.value = data.results.map((pokemon) => pokemon.name)
  } catch (error) {
    console.error('Error fetching data ', error)
    throw error
  }
}

onMounted(() => {
  loadPokemons()
})
</script>
<template>
  <h1>All Pokemons</h1>
  <ul>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      {{ pokemon }}
    </li>
  </ul>
</template>
