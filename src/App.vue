<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheHeaderImage from "./components/TheHeaderImage.vue";

</script>

<template>
  <TheNavbar />
  <TheHeaderImage/>
  <RouterView />
  <TheFooter></TheFooter>
  <!-- <video
    autoplay
    controls
    src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Video%20Invitacio%CC%81n.mp4?alt=media&token=647be919-fb5e-4f4b-89d6-7fb805251c1f"
    type="video/mp4"
  ></video> -->
</template>
