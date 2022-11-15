<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";

console.log("Versión 1.4 - PM");
</script>

<template>
  <div>
    <TheNavbar class="w-full" />
    <RouterView />
    <TheFooter></TheFooter>
    <Toast position="bottom-center" />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
