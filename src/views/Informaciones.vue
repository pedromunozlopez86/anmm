<script setup>
import TitleContentVue from "../components/TitleContent.vue";
import TitleContent from "../components/TitleContent.vue";
</script>
<template>
  <div>
    <section id="hero-section"></section>
    <TitleContent title="Informaciones" title-icon="pi-info">
      <div>hola</div>
    </TitleContent>
  </div>
</template>

<style lang="scss" scoped>
#hero-section {
  background-image: url("@/assets/img/hero-informaciones.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: -5rem;
  height: 26.5625rem;
}
</style>
