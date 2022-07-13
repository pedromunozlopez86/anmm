<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import ToggleButton from 'primevue/togglebutton'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import SelectButton from 'primevue/selectbutton'
import Fieldset from 'primevue/fieldset'
import TitleContent from '../components/TitleContent.vue'
import regionalOptions from '@/assets/data/regional.json'

const inscripcion = reactive({
  nombreCompleto: '',
  rut: '',
  telefono: '',
  correo: '',
  regional: '',
  vieneAcompanante: false,
  nombreCompletoAcompanante: '',
  rutAcompanante: '',
  telefonoAcompanante: '',
  correoAcompanante: '',
  nombreEmergencia: '',
  telefonoEmergencia: '',
  restriccionAlimentaria: false,
  comentarioRestriccionAlimentaria: '',
})

const router = useRouter()

const acompananteOptions = ref([
  {
    label: 'Sin acompañante',
    value: false,
  },
  {
    label: 'Con un acompañante',
    value: true,
  },
])
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Formulario Inscripcion"
    title-icon="pi-user-edit"
    class="-mt-8 mb-4"
  >
    <Fieldset legend="Datos Personales" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="nombre"
              placeholder="Nombre"
              type="text"
              v-model="inscripcion.nombreCompleto"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="rut"
              placeholder="RUT"
              type="text"
              v-model="inscripcion.rut"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono"
              placeholder="Teléfono"
              type="tel"
              v-model="inscripcion.telefono"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="correo"
              placeholder="Correo Electrónico"
              type="email"
              v-model="inscripcion.correo"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <Dropdown
              v-model="inscripcion.regional"
              :options="regionalOptions"
              optionLabel="nombre"
              optionValue="nombre"
              :filter="true"
              placeholder="Seleccione una Región"
              emptyMessage="No hay regiones"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup flex justify-content-center">
            <SelectButton
              v-model="inscripcion.vieneAcompanante"
              :options="acompananteOptions"
              optionLabel="label"
              optionValue="value"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <Fieldset
      legend="Datos Acompañante"
      v-if="inscripcion.vieneAcompanante"
      class="mb-3"
    >
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="nombre-acompanante"
              placeholder="Nombre Acompañante"
              type="text"
              v-model="inscripcion.nombreCompletoAcompanante"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="rut-acompanante"
              placeholder="RUT Acompañante"
              type="text"
              v-model="inscripcion.rutAcompanante"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono-acompanante"
              placeholder="Teléfono Acompañante"
              type="tel"
              v-model="inscripcion.telefonoAcompanante"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="correo-acompanante"
              placeholder="Correo Acompañante"
              type="email"
              v-model="inscripcion.correoAcompanante"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Contacto Emergencia" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="nombre-emergencia"
              placeholder="Nombre Contacto"
              type="text"
              v-model="inscripcion.nombreEmergencia"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono-emergencia"
              placeholder="Teléfono Contacto"
              type="tel"
              v-model="inscripcion.telefonoEmergencia"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="tiene-restriccion-alimentaria"
              v-model="inscripcion.restriccionAlimentaria"
              onLabel="Tengo Restricción Alimentaria"
              offLabel="No Tengo Restricción Alimentaria"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
        </div>
        <div class="col-12 md:col-6" v-if="inscripcion.restriccionAlimentaria">
          <div class="p-inputgroup">
            <InputText
              id="comentario-restriccion-alimentaria"
              placeholder="Especifíque su Restriccion"
              type="tel"
              v-model="inscripcion.comentarioRestriccionAlimentaria"
            />
          </div>
        </div>
      </div>
    </Fieldset>
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
</style>
