<script setup>
import { ref } from "@vue/reactivity";
import TitleContentVue from "../components/TitleContent.vue";
import TitleContent from "../components/TitleContent.vue";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import router from "../router";
import Image from "primevue/image";

const miercoles = [
  {
    hora: "19:00 - 21:00 hrs.",
    detalle: "Inauguración - Teatro del Lago Frutillar ",
  },
];

const jueves = [
  {
    hora: "08:30 - 09:30 hrs.",
    detalle: "Inicio Convención sala plenaria",
  },
  {
    hora: "09:30 - 11:30 hrs.",
    detalle: "Derivación de Asociados a Mesas de Trabajo.",
  },
  {
    hora: "11:30 - 11:45 hrs.",
    detalle: "Coffee Break",
  },
  {
    hora: "11:45 - 13:30 hrs.",
    detalle: "Mesa de Trabajo.",
  },
  {
    hora: "13:30 - 15:00 hrs.",
    detalle: "Almuerzo",
  },
  {
    hora: "15:00 - 17:00 hrs.",
    detalle: "Mesa de Trabajo",
  },
  {
    hora: "17:00 - 18:30 hrs.",
    detalle: "Coffee Break",
  },
  {
    hora: "18:30 hrs.",
    detalle: "Término Jornada de Trabajo",
  },
  {
    hora: "21:00 hrs.",
    detalle: "Fiesta de los 80´s.",
  },
];

const viernes = [
  {
    hora: "08:30 - 11:00 hrs.",
    detalle: "Conclusión Trabajo de Cada Mesa",
  },
  {
    hora: "11:00 - 11:30 hrs.",
    detalle: "Coffee Break",
  },
  {
    hora: "11:30 - 14:00 hrs.",
    detalle: "Plenaria de Votación y Clausura de Trabajo Gremial",
  },
  {
    hora: "14:00 - 15:00 hrs.",
    detalle: "Almuerzo y termino Jornada de Trabajo.",
  },
  {
    hora: "20:00 hrs.",
    detalle:
      "Cena de Clausura – Hotel Cabaña del Lago Fiesta de Gala 'Fiesta de las Máscaras'",
  },
  {
    hora: "03:00 hrs.",
    detalle: "Término Fiesta.",
  },
];

const sabado = [
  {
    hora: "09:00 - 17:00 hrs.",
    detalle:
      "Paseo Final para Asociados Previamente Inscritos. Contempla salida por los hermosos parajes del entorno natural de Puerto Varas. Incluye almuerzo.",
  },
];

const rowClass = () => {
  return "fondo-azul";
};
const dataClass = () => {
  return "fila";
};

