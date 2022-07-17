<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import ToggleButton from 'primevue/togglebutton'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Fieldset from 'primevue/fieldset'
import TitleContent from '../components/TitleContent.vue'
import regionalOptions from '@/assets/data/regional.json'

const form = reactive({
  nombreCompleto: '',
  rut: '',
  telefono: '',
  correo: '',
  regional: '',
  vieneAcompanante: false,
  acompanante: {
    nombre: '',
    rut: '',
    telefono: '',
    correo: '',
  },
  contactoEmergencia: {
    nombre: '',
    telefono: '',
  },
  restriccionAlimentaria: false,
  comentarioRestriccionAlimentaria: '',
  trasladoPuertoVaras: '',
  requiereTransporteHotel: false,
  requiereTrasladoCeremonia: false,
  incluyePaseo: false,
  paseoIncluyeAcompanante: false,
  incluyeFiesta: false,
  fiestaIncluyeAcompanante: false,
})

const inscripcion = computed(() => {
  if (form.incluyePaseo) {
    return {
      total: '250.000',
      detalle: 'Inscripción General Asociado + Paseo',
    }
  }
  if (form.vieneAcompanante) {
    return {
      total: '300.000',
      detalle: 'Inscripción General Asociado + Acompañante',
    }
  }
  if (form.vieneAcompanante && form.incluyePaseo) {
    return {
      total: '460.000',
      detalle: 'Inscripción General Asociado + Acompañante + Paseo',
    }
  }
  return {
    total: '170.000',
    detalle: 'Inscripción General Asociado',
  }
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

const trasladoPVOptions = ref([
  { nombre: 'Aéreo', value: 'aereo' },
  { nombre: 'Terrestre', value: 'terrestre' },
])

function sendPagoML() {
  if (form.incluyePaseo) {
    window.location.href = 'https://mpago.la/21LS4hs' // 250
    return
  }
  if (form.vieneAcompanante) {
    window.location.href = 'https://mpago.la/2Yf6TvB' // 300
    return
  }
  if (form.vieneAcompanante && form.incluyePaseo) {
    window.location.href = 'https://mpago.la/2zvo2ex' // 460
    return
  }
  window.location.href = 'https://mpago.la/33ujzpJ' // 170
}

function sendPagoPlanilla() {
  // TODO
  
}
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
              v-model="form.nombreCompleto"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="rut"
              placeholder="RUT"
              type="text"
              v-model="form.rut"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono"
              placeholder="Teléfono"
              type="tel"
              v-model="form.telefono"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="correo"
              placeholder="Correo Electrónico"
              type="email"
              v-model="form.correo"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <Dropdown
              v-model="form.regional"
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
            <ToggleButton
              id="tiene-acompanante"
              v-model="form.vieneAcompanante"
              onLabel="Con Acopañante"
              offLabel="Sin Acompañante"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <Fieldset
      legend="Datos Acompañante"
      v-if="form.vieneAcompanante"
      class="mb-3"
    >
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="nombre-acompanante"
              placeholder="Nombre Acompañante"
              type="text"
              v-model="form.acompanante.nombre"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="rut-acompanante"
              placeholder="RUT Acompañante"
              type="text"
              v-model="form.acompanante.rut"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono-acompanante"
              placeholder="Teléfono Acompañante"
              type="tel"
              v-model="form.acompanante.telefono"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="correo-acompanante"
              placeholder="Correo Acompañante"
              type="email"
              v-model="form.acompanante.correo"
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
              v-model="form.contactoEmergencia.nombre"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="telefono-emergencia"
              placeholder="Teléfono Contacto"
              type="tel"
              v-model="form.contactoEmergencia.nombre"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="tiene-restriccion-alimentaria"
              v-model="form.restriccionAlimentaria"
              onLabel="Tengo Restricción Alimentaria"
              offLabel="No Tengo Restricción Alimentaria"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
        </div>
        <div class="col-12 md:col-6" v-if="form.restriccionAlimentaria">
          <div class="p-inputgroup">
            <InputText
              id="comentario-restriccion-alimentaria"
              placeholder="Especifíque su Restriccion"
              type="tel"
              v-model="form.comentarioRestriccionAlimentaria"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Traslado" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <Dropdown
              id="traslado-puerto-varas"
              v-model="form.trasladoPuertoVaras"
              :options="trasladoPVOptions"
              optionLabel="nombre"
              optionValue="value"
              placeholder="Traslado hacia Puerto Varas"
            />
          </div>
        </div>
        <div
          class="col-12 md:col-6"
          v-if="form.trasladoPuertoVaras === 'aereo'"
        >
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="requiere-transporte-hotel"
              v-model="form.requiereTransporteHotel"
              onLabel="Con Transporte Aeropuerto-Hotel-Aeropuerto"
              offLabel="Sin Transporte Aeropuerto-Hotel-Aeropuerto"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="requiere-transporte-hotel"
              v-model="form.requiereTrasladoCeremonia"
              onLabel="Con Traslado a Ceremonia Inauguración"
              offLabel="Sin Traslado a Ceremonia Inauguración"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Pago">
      <div class="grid">
        <div
          class="p-2 col-12 flex flex-column justify-content-center align-items-center"
        >
          <h2 class="my-0">$ {{ inscripcion.total }}.-</h2>
          <p class="mt-1 mb-3 text-sm">{{ inscripcion.detalle }}</p>
        </div>
        <div
          class="col-12 md:col-6 flex justify-content-center align-items-center"
        >
          <Button
            label="Pagar con Mercado Pago"
            class="px-3"
            @click="sendPagoML"
          />
        </div>
        <div
          class="col-12 md:col-6 flex justify-content-center align-items-center"
        >
          <Button
            label="Descuento por Planilla"
            class="px-3"
            @click="sendPagoPlanilla"
          />
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
