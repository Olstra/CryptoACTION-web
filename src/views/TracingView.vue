<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "TracingView",
  components: { Footer, Header },
});
</script>

<template>
  <h1>Tracing techniques:</h1>
  <h2>Graph / ML based</h2>
  <p>...</p>
  <h2>Rule based</h2>
  <p>...</p>
  <h2>Heuristics based</h2>
  <p>...</p>
</template>

<style scoped lang="sass"></style>