const download = () => {
  window.open(
    "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Programa.pdf?alt=media&token=2f84b3c7-870c-4a22-9873-711197096bd5"
  );
};
</script>
<template>
  <div>
    <section id="hero-section"></section>

    <TitleContent title="Programa" title-icon="pi-calendar" class="-mt-8 mb-4">
      <div>
        <p class="text-justify">
          A continuación podrán encontrar el detalle de todas las actividades
          programadas para nuestra Convención, con los horarios definidos para
          cada jornada de principio a fin.
        </p>
      </div>
    </TitleContent>

    <main id="programa" class="md:px-8 px-0 pt-5 md:py-5">
      <div class="col-12 text-center">
        <div class="flex align-items-center justify-content-center">
          <i class="pi pi-calendar text-white mr-3"></i>
          <h2 class="text-white">Programa</h2>
        </div>
        <div class="text-center my-5">
          <p class="text-white md:px-8 px-4 md:mx-8 text-justify">
            A continuación podrán encontrar el detalle de todas las actividades
            programadas para nuestra Convención, con los horarios definidos para
            cada jornada de principio a fin.
          </p>
        </div>
      </div>
      <div class="col-12 md:col-10 md:col-offset-1 col-offset-0">
        <TabView ref="tabview1" id="pestana-1">
          <TabPanel header="Miércoles 30">
            <div class="grid">
              <div class="col-12 md:col-6">
                <div class="px-5 fila text-justify md:mb-3 mb-0">
                  <p class="pb-3">
                    Damos comienzo a nuestra 50ᵃ Convención Nacional con la
                    Inauguración Oficial, que tendrá lugar en el Teatro del Lago
                    de Frutillar
                  </p>
                </div>
                <div class="text-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Mie30.png?alt=media&token=6a76672b-e326-4252-a9b5-dd7a2b0d9fd6"
                    alt="Mie-30"
                    preview
                    width="330"
                  />
                </div>
                <div class="text-center mt-3">
                  <Button
                    class="p-button-sm p-button-outlined text-white"
                    @click="download"
                    >Descargar programa completo
                    <i class="pi pi-file ml-2"></i>
                  </Button>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <DataTable
                  responsiveLayout="scroll"
                  :value="miercoles"
                  :row-class="rowClass"
                >
                  <Column field="hora">
                    <template #body="slotProps">
                      <div class="fila">
                        <i class="pi pi-clock mr-2"></i
                        >{{ slotProps.data.hora }}
                      </div>
                    </template>
                  </Column>
                  <Column field="detalle">
                    <template #body="slotProps">
                      <div class="fila">
                        {{ slotProps.data.detalle }}
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Jueves 01">
            <div class="grid">
              <div class="col-12 md:col-6 pt-5-">
                <p class="px-5 fila text-justify mb-3">
                  El primer día de convención contempla la acreditación,
                  primaria de apertura y posterior trabajo de comisiones.
                  Finalizamos la jornada con una entretenida fiesta de los 80´s!
                </p>
                <br />
                <div class="text-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Jueves01.png?alt=media&token=d4ef8682-4487-44bb-b0d0-72b62c3b395b"
                    alt="Mie-30"
                    preview
                    width="330"
                  />
                </div>
                <div class="text-center mt-3">
                  <Button
                    class="p-button-sm p-button-outlined text-white"
                    @click="download"
                    >Descargar programa completo
                    <i class="pi pi-file ml-2"></i>
                  </Button>
                </div>
              </div>

              <div class="col-12 md:col-6">
                <DataTable
                  responsiveLayout="scroll"
                  :value="jueves"
                  :row-class="rowClass"
                >
                  <Column field="hora">
                    <template #body="slotProps">
                      <div class="fila">
                        <i class="pi pi-clock mr-2"></i
                        >{{ slotProps.data.hora }}
                      </div>
                    </template>
                  </Column>
                  <Column field="detalle">
                    <template #body="slotProps">
                      <div class="fila">
                        {{ slotProps.data.detalle }}
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Viernes 02">
            <div class="grid">
              <div class="col-12 md:col-6">
                <p class="px-4 fila text-justify mb-3">
                  En el segundo y último día de trabajo se llevará a cabo una
                  plenaria de clausura dividida en módulos con diversos temas a
                  definir y votar, además de recibir los informes de comisiones
                  y demás órganos gremiales. Finalizamos la tarde con un
                  almuerzo de camaradería. Posteriormente, en la noche, cerramos
                  nuestra Convención con una Fiesta de Gala “Fiesta de las
                  Máscaras”.
                </p>
                <div class="text-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Viernes02.png?alt=media&token=412cb5b5-9ecf-4683-9d3c-36df8a52aafb"
                    alt="Viernes02"
                    preview
                    width="330"
                  />
                </div>
                <div class="text-center mt-3">
                  <Button
                    class="p-button-sm p-button-outlined text-white"
                    @click="download"
                    >Descargar programa completo
                    <i class="pi pi-file ml-2"></i>
                  </Button>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <DataTable
                  responsiveLayout="scroll"
                  :value="viernes"
                  :row-class="rowClass"
                >
                  <Column field="hora">
                    <template #body="slotProps">
                      <div class="fila">
                        <i class="pi pi-clock mr-2"></i
                        >{{ slotProps.data.hora }}
                      </div>
                    </template>
                  </Column>
                  <Column field="detalle">
                    <template #body="slotProps">
                      <div class="fila">
                        {{ slotProps.data.detalle }}
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Sábado 03">
            <div class="grid">
              <div class="col-12 md:col-6">
                <p class="px-5 fila text-justify">
                  El último día de la Convención será para realizar una
                  actividad de esparcimiento y camaradería, recorriendo hermosos
                  destinos de la zona.
                </p>
                <div class="text-center mt-5">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Sabado03.png?alt=media&token=4845a488-0132-4f19-91b1-575912a2a6a8"
                    alt="Viernes02"
                    preview
                    width="330"
                  />
                </div>
                <div class="text-center mt-3">
                  <Button
                    class="p-button-sm p-button-outlined text-white"
                    @click="download"
                    >Descargar programa completo
                    <i class="pi pi-file ml-2"></i>
                  </Button>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <DataTable
                  responsiveLayout="scroll"
                  :value="sabado"
                  :row-class="rowClass"
                >
                  <Column field="hora">
                    <template #body="slotProps">
                      <div class="fila">
                        <i class="pi pi-clock mr-2"></i
                        >{{ slotProps.data.hora }}
                      </div>
                    </template>
                  </Column>
                  <Column field="detalle">
                    <template #body="slotProps">
                      <div class="fila">
                        {{ slotProps.data.detalle }}
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.margen {
  margin-top: -10rem;
}

