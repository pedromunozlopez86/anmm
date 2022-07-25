<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Inscripción Recibida"
    title-icon="pi-credit-card"
    class="-mt-8 mb-4"
  >
    <div class="flex flex-column align-items-center">
      <h2 class="my-4">Tu Inscripción ha sido recibida y confirmada</h2>
      <p>
        Puedes seguir navegando en nuestra página e informarte de todas las
        novedades de esta Convención. Nos vemos en Puerto Varas !
      </p>
    </div>
  </TitleContent>
</template>
<script setup>
import { onMounted } from "vue";
import TitleContent from "@/components/TitleContent.vue";
import { useFormularioStore } from "../stores/formulario";

const store = useFormularioStore();

const props = defineProps({
  estadoPago: String,
});

onMounted(async () => {
  const data = {
    ...store.formularioInscripcion,
    estadoPago: props.estadoPago,
  };
  await store.addToDb(data);
});
</script>
<style lang="scss" scoped>
#hero-section {
  background-image: url("@/assets/img/hero-contacto.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: -5rem;
  height: 26.5625rem;
}

:deep(.p-button:hover) {
  background-color: var(--azul) !important;
}

:deep(.p-inputgroup) {
  margin-top: 1rem;
}
</style>
