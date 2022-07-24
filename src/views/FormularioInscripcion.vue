<script setup>
import { computed, reactive, ref } from "vue";
import ToggleButton from "primevue/togglebutton";
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Fieldset from "primevue/fieldset";
import Dialog from "primevue/dialog";
import TitleContent from "@/components/TitleContent.vue";
import regionalOptions from "@/assets/data/regional.json";
import { useEmailJs } from "@/composables";
import { useFormularioStore } from "../stores/formulario";

const { template, sendEmail } = useEmailJs();

const store = useFormularioStore();

function initialData() {
  return {
    nombreCompleto: "",
    rut: "",
    telefono: "",
    correo: "",
    regional: "",
    vieneAcompanante: false,
    acompanante: {
      nombre: "",
      rut: "",
      telefono: "",
      correo: "",
    },
    contactoEmergencia: {
      nombre: "",
      telefono: "",
    },
    restriccionAlimentaria: false,
    comentarioRestriccionAlimentaria: "",
    trasladoPuertoVaras: "",
    requiereTransporteHotel: false,
    requiereTrasladoCeremonia: false,
    incluyePaseo: false,
    incluyeFiesta: false,
    formaPago: "",
    cuotas: null,
    valorFinal: "",
  };
}

const form = reactive(initialData());

const isLoading = ref(false);
const isModalOpen = ref(false);

const inscripcion = computed(() => {
  if (form.incluyePaseo && !form.vieneAcompanante) {
    return {
      total: "250.000",
      detalle: "Inscripción General Asociado + Paseo",
    };
  }
  if (form.vieneAcompanante && !form.incluyePaseo) {
    return {
      total: "300.000",
      detalle: "Inscripción General Asociado + Acompañante",
    };
  }
  if (form.vieneAcompanante && form.incluyePaseo) {
    return {
      total: "460.000",
      detalle: "Inscripción General Asociado + Acompañante + Paseo",
    };
  }
  return {
    total: "170.000",
    detalle: "Inscripción General Asociado",
  };
});

const trasladoPVOptions = ref([
  { nombre: "Aéreo", value: "aereo" },
  { nombre: "Terrestre", value: "terrestre" },
]);

const cuotasOptions = ref([
  { descripcion: "1 Cuota", value: 1 },
  { descripcion: "2 Cuotas", value: 2 },
  { descripcion: "3 Cuotas", value: 3 },
]);

function redirectToML() {
  if (form.incluyePaseo && !form.vieneAcompanante) {
    window.location.href = "https://mpago.la/21LS4hs"; // 250
    return;
  }
  if (form.vieneAcompanante && !form.incluyePaseo) {
    window.location.href = "https://mpago.la/2Yf6TvB"; // 300
    return;
  }
  if (form.vieneAcompanante && form.incluyePaseo) {
    window.location.href = "https://mpago.la/2zvo2ex"; // 460
    return;
  }
  window.location.href = "https://mpago.la/1a8EEiF"; // 170
}

async function pagarPorML() {
  isLoading.value = true;
  form.formaPago = "Mercado Libre";
  form.valorFinal = inscripcion.value;
  await sendEmail(template.INSCRIPCION, form).then((res) => {
    if (res.status === 200) {
      store.formularioInscripcion = form;
      redirectToML();
    }
  });
}

async function pagarPorPlanilla() {
  isLoading.value = true;
  form.formaPago = "Descuento por Planilla";
  form.valorFinal = inscripcion.value;
  const { status } = await sendEmail(template.INSCRIPCION, form);

  if (status === 200) {
    isLoading.value = false;

    const document = await store.addToDb(form);

    console.log(document.id);
  }
}

function openModalCuotas() {
  form.cuotas = 1;
  isModalOpen.value = true;
}

function closeModalCuotas() {
  form.cuotas = null;
  isModalOpen.value = false;
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Formulario Inscripción"
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
            <p class="mr-3">Va con acompañante?</p>
            <ToggleButton
              id="tiene-acompanante"
              v-model="form.vieneAcompanante"
              onLabel="Con Acompañante"
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
              v-model="form.contactoEmergencia.telefono"
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
    <Fieldset legend="Actividades" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6">
          <p class="text-center pb-2">Asistirá al paseo?</p>
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="paseo-final"
              v-model="form.incluyePaseo"
              onLabel="Quiero ir al Paseo Final"
              offLabel="No Quiero ir al Paseo Final"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
          <p class="text-sm pt-3 px-5 text-center">
            Esta actividad tiene un valor adicional de $80.000 por persona.
          </p>
        </div>
        <div class="col-12 md:col-6">
          <p class="text-center pb-2">Asistirá a la fiesta de gala?</p>
          <div class="p-inputgroup flex justify-content-center">
            <ToggleButton
              id="fiesta-final"
              v-model="form.incluyeFiesta"
              onLabel="Quiero ir a la Fiesta Final"
              offLabel="No Quiero ir a la Fiesta Final"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
          <p class="text-sm pt-3 px-5 text-center">
            Esta fiesta está incluída en la inscripción base, pero posee cupos
            limitados.
          </p>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Pago">
      <div class="grid">
        <div class="p-2 col-12">
          <div
            class="flex flex-column justify-content-center align-items-center"
          >
            <h2 class="my-0">$ {{ inscripcion.total }}.-</h2>
            <p class="mt-1 mb-3 text-sm">{{ inscripcion.detalle }}</p>
          </div>
        </div>

        <div
          class="col-12 md:col-6 flex justify-content-center align-items-center"
        >
          <Button
            label="Pagar con Mercado Pago"
            class="px-3"
            @click="pagarPorML"
            :loading="isLoading"
          />
        </div>
        <div
          class="col-12 md:col-6 flex justify-content-center align-items-center"
        >
          <Button
            label="Descuento por Planilla"
            class="px-3"
            @click="openModalCuotas"
            :loading="isLoading"
          />
        </div>
      </div>
    </Fieldset>
  </TitleContent>
  <Dialog v-model:visible="isModalOpen" :modal="true">
    <template #header>
      <h3>Seleccione Número de Cuotas</h3>
    </template>

    <div class="flex justify-content-center align-items-center p-3">
      <SelectButton
        v-model="form.cuotas"
        :options="cuotasOptions"
        optionLabel="descripcion"
        optionValue="value"
      />
    </div>

    <template #footer>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        class="p-button-text mx-3"
        @click="closeModalCuotas"
        :loading="isLoading"
      />
      <Button
        label="Enviar Inscripción"
        icon="pi pi-check"
        class="mx-3"
        autofocus
        @click="pagarPorPlanilla"
        :loading="isLoading"
      />
    </template>
  </Dialog>
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
</style>
