<template>
  <footer class="site-footer">
    <p>© {{ year }} UZH, Blockchain Center, CryptoACTION</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="sass">
@use "../styles/colorpalette" as colors
@use "../styles/gaps" as gaps

.site-footer
  color: colors.$text
  padding: gaps.$padding
  margin-left: gaps.$margin
  text-align: left
  border-top: 1px solid colors.$grey-1
</style>
