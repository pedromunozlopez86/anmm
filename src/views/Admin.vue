<script setup>
import { onMounted, ref } from 'vue'
import { useInscripcionStore } from '../stores/inscripcion'
import TitleContent from '../components/TitleContent.vue'
import TablaInscripciones from '../components/TablaInscripciones.vue'
import ModalInfoInscripcion from '../components/ModalInfoInscripcion.vue'

const store = useInscripcionStore()

const isLoading = ref(false)
const propInscripcion = ref()
const showInfoModal = ref(false)

onMounted(async () => {
  isLoading.value = true
  await getData()
  isLoading.value = false
})

async function getData() {
  await store.getInscripciones()
}

function openModalInfo(inscripcion) {
  propInscripcion.value = inscripcion
  showInfoModal.value = true
}

function closeModalInfo() {
  showInfoModal.value = false
  propInscripcion.value = null
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent title="Admin BD" title-icon="pi-server" class="-mt-8 mb-4">
    <TablaInscripciones
      :loading="isLoading"
      :value="store.inscripciones"
      @mostrar-info="openModalInfo"
      class="mt-4"
    />
  </TitleContent>
  <ModalInfoInscripcion
    :is-visible="showInfoModal"
    :inscripcion="propInscripcion"
    @cerrar="closeModalInfo"
  />
</template>

<style lang="scss" scoped>
#hero-section {
  background-image: url('@/assets/img/hero-contacto.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: -5rem;
  height: 26.5625rem;
}

img {
  vertical-align: middle;
}
</style>
