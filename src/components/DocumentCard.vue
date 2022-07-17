<script setup>
import Button from 'primevue/button'
defineProps({
  documento: Object,
})
</script>
<template>
  <div
    class="bg-white shadow-3 flex flex-column align-items-center justify-content-around h-15rem"
  >
    <div
      class="-mt-4 border-circle w-3rem h-3rem flex justify-content-center align-items-center celeste-oscuro"
    >
      <i class="text-2xl text-white pi pi-file-pdf"></i>
    </div>
    <div class="p-3 w-full mt-2">
      <span>{{ documento.antetitulo }}</span>
      <h3>{{ documento.titulo }}</h3>
    </div>
    <div class="p-3 w-full">
      <Button
        label="Descargar"
        class="w-full p-button-outlined p-button-info"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.celeste-oscuro {
  background-color: var(--celeste-oscuro);
}
</style>
