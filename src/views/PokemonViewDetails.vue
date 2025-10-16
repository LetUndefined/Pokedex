<script setup lang="ts">
import { getPokemonByName, type Pokemon } from '@/services/pokemon.service';
import { useRoute } from 'vue-router';
import { onMounted, type Ref, ref } from 'vue';

const pokemon: Ref<Pokemon | null> = ref(null);
const route = useRoute();

async function getPokemon() {
  try {
    const pokemonName = route.params.name as string;
    const data = await getPokemonByName(pokemonName);
    pokemon.value = data;
  } catch (error) {
    console.error('Error fetching data ', error);
    throw error;
  }
}

onMounted(() => {
  getPokemon();
});
</script>
<template>
  <h1>Pokemon Details</h1>
  <div>{{ pokemon?.name }}</div>
  <div>{{ pokemon?.id }}</div>
  <img :src="pokemon.sprites.versions['generation-v']['black-white'].animated.front_default" />
  <div v-for="(types, index) in pokemon?.types" :key="index">
    {{ types.type }}
  </div>
</template>
