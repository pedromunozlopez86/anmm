<script setup>
import emailjs from "emailjs-com";
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

function sendEmail() {
  console.log("enviando");

  emailjs
    .sendForm(
      "service_yn5hdas",
      "template_fgzpzj7",
      formulario,
      "5I5SnP5giie3mviTa"
    )
    .then(
      (result) => {
        console.log("ENVIADO!", result.text);
      },
      (error) => {
        console.log("ERROR EN EL ENVIO...", error.text);
      }
    );
}
</script>
<template>
  <div style="height: 300px"></div>
  <div class="grid mt-5">
    <form @submit.prevent id="formulario">
      <InputText></InputText>
      <input label="Nombre:" type="text" name="nombre" id="nombre" />
      <input label="" type="text" name="apellido" id="apellido" />
      <input label="" type="text" name="mail" id="mail" />
      <input label="" type="text" name="telefono" id="telefono" />
      <textarea
        label=""
        type="text"
        name="comentario"
        id="comentario"
      ></textarea>

      <Button type="submit" @click="sendEmail()">enviar</Button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
