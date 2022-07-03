<script setup>
import Button from "primevue/button";
console.log("sdasds");
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h5>Basic</h5>
    <Button label="Submit" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
