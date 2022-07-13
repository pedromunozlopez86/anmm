<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import emailjs from 'emailjs-com'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import TitleContent from '../components/TitleContent.vue'

const router = useRouter()

const precioInscripciones = ref([
  {
    item: 'Inscripción Convención',
    valor: '$170.000',
  },
  {
    item: 'Inscripción Convención + Paseo',
    valor: '$250.000',
  },
  {
    item: 'Inscripción Convención + Paseo c/1 Acompañante',
    valor: '$330.000',
  },
  {
    item: 'Inscripción Convención + Gala/Paseo c/1 Acompañante',
    valor: '$350.000',
  },
])

function enviarAInscripcion() {
  router.push({ name: 'FormularioInscripcion' })
}
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent
    title="Inscripciones"
    title-icon="pi-user-edit"
    class="-mt-8 mb-4"
  >
    <p>
      A continuación podrás ingresar tus datos y abonar tu inscripción a la
      Convención según la modalidad que usted prefiera. En esta oportunidad
      podrá asistir junto a un acompañante, quienes podrán participar de las
      actividades recreativas de esta Convención. Como consideración importante,
      para quienes quieran participar deberán
      <strong>contar con su Pase de Movilidad al Día.</strong>
    </p>
    <p>
      El plazo de Inscripción se dará por terminado el día 15 de Octubre de
      2022.
    </p>
    <p>
      Se deja adjunto en este sitio en sección “Documentos”, el
      <strong
        >permiso de asistencia emitido por la Corte Suprema de Justicia de
        Chile</strong
      >, para que lo puedan descargar y ser presentado en donde corresponda para
      así garantizar su asistencia.
    </p>
    <p>
      La asistencia a la Convención incluye Inauguración, Jornadas de Trabajo y
      Fiesta de Gala de Cierre.<br />
      El acceso a paseo final e ingreso con acompañante a fiesta de gala,
      tendrán un recargo adicional.
    </p>
    <p>
      El ingreso a fiesta de gala tendrá previa inscripción ya que la capacidad
      del lugar se limita a 150 personas.
    </p>
    <h3 class="my-4">Valores Generales:</h3>
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
