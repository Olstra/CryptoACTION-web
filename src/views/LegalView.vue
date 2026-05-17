<template>
  <h1>Regulatory Frameworks</h1>
  <LayersExplanation />
  <Map />
</template>

<script setup lang="ts">
import LayersExplanation from "../components/LayersExplanation.vue";
import Map from "../components/Map.vue";
</script>

<style lang="sass">
@use "../styles/gaps" as gaps

.layerImage
  max-width: 100%
  width: 100%
  height: auto
  border-radius: 8px
</style>
