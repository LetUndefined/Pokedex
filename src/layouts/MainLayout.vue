<script setup lang="ts">
import { RouterView } from 'vue-router';
import router from '@/router';
</script>
<template>
  <nav>
    <v-toolbar :elevation="8" title="Pokédex">
      <v-spacer />
      <v-btn @click="router.push({ name: 'home' })">Home</v-btn>
      <v-btn @click="router.push({ name: 'favorites' })">Favorites</v-btn>
    </v-toolbar>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
}

li {
  list-style: none;
}
</style>
