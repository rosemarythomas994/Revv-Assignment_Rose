<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px); /* Adjust to match header+footer height */
  padding-top: 1rem;
}
</style>
