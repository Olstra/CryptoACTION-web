<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <section class="content-section">
    <RouterView />
  </section>
  <Footer />
</template>
