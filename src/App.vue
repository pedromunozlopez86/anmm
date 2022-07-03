<script setup>
import { RouterView } from "vue-router";
import TheFooterVue from "../components/TheFooter.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <RouterView />
  <TheFooter></TheFooter>
</template>

<style>
@import "./assets/styles/base.css";
</style>
