<script setup lang="ts">
import { getPokemonByName, type Pokemon } from '@/services/pokemon.service';
import { useRoute } from 'vue-router';
import { onMounted, type Ref, ref } from 'vue';

const pokemon: Ref<Pokemon | null> = ref(null);
const route = useRoute();
const favorites: Ref<string[]> = ref([]);

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

const addFavorites = () => {
  const data = route.params.name as string;
  favorites.value.push(data);
  console.log(favorites.value);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

onMounted(() => {
  getPokemon();
  const storedPokemon = localStorage.getItem('favorites');
  if (storedPokemon) {
    favorites.value = JSON.parse(storedPokemon);
  }
});
</script>
<template>
  <main>
    <v-card class="card">
      <v-card-item>
        <v-card-title>{{ pokemon?.name }}</v-card-title>
        <v-card-subtitle>#{{ pokemon?.id }}</v-card-subtitle>
      </v-card-item>
      <v-img
        class="pokemon-image"
        :src="pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default"
      />
      <v-card-text>
        <div class="pokemon-type-container">
          <div class="pokemon-type" v-for="(types, index) in pokemon?.types" :key="index">
            <v-chip>
              {{ types.type.name }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addFavorites()" prepend-icon="mdi-star" elevation="1">Toevoegen</v-btn>
      </v-card-actions>
    </v-card>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
}
.card {
  width: 300px;
  height: 450px;
  box-shadow: 1px 1px 1px;
  border: 1px solid black;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.v-chip {
  margin: 2px;
}

.v-card-title {
  font-weight: bold;
  text-transform: capitalize;
}

.v-card-actions {
  display: flex;
  justify-content: flex-end;
}

.v-card-actions .v-btn {
  background-color: rgb(115, 120, 206);
  text-transform: lowercase;
  text-transform: capitalize;
}

.pokemon-image {
  width: 250px;
  max-height: 250px;
  align-self: center;
}
</style>
