<script setup>
import TitleContent from '@/components/TitleContent.vue'
import DocumentCard from '@/components/DocumentCard.vue'
const documentos = [
  {
    antetitulo: 'Corte Suprema y gobierno judicial:',
    titulo: 'Un programa de reformas',
    urlDocumento: '#',
  },
  {
    antetitulo: 'Cuenta anual:',
    titulo: 'Comisión de Gobierno Judicial 2020',
    urlDocumento: '#',
  },
  {
    antetitulo: 'PJUD:',
    titulo: 'Propuesta de Reforma Constitucional',
    urlDocumento: '#',
  },
  {
    antetitulo: 'Informe Relator Especial:',
    titulo: 'Independencia Judicial sobre Consejos Magistratura',
    urlDocumento: '#',
  },
]

function descargarDoc(value) {
  console.log('descargar: ', value)
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Gobierno Judicial"
    title-icon="pi-bookmark"
    class="-mt-8 mb-4"
  >
    <p>
      En esta sección podrán descargar todo el material asociado al trabajo que
      tendremos en esta nueva convención.
    </p>
  </TitleContent>
  <main class="grid py-5 w-9 m-auto">
    <div
      class="col-12 md:col-4 mb-4"
      v-for="doc in documentos"
      :key="doc.titulo"
    >
      <DocumentCard :documento="doc" @descargar-documento="descargarDoc" />
    </div>
  </main>
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

// .p-button {
//   background-color: var(--azul-marino);
// }

// :deep(.p-button:hover) {
//   background-color: var(--azul) !important;
// }

// :deep(.p-inputgroup) {
//   margin-top: 1rem;
// }
</style>
