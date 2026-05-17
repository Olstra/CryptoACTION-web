<template>
  <header class="siteHeader">
    <div class="brand">
      <img :src="logo" alt="CryptoACTION logo" class="navLogo" />
      <span class="navTitle">CryptoACTION</span>
    </div>

    <div class="hamburgerContainer">
      <button class="hamburger" @click="open = !open">
        <span class="hamburgerBar" />
        <span class="hamburgerBar" />
        <span class="hamburgerBar" />
      </button>
    </div>

    <div :class="{ wrapper: true, open: open }">
      <ul class="tabs">
        <li v-for="t in tabs" :key="t.id">
          <router-link
            :to="t.path"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a
              :href="href"
              :id="`btn-${t.id}`"
              :class="makeClass(isActive)"
              @click="
                () => {
                  open = false;
                  navigate();
                }
              "
            >
              {{ t.label }}
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "../assets/cryptoaction_logo.png";

const open = ref(false);

const tabs = [
  { id: "tabOne", label: "Monitoring", path: "/" },
  { id: "tabTwo", label: "Legal", path: "/legal" },
  { id: "tabThree", label: "Tracing", path: "/tracing" },
  { id: "tabFour", label: "About", path: "/about" },
];

const makeClass = (isActive: boolean) =>
  `switch ${isActive ? "activeTab" : ""}`.trim();
</script>

<style scoped lang="sass">
@use "../styles/colorpalette" as colors
@use "../styles/gaps" as gaps

$tab-bg: colors.$uzh-gold
$active-bg: colors.$uzh-gold
$text-color: white
$background-color: colors.$uzh-blue

.siteHeader
  display: flex
  align-items: center
  justify-content: space-between
  padding: gaps.$padding gaps.$padding 0 gaps.$padding
  background: $background-color
  border-bottom: 1px solid #e6e6e6
  position: sticky
  top: 0
  z-index: 9999

.brand
  background: $background-color
  display: flex
  align-items: center

.navLogo
  padding-bottom: 10px
  background: transparent
  height: 50px
  width: auto

.navTitle
  padding-bottom: 10px
  background: $background-color
  color: $text-color
  font-size: 22px

.wrapper
  background: $background-color
  flex: 1
  display: flex
  justify-content: end
  border: none

ul.tabs
  background: $background-color
  width: 420px
  margin-right: gaps.$margin
  list-style: none
  overflow: hidden
  padding: 0
  display: flex
  align-items: flex-end

ul.tabs li
  background: $background-color
  flex: auto
  text-align: center

.tabs li:first-child a.switch
  border-top-left-radius: 8px

.tabs li:last-child a.switch
  border-top-right-radius: 8px

a.switch
  background: $tab-bg
  color: black
  display: block
  cursor: pointer
  text-decoration: none
  padding: 10px
  font-size: 18px
  opacity: 0.8
  transition: padding 0.2s ease, margin 0.2s ease
  border-bottom: 0

a.switch:hover
  opacity: 0.9
  padding-top: 15px

a.switch.activeTab
  opacity: 1
  border-bottom: 0
  padding-top: 20px
  font-weight: bold

.hamburgerContainer
  background: transparent
  margin-right: gaps.$margin

.hamburger
  display: none
  background: transparent
  border: 0
  padding: 8px
  cursor: pointer

.hamburgerBar
  display: block
  width: 22px
  height: 2px
  background: $text-color
  margin: 4px 0
  transition: transform 0.2s ease, opacity 0.2s ease

@media (max-width: 768px)
  .wrapper
    position: absolute
    top: 60px
    right: gaps.$padding
    width: 35%
    background: $background-color
    border-radius: 8px
    max-height: 0
    overflow: hidden
    transition: max-height 0.25s ease

  .wrapper.open
    max-height: 320px

  a.switch
    color: $text-color
    border: none
    border-radius: 0
    background: transparent

  a.switch.activeTab
    border: none
    border-radius: 0
    border-bottom: 1px solid $text-color

  .tabs
    flex-direction: column
    width: 100%

  .switch
    display: block
    padding: 12px 16px
    border-radius: 6px

  .hamburger
    display: block

  .siteHeader
    padding: 12px
</style>
