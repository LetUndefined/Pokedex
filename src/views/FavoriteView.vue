<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue';

const favorites: Ref<string[]> = ref([]);

const getAllFavorites = () => {
  const allPokemon = localStorage.getItem('favorites');
  if (allPokemon) {
    favorites.value = JSON.parse(allPokemon);
  }
};

const removeFavorite = (index: number) => {
  favorites.value.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

onMounted(() => {
  getAllFavorites();
});
</script>

<template>
  <div class="favorites-container">
    <v-list v-if="favorites.length === 0">
      <h2 class="title">No Favorites Found!</h2>
    </v-list>
  </div>
  <div class="list-container">
    <v-list lines="one">
      <v-list-item
        v-for="(pokemon, index) in favorites"
        :key="index"
        class="pokemon-list"
        prepend-icon="mdi-delete"
        @click="removeFavorite(index)"
        >{{ pokemon }}</v-list-item
      >
    </v-list>
  </div>
</template>

<style scoped>
.favorites-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.title {
  text-transform: uppercase;
  border: 1px solid black;
  padding: 1rem 2rem;
  box-shadow: 1px 1px 1px;
}
.list-container {
  display: flex;
}
</style>
