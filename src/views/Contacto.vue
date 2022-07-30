<script setup>
import { computed, reactive, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import TitleContent from '../components/TitleContent.vue'
import { useEmailJs } from '../composables'
import { required, email, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useToast } from 'primevue/usetoast'

const { template, sendEmail } = useEmailJs()
const toast = useToast()

const isLoading = ref(false)

const form = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
  comentario: '',
  submitted: false,
})

function resetForm() {
  Object.assign(form, {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    comentario: '',
    submitted: false,
  })
}

const validations = {
  required: helpers.withMessage('El campo es requerido', required),
  email: helpers.withMessage('El email no es válido', email),
}

const rules = computed(() => {
  return {
    nombre: { required: validations.required },
    apellido: { required: validations.required },
    correo: { required: validations.required, email: validations.email },
    telefono: { required: validations.required },
    comentario: { required: validations.required },
  }
})

const v$ = useVuelidate(rules, form)

function isInvalid(value) {
  return value.$invalid && form.submitted
}

function invalidMessage(value) {
  return value.$message
}

function showToast({ severity, title, message }) {
  toast.add({
    severity: severity,
    summary: title,
    detail: message,
    life: 3000,
  })
}

async function enviarEmail(isFormValid) {
  form.submitted = true

  if (!isFormValid) {
    showToast({
      severity: 'error',
      title: 'Espera!',
      message: 'Aun faltan campos por completar',
    })
    return
  }

  isLoading.value = true
  await sendEmail(template.CONTACTO, form).then((res) => {
    if (res.status === 200) {
      console.log('exito')
      isLoading.value = false
      resetForm()
      showToast({
        severity: 'success',
        title: 'Enviado!',
        message: 'Tu comentario se ha enviado exitosamente',
      })
    }
  })
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
        <div class="p-inputgroup p-float-label flex flex-column">
          <InputText
            id="nombre"
            v-model="form.nombre"
            class="w-full"
            :class="{ 'p-invalid': isInvalid(v$.nombre) }"
          />
          <label for="nombre" :class="{ 'p-error': isInvalid(v$.nombre) }">
            Nombre
          </label>
        </div>
        <small v-if="isInvalid(v$.nombre)" class="p-error">
          {{ invalidMessage(v$.nombre.required) }}
        </small>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup p-float-label flex flex-column">
          <InputText
            id="apellido"
            type="text"
            v-model="form.apellido"
            class="w-full"
            :class="{ 'p-invalid': isInvalid(v$.apellido) }"
          />
          <label for="apellido" :class="{ 'p-error': isInvalid(v$.apellido) }">
            Apellido
          </label>
        </div>
        <small v-if="isInvalid(v$.apellido)" class="p-error">
          {{ invalidMessage(v$.apellido.required) }}
        </small>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup p-float-label flex flex-column">
          <InputText
            id="correo"
            type="email"
            v-model="form.correo"
            class="w-full"
            :class="{ 'p-invalid': isInvalid(v$.correo) }"
          />
          <label for="correo" :class="{ 'p-error': isInvalid(v$.correo) }">
            Correo
          </label>
        </div>
        <small v-if="isInvalid(v$.correo) && !form.correo" class="p-error">
          {{ invalidMessage(v$.correo.required) }}
        </small>
        <small v-if="isInvalid(v$.correo) && form.correo" class="p-error">
          {{ invalidMessage(v$.correo.email) }}
        </small>
      </div>
      <div class="col-12 md:col-6">
        <div class="p-inputgroup p-float-label flex flex-column">
          <InputText
            id="telefono"
            type="tel"
            v-model="form.telefono"
            class="w-full"
            :class="{ 'p-invalid': isInvalid(v$.telefono) }"
          />
          <label for="telefono" :class="{ 'p-error': isInvalid(v$.telefono) }">
            Teléfono
          </label>
        </div>
        <small v-if="isInvalid(v$.telefono)" class="p-error">
          {{ invalidMessage(v$.telefono.required) }}
        </small>
      </div>
      <div class="col-12">
        <div class="p-inputgroup p-float-label flex flex-column">
          <Textarea
            id="comentario"
            class="p-2 w-full"
            rows="5"
            cols="120"
            v-model="form.comentario"
            :class="{ 'p-invalid': isInvalid(v$.comentario) }"
          />
          <label
            for="comentario"
            :class="{ 'p-error': isInvalid(v$.comentario) }"
          >
            Comentario
          </label>
        </div>
        <small v-if="isInvalid(v$.comentario)" class="p-error">
          {{ invalidMessage(v$.comentario.required) }}
        </small>
      </div>
      <div class="col-12 flex justify-content-end">
        <Button
          label="Enviar"
          class="px-3"
          @click="enviarEmail(!v$.$invalid)"
          :loading="isLoading"
        />
      </div>
    </div>
  </TitleContent>
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