#programa {
  background-color: #00679a;
}
.azul {
  background-color: var(--celeste-oscuro) !important;
}

::v-deep(.fondo-azul) {
  background-color: var(--celeste-oscuro) !important;
  color: white;

  &:first-child {
    border-radius: 6px 0 0 0;
  }

  &:last-child {
    border-radius: 0 6px 0 0;
  }
}
.fila {
  color: white;
  font-weight: 200;
  font-size: small;
}

#borde-azul {
  border-left: 8px solid var(--azul-marino);
  border-radius: 5px 5px;
}
#hero-section {
  background-image: url("@/assets/img/image-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  margin-top: -5rem;
  height: 26.5625rem;
}
</style>
<style scooped>
#programa
  > div:nth-child(2)
  > div
  > div.p-tabview-panels
  > div:nth-child(1)
  > div
  > div:nth-child(2)
  > div
  > div.p-datatable-wrapper
  > table
  > thead {
  display: none;
}

#programa
  > div:nth-child(2)
  > div
  > div.p-tabview-panels
  > div:nth-child(2)
  > div
  > div:nth-child(2)
  > div
  > div.p-datatable-wrapper
  > table
  > thead {
  display: none;
}

#programa
  > div:nth-child(2)
  > div
  > div.p-tabview-panels
  > div:nth-child(3)
  > div
  > div:nth-child(2)
  > div
  > div.p-datatable-wrapper
  > table
  > thead {
  display: none;
}

#programa
  > div:nth-child(2)
  > div
  > div.p-tabview-panels
  > div:nth-child(4)
  > div
  > div:nth-child(2)
  > div
  > div.p-datatable-wrapper
  > table
  > thead {
  display: none;
}

#programa > div:nth-child(2) > div > div.p-tabview-panels {
  background-color: var(--celeste-oscuro) !important;
  color: white;
}

.p-tabview .p-tabview-nav {
  background-color: var(--celeste-oscuro) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-width: 0 0 2px 0 !important;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  background-color: var(--celeste-oscuro) !important;
  color: rgba(255, 255, 255, 0.3) !important;
  font-weight: 300 !important;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  background-color: var(--celeste-oscuro) !important;
  color: white !important;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  border-color: white !important;
  color: rgba(255, 255, 255, 0.3) !important;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
  box-shadow: none !important;
}

#pestana-1 > div.p-tabview-nav-container > div > ul > li.p-highlight > a {
  border-color: white !important;
}

#pestana-1 > div.p-tabview-nav-container > div > ul > li > a {
  border-color: rgba(255, 255, 255, 0.3) !important;
}
</style>
