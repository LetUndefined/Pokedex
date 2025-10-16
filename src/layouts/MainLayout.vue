<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <ul class="navigation-container">
      <li>Pokédex</li>
      <li>Home</li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
}

.navigation-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style-type: none;
  margin: 1rem;
  border: 1px solid black;
}
</style>
