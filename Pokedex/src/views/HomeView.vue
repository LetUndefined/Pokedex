<script setup lang="ts">
import router from '@/router';
import { getAllPokemon } from '@/services/pokemon.service';
import { onMounted, ref, type Ref } from 'vue';

const pokemons: Ref<string[]> = ref([]);

async function loadPokemons() {
  try {
    const data = await getAllPokemon();
    pokemons.value = data.results.map((pokemon) => pokemon.name);
  } catch (error) {
    console.error('Error fetching data ', error);
    throw error;
  }
}

function goToPokemon(pokemonName: string) {
  router.push(`/pokemon/${pokemonName}`);
}

onMounted(() => {
  loadPokemons();
});
</script>
<template>
  <div class="list-container">
    <v-list lines="one">
      <v-list-item
        @click="goToPokemon(pokemon)"
        v-for="(pokemon, index) in pokemons"
        :key="index"
        class="pokemon-list"
        >{{ pokemon }}</v-list-item
      >
    </v-list>
  </div>
</template>

<style scoped>
.list-container {
  margin-top: 2rem;
}

.v-list {
  text-transform: capitalize;
}

.v-list-item {
  align-self: center;
}
</style>
