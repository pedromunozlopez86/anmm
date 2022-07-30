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
import { useRouter } from "vue-router";
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { format, validate } from "@fiquu/cl-rut";
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();
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
const submitted = ref(false);

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

const validations = {
  required: helpers.withMessage("El campo es requerido", required),
  email: helpers.withMessage("El email no es válido", email),
  rutValid: helpers.withMessage("El RUT no es válido", (v) => validate(v)),
};

const rules = computed(() => {
  return {
    nombreCompleto: { required: validations.required },
    rut: { required: validations.required, rutValid: validations.rutValid },
    telefono: { required: validations.required },
    correo: { required: validations.required, email: validations.email },
    regional: { required: validations.required },
    acompanante: form.vieneAcompanante
      ? {
          nombre: { required: validations.required },
          rut: {
            required: validations.required,
            rutValid: validations.rutValid,
          },
          telefono: { required: validations.required },
          correo: { required: validations.required, email: validations.email },
        }
      : {},
    contactoEmergencia: {
      nombre: { required: validations.required },
      telefono: { required: validations.required },
    },
    comentarioRestriccionAlimentaria: form.restriccionAlimentaria
      ? { required: validations.required }
      : {},
    trasladoPuertoVaras: { required: validations.required },
  };
});

const v$ = useVuelidate(rules, form);

function isInvalid(value) {
  return value.$invalid && submitted.value;
}

function invalidMessage(value) {
  return value.$message;
}

function redirectToML() {
  if (form.incluyePaseo && !form.vieneAcompanante) {
    window.location.href = "https://mpago.la/1znUdti"; // 250
    return;
  }
  if (form.vieneAcompanante && !form.incluyePaseo) {
    window.location.href = "https://mpago.la/2gdEXJ9"; // 300
    return;
  }
  if (form.vieneAcompanante && form.incluyePaseo) {
    window.location.href = "https://mpago.la/2TmDyPX"; // 460
    return;
  }
  window.location.href = "https://mpago.la/2TiWEuX"; // 170
}

async function pagarPorML(isFormValid) {
  submitted.value = true;

  if (!isFormValid) {
    showToast({
      severity: "error",
      title: "Espera!",
      message: "Aun faltan campos por completar",
    });
    return;
  }

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
    router.push("/inscripciones/estado-pago/:estadoPago");
  }
}

function openModalCuotas(isFormValid) {
  submitted.value = true;

  if (!isFormValid) {
    showToast({
      severity: "error",
      title: "Espera!",
      message: "Aun faltan campos por completar",
    });
    return;
  }

  form.cuotas = 1;
  isModalOpen.value = true;
}

function closeModalCuotas() {
  form.cuotas = null;
  isModalOpen.value = false;
}

function formatRut(value) {
  let localValue = value;

  if (value.length > 3) {
    localValue = format(value.replace("-", ""));
  }
  return localValue;
}

function rutPrincipal({ target: { value } }) {
  form.rut = formatRut(value);
}

function rutAcompanante({ target: { value } }) {
  form.acompanante.rut = formatRut(value);
}

