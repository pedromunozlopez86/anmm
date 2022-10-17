<script setup>
import TitleContent from "@/components/TitleContent.vue";
import DocumentCard from "@/components/DocumentCard.vue";
const documentos = [
  {
    antetitulo: "",
    titulo: "Orgánica del Consejo Superior",
    urlDocumento: "#",
  },
  {
    antetitulo: "",
    titulo: "Responsabilidad y Evaluación de Desempeño",
    urlDocumento: "#",
  },
  {
    antetitulo: "",
    titulo: "Nombramiento de Juezas y Jueces. Nuevo Diseño de Carrera Judicial",
    urlDocumento: "#",
  },
  {
    antetitulo: "",
    titulo: "Administración CAPJ y Academia Judicial",
    urlDocumento: "#",
  },
];

function descargarDoc(value) {
  console.log("descargar: ", value);
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent title="Comisiones" title-icon="pi-bookmark" class="-mt-8 mb-4">
    <p>
      La definición de Comisiones de trabajo tendrá lugar en asamblea a realizar
      en Agosto próximo, por lo que serán informadas posterior a esta fecha.
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
  background-image: url("@/assets/img/hero-contacto.png");
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
