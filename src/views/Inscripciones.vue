<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import emailjs from "emailjs-com";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import TitleContent from "../components/TitleContent.vue";

const router = useRouter();

const precioInscripciones = ref([
  {
    item: "Inscripción Convención",
    valor: "$170.000",
  },
  {
    item: "Inscripción Convención + Paseo",
    valor: "$250.000",
  },
  {
    item: "Inscripción Convención + Acompañante",
    valor: "$300.000",
  },
  {
    item: "Inscripción Convención + Acompañante + Paseo",
    valor: "$460.000",
  },
]);

function enviarAInscripcion() {
  router.push({ name: "FormularioInscripcion" });
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Inscripciones"
    title-icon="pi-user-edit"
    class="-mt-8 mb-4"
  >
    <p class="text-justify">
      <span class="pl-3">A continuación </span>
      podrás ingresar tus datos y abonar tu inscripción a la Convención según la
      modalidad que usted prefiera. En esta oportunidad podrá asistir junto a un
      acompañante, quienes podrán participar de las actividades recreativas de
      esta Convención. Como consideración importante, para quienes quieran
      participar deberán
      <strong>contar con su Pase de Movilidad al Día.</strong>
    </p>
    <div class="py-3 text-justify">
      <strong class="my-5">
        <span class="pl-3">El plazo</span>
        de Inscripción se dará por terminado el día 15 de Octubre de 2022,
        pudiendo darse por terminado de manera anticipada en caso de completar
        la capacidad de los salones del Hotel destinado para la Convención.
      </strong>
    </div>
    <p class="text-justify">
      <span class="pl-3">Se deja</span>
      adjunto en este sitio en sección “Documentos”, el
      <strong
        >permiso de asistencia emitido por la excelentísima Corte Suprema de
        Justicia de Chile</strong
      >, para que lo puedan descargar y ser presentado en donde corresponda para
      así garantizar su asistencia.
    </p>
    <!-- <p>
      La asistencia a la Convención incluye Inauguración, Jornadas de Trabajo y
      Fiesta de Gala de Cierre.<br />
      El acceso a paseo final e ingreso con acompañante a fiesta de gala,
      tendrán un recargo adicional.
    </p> -->
    <!-- <p>
      El ingreso a fiesta de gala tendrá previa inscripción ya que la capacidad
      del lugar se limita a 150 personas.
    </p> -->
    <h3 class="mt-4 mb-3">Inscripción Asociado Incluye</h3>
    <div class="md:ml-5">
      <ul>
        <li>
          Traslados Ida y Vuelta Aeropuerto Puerto Montt - Puerto Varas -
          Aeropuerto Puerto Montt.
        </li>
        <li>Inauguración en Teatro del Lago (Ceremonia y Cóctel)</li>
        <li>
          Traslados Inauguración Puerto Varas - Teatro del Lago - Puerto Varas
        </li>
        <li>Fiesta de los 80's (sólo incluye un apertivo de bienvenida)</li>
        <li>
          Participación Convención 1 y 2 de Diciembre de 2022, almuerzos y
          coffees
        </li>
        <li>
          Fiesta y Cena de Gala Clausura<span
            class="vertical-align-super text-xs"
            >1</span
          >
        </li>
        <em>(Paseo Final Opcional, se paga como un Adicional)</em>
      </ul>
    </div>

    <h3 class="mt-3 mb-3">Inscripción Acompañante Incluye</h3>
    <div class="md:ml-5">
      <ul>
        <li>
          Traslados Ida y Vuelta Aeropuerto Puerto Montt - Puerto Varas -
          Aeropuerto Puerto Montt.
        </li>
        <li>Inauguración en Teatro del Lago (Ceremonia y Cóctel)</li>
        <li>
          Traslados Inauguración Puerto Varas - Teatro del Lago - Puerto Varas
        </li>
        <li>Fiesta de los 80's (sólo incluye un apertivo de bienvenida)</li>
        <li>
          Fiesta y Cena de Gala Clausura<span
            class="vertical-align-super text-xs"
            >1</span
          >
        </li>
        <em>(Paseo Final Opcional, se paga como un Adicional)</em>
      </ul>
      <p class="text-sm">
        <span class="vertical-align-super text-xs">1</span> El ingreso a la
        fiesta de gala será con capacidad limitada y se respetará el orden de
        inscripción de los asociados, ya que la capacidad del lugar se limita a
        150 personas.
      </p>
    </div>

    <h3 class="mt-5 mb-4">Valores Generales:</h3>
    <DataTable
      :value="precioInscripciones"
      stripedRows
      responsiveLayout="scroll"
      breakpoint="960px"
    >
      <Column field="item" header="Tipo Inscripción"></Column>
      <Column field="valor" header="Valor"></Column>
    </DataTable>
    <div class="mt-6 flex justify-content-center align-items-center">
      <Button
        label="Inscribete Aquí"
        icon="pi pi-user-edit"
        class="px-3"
        @click="enviarAInscripcion"
      />
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
