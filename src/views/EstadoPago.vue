<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Inscripción Recibida"
    title-icon="pi-credit-card"
    class="-mt-8 mb-4"
  >
    <div class="flex flex-column align-items-center">
      <h2 class="my-4">Tu pago está siendo procesado</h2>
      <p>
        En pocos los próximos días recibiras un correo indicando los pasos a
        seguir
      </p>
      <p>
        Ahora puedes salir de la página o continuar revisando el itinerario del
        evento
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
