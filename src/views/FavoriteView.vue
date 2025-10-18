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
.list-container {
  display: flex;
}
</style>
