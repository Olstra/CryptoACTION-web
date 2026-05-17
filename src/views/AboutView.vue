<template>
  <h1 class="aboutTitle">{{ projectTitle }}</h1>
  <p class="aboutSubtitle">{{ projectSubtitle }}</p>
  <br />
  <p class="aboutParagraph">{{ projectDescription }}</p>
</template>

<script setup lang="ts">
import {
  projectDescription,
  projectSubtitle,
  projectTitle,
} from "../constants/projectDescriptionText.ts";
</script>

<style lang="sass" module>
$text-color: white

.aboutTitle
  color: $text-color
  text-align: justify
  text-align-last: left

.aboutSubtitle
  color: grey

.aboutParagraph
  color: $text-color
  text-align: justify
  text-align-last: left
  hyphens: auto
</style>