function showToast({ severity, title, message }) {
  toast.add({
    severity: severity,
    summary: title,
    detail: message,
    life: 3000,
  });
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
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="nombre"
              type="text"
              v-model="form.nombreCompleto"
              class="w-full"
              :class="{ 'p-invalid': isInvalid(v$.nombreCompleto) }"
            />
            <label
              for="nombre"
              :class="{ 'p-error': isInvalid(v$.nombreCompleto) }"
            >
              Nombre
            </label>
          </div>
          <small v-if="isInvalid(v$.nombreCompleto)" class="p-error">
            {{ invalidMessage(v$.nombreCompleto.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="rut"
              type="text"
              v-model="form.rut"
              class="w-full"
              :class="{ 'p-invalid': isInvalid(v$.rut) }"
              @input="rutPrincipal"
            />
            <label for="rut" :class="{ 'p-error': isInvalid(v$.rut) }">
              RUT
            </label>
          </div>
          <small v-if="isInvalid(v$.rut) && !form.rut" class="p-error">
            {{ invalidMessage(v$.rut.required) }}
          </small>
          <small v-if="isInvalid(v$.rut) && form.rut" class="p-error">
            {{ invalidMessage(v$.rut.rutValid) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="telefono"
              type="tel"
              v-model="form.telefono"
              class="w-full"
              :class="{ 'p-invalid': isInvalid(v$.telefono) }"
            />
            <label
              for="telefono"
              :class="{ 'p-error': isInvalid(v$.telefono) }"
            >
              Teléfono
            </label>
          </div>
          <small v-if="isInvalid(v$.telefono)" class="p-error">
            {{ invalidMessage(v$.telefono.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="correo"
              class="w-full"
              type="email"
              v-model="form.correo"
              :class="{ 'p-invalid': isInvalid(v$.correo) }"
            />
            <label for="correo" :class="{ 'p-error': isInvalid(v$.correo) }">
              Correo Electrónico
            </label>
          </div>
          <small v-if="isInvalid(v$.correo) && !form.correo" class="p-error">
            {{ invalidMessage(v$.correo.required) }}
          </small>
          <small v-if="isInvalid(v$.correo) && form.correo" class="p-error">
            {{ invalidMessage(v$.correo.email) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <Dropdown
              id="regional"
              v-model="form.regional"
              :options="regionalOptions"
              optionLabel="nombre"
              optionValue="nombre"
              :filter="true"
              class="w-full"
              emptyMessage="No hay regiones"
              :class="{ 'p-invalid': isInvalid(v$.regional) }"
            />
            <label
              for="regional"
              :class="{ 'p-error': isInvalid(v$.regional) }"
            >
              Regional
            </label>
          </div>
          <small v-if="isInvalid(v$.regional)" class="p-error">
            {{ invalidMessage(v$.regional.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div
            class="p-inputgroup flex justify-content-center align-items-center"
          >
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
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="nombre-acompanante"
              class="w-full"
              type="text"
              v-model="form.acompanante.nombre"
              :class="{ 'p-invalid': isInvalid(v$.acompanante.nombre) }"
            />
            <label
              for="nombre-acompanante"
              :class="{ 'p-error': isInvalid(v$.acompanante.nombre) }"
            >
              Nombre Acompañante
            </label>
          </div>
          <small v-if="isInvalid(v$.acompanante.nombre)" class="p-error">
            {{ invalidMessage(v$.acompanante.nombre.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="rut-acompanante"
              class="w-full"
              type="text"
              v-model="form.acompanante.rut"
              :class="{ 'p-invalid': isInvalid(v$.acompanante.rut) }"
              @input="rutAcompanante"
            />
            <label
              for="rut-acompanante"
              :class="{ 'p-error': isInvalid(v$.acompanante.rut) }"
            >
              RUT Acompañante
            </label>
          </div>
          <small
            v-if="isInvalid(v$.acompanante.rut) && !form.acompanante.rut"
            class="p-error"
          >
            {{ invalidMessage(v$.acompanante.rut.required) }}
          </small>
          <small
            v-if="isInvalid(v$.acompanante.rut) && form.acompanante.rut"
            class="p-error"
          >
            {{ invalidMessage(v$.acompanante.rut.rutValid) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="telefono-acompanante"
              class="w-full"
              type="tel"
              v-model="form.acompanante.telefono"
              :class="{ 'p-invalid': isInvalid(v$.acompanante.telefono) }"
            />
            <label
              for="telefono-acompanante"
              :class="{ 'p-error': isInvalid(v$.acompanante.telefono) }"
            >
              Teléfono Acompañante
            </label>
          </div>
          <small v-if="isInvalid(v$.acompanante.telefono)" class="p-error">
            {{ invalidMessage(v$.acompanante.telefono.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="correo-acompanante"
              class="w-full"
              type="email"
              v-model="form.acompanante.correo"
              :class="{ 'p-invalid': isInvalid(v$.acompanante.correo) }"
            />
            <label
              for="correo-acompanante"
              :class="{ 'p-error': isInvalid(v$.acompanante.correo) }"
            >
              Correo Acompañante
            </label>
          </div>
          <small
            v-if="isInvalid(v$.acompanante.correo) && !form.acompanante.correo"
            class="p-error"
          >
            {{ invalidMessage(v$.acompanante.correo.required) }}
          </small>
          <small
            v-if="isInvalid(v$.acompanante.correo) && form.acompanante.correo"
            class="p-error"
          >
            {{ invalidMessage(v$.acompanante.correo.email) }}
          </small>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Contacto Emergencia" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="nombre-emergencia"
              type="text"
              v-model="form.contactoEmergencia.nombre"
              class="w-full"
              :class="{ 'p-invalid': isInvalid(v$.contactoEmergencia.nombre) }"
            />
            <label
              for="nombre-emergencia"
              :class="{ 'p-error': isInvalid(v$.contactoEmergencia.nombre) }"
            >
              Nombre Contacto
            </label>
          </div>
          <small v-if="isInvalid(v$.contactoEmergencia.nombre)" class="p-error">
            {{ invalidMessage(v$.contactoEmergencia.nombre.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="telefono-emergencia"
              class="w-full"
              type="tel"
              v-model="form.contactoEmergencia.telefono"
              :class="{
                'p-invalid': isInvalid(v$.contactoEmergencia.telefono),
              }"
            />
            <label
              for="telefono-emergencia"
              :class="{ 'p-error': isInvalid(v$.contactoEmergencia.telefono) }"
            >
              Teléfono Contacto
            </label>
          </div>
          <small
            v-if="isInvalid(v$.contactoEmergencia.telefono)"
            class="p-error"
          >
            {{ invalidMessage(v$.contactoEmergencia.telefono.required) }}
          </small>
        </div>
        <div class="col-12 md:col-6 mt-1">
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
        <div class="col-12 md:col-6 mt-1" v-if="form.restriccionAlimentaria">
          <div class="p-inputgroup p-float-label flex flex-column">
            <InputText
              id="comentario-restriccion-alimentaria"
              type="tel"
              class="w-full"
              v-model="form.comentarioRestriccionAlimentaria"
              :class="{
                'p-invalid': isInvalid(v$.comentarioRestriccionAlimentaria),
              }"
            />
            <label
              for="comentario-restriccion-alimentaria"
              :class="{
                'p-error': isInvalid(v$.comentarioRestriccionAlimentaria),
              }"
            >
              Especifíque su Restriccion
            </label>
          </div>
          <small
            v-if="isInvalid(v$.comentarioRestriccionAlimentaria)"
            class="p-error"
          >
            {{ invalidMessage(v$.comentarioRestriccionAlimentaria.required) }}
          </small>
        </div>
      </div>
    </Fieldset>
    <Fieldset legend="Traslado" class="mb-3">
      <div class="grid">
        <div class="col-12 md:col-6 mt-1">
          <div class="p-inputgroup p-float-label flex flex-column">
            <Dropdown
              id="traslado-puerto-varas"
              v-model="form.trasladoPuertoVaras"
              :options="trasladoPVOptions"
              optionLabel="nombre"
              optionValue="value"
              class="w-full"
              :class="{ 'p-invalid': isInvalid(v$.trasladoPuertoVaras) }"
            />
            <label
              for="traslado-puerto-varas"
              :class="{ 'p-error': isInvalid(v$.trasladoPuertoVaras) }"
            >
              Traslado hacia Puerto Varas
            </label>
          </div>
          <small v-if="isInvalid(v$.trasladoPuertoVaras)" class="p-error">
            {{ invalidMessage(v$.trasladoPuertoVaras.required) }}
          </small>
        </div>
        <div
          class="col-12 md:col-6 mt-1"
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
        <div class="col-12 md:col-6 mt-1">
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
            @click="pagarPorML(!v$.$invalid)"
            :loading="isLoading"
          />
        </div>
        <div
          class="col-12 md:col-6 flex justify-content-center align-items-center"
        >
          <Button
            label="Descuento por Planilla"
            class="px-3"
            @click="openModalCuotas(!v$.$invalid)"
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
