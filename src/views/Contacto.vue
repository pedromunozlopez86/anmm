<script setup>
import { reactive } from "vue";
import emailjs from "emailjs-com";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import TitleContent from "../components/TitleContent.vue";

const serviceId = "service_k0lhu1i";
const templateId = "template_j26a27k";
const publicKey = "5I5SnP5giie3mviTa";

const formularioContacto = reactive({
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  comentario: "",
});

async function sendEmail() {
  console.log(formularioContacto);
  console.log("enviando");

  await emailjs.send(serviceId, templateId, formularioContacto, publicKey).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Formulario Contacto"
    title-icon="pi-envelope"
    class="-mt-8 mb-4"
  >
    <div class="grid mt-3">
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <InputText
            id="nombre"
            placeholder="Nombre"
            type="text"
            v-model="formularioContacto.nombre"
          />
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <InputText
            id="apellido"
            placeholder="Apellido"
            type="text"
            v-model="formularioContacto.apellido"
          />
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <InputText
            id="correo"
            placeholder="Correo"
            type="email"
            v-model="formularioContacto.correo"
          />
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <InputText
            id="telefono"
            placeholder="Teléfono"
            type="tel"
            v-model="formularioContacto.telefono"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="p-inputgroup">
          <Textarea
            id="comentario"
            class="p-2"
            placeholder="Comentario"
            rows="5"
            cols="120"
            v-model="formularioContacto.comentario"
          />
        </div>
      </div>
      <div class="col-12 flex justify-content-end">
        <Button label="Enviar" class="px-3" @click="sendEmail" />
      </div>
    </div>
  </TitleContent>
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

.p-button {
  background-color: var(--azul-marino);
}

:deep(.p-button:hover) {
  background-color: var(--azul) !important;
}

:deep(.p-inputgroup) {
  margin-top: 1rem;
}
</style>
