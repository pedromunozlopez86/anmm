<script setup>
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
import { format } from '@fiquu/cl-rut'

const emit = defineEmits(['cerrar'])

defineProps({
  inscripcion: Object,
  isVisible: Boolean,
})
</script>
<template>
  <Dialog
    :header="`Inscripción ${inscripcion?.nombreCompleto}`"
    v-model:visible="isVisible"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '70vw' }"
    :modal="true"
  >
    <Divider align="center" type="solid">
      <b class="font-italic">Datos Personales</b>
    </Divider>
    <section class="grid px-4 py-2">
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li><strong>Nombre:</strong> {{ inscripcion?.nombreCompleto }}</li>
        <li><strong>Telefono:</strong> {{ inscripcion?.telefono }}</li>
        <li><strong>Regional:</strong> {{ inscripcion?.regional }}</li>
      </ul>
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li><strong>RUT:</strong> {{ format(inscripcion?.rut) }}</li>
        <li><strong>Correo Electrónico:</strong> {{ inscripcion?.correo }}</li>
        <li>
          <strong>Va con acompañante:</strong>
          {{ inscripcion?.vieneAcompanante ? 'Si' : 'No' }}
        </li>
      </ul>
    </section>
    <Divider align="center" type="solid" v-if="inscripcion?.vieneAcompanante">
      <b class="font-italic">Datos Acompañante</b>
    </Divider>
    <section class="grid px-4 py-2" v-if="inscripcion?.vieneAcompanante">
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>Nombre Acompañante:</strong>
          {{ inscripcion?.acompanante?.nombre }}
        </li>
        <li>
          <strong>Telefono Acompañante:</strong>
          {{ inscripcion?.acompanante?.telefono }}
        </li>
      </ul>
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>RUT Acompañante:</strong>
          {{ format(inscripcion?.acompanante?.rut) }}
        </li>
        <li>
          <strong>Correo Acompañante:</strong>
          {{ inscripcion?.acompanante?.correo }}
        </li>
      </ul>
    </section>
    <Divider align="center" type="solid">
      <b class="font-italic">Contacto Emergencia</b>
    </Divider>
    <section class="grid px-4 py-2">
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>Nombre Contacto:</strong>
          {{ inscripcion?.contactoEmergencia?.nombre }}
        </li>
        <li>
          <strong>Tiene Restricción Alimentaria:</strong>
          {{ inscripcion?.restriccionAlimentaria ? 'Si' : 'No' }}
        </li>
      </ul>
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>Teléfono Contacto:</strong>
          {{ inscripcion?.contactoEmergencia?.telefono }}
        </li>
        <li v-if="inscripcion?.restriccionAlimentaria">
          <strong>Tiene Restricción Alimentaria:</strong>
          {{ inscripcion?.comentarioRestriccionAlimentaria }}
        </li>
      </ul>
    </section>
    <Divider align="center" type="solid">
      <b class="font-italic">Traslado</b>
    </Divider>
    <section class="grid px-4 py-2">
      <ul class="col-12 flex flex-column gap-2 list-none">
        <li>
          <strong>Traslado hacia Puerto Varas: </strong>
          <span class="capitalize">{{ inscripcion?.trasladoPuertoVaras }}</span>
        </li>
        <li>
          <strong
            >Requiere Transporte Aeropuerto - Hotel - Aereopuerto:
          </strong>
          {{ inscripcion?.requiereTransporteHotel ? 'Si' : 'No' }}
        </li>
        <li v-if="inscripcion?.trasladoPuertoVaras === 'aereo'">
          <strong>Requiere Traslado a Ceremonia de Inauguración: </strong>
          {{ inscripcion?.requiereTrasladoCeremonia ? 'Si' : 'No' }}
        </li>
      </ul>
    </section>
    <Divider align="center" type="solid">
      <b class="font-italic">Actividades</b>
    </Divider>
    <section class="grid px-4 py-2">
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>¿Asiste al Paseo?:</strong>
          {{ inscripcion?.incluyePaseo ? 'Si' : 'No' }}
        </li>
      </ul>
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>¿Asiste a la Fiesta de Gala?:</strong>
          {{ inscripcion?.incluyeFiesta ? 'Si' : 'No' }}
        </li>
      </ul>
    </section>
    <Divider align="center" type="solid">
      <b class="font-italic">Pago</b>
    </Divider>
    <section class="grid px-4 py-2">
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>Detalle Inscripción:</strong>
          {{ inscripcion?.valorFinal?.detalle }}
        </li>
        <li>
          <strong>Total Inscripción:</strong>
          ${{ inscripcion?.valorFinal?.total }}
        </li>
      </ul>
      <ul class="col-12 md:col-6 flex flex-column gap-2 list-none">
        <li>
          <strong>Forma de Pago:</strong>
          {{ inscripcion?.formaPago }}
        </li>
        <li v-if="inscripcion?.formaPago.includes('Planilla')">
          <strong>Cuotas:</strong>
          {{ inscripcion?.cuotas }}
        </li>
      </ul>
    </section>
    <section class="flex justify-content-end align-items-center mt-4">
      <Button class="p-button-text" label="Cerrar" @click="emit('cerrar')" />
    </section>
  </Dialog>
</template>

<style lang="scss" scoped></style>
