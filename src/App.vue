<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter></TheFooter>
</template>
