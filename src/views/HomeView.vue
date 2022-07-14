<script setup>
import { ref } from "@vue/reactivity";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import router from "../router";
import axios from "axios";

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
  axios({
    url: "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/PROGRAMA%20COVENCION%20NACIONAL%20DE%20MAG%20ISTRADOS%20PUERTO%20VARAS%20AN%CC%83O%202022.pdf?alt=media&token=a8f488ed-fb82-450f-85c2-4d4c907f4e89",
    method: "GET",
    responseType: "blob",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  }).then((response) => {
    let fileURL = window.URL.createObjectURL(new Blob([response.data]));
    let fileLink = document.createElement("a");
    fileLink.href = fileURL;
    fileLink.setAttribute("download", "Programa_ANMM_2022.pdf");
    document.body.appendChild(fileLink);
    fileLink.click();
  });
};

//   document.location.href =
//     "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/PROGRAMA%20COVENCION%20NACIONAL%20DE%20MAG%20ISTRADOS%20PUERTO%20VARAS%20AN%CC%83O%202022.pdf?alt=media&token=a8f488ed-fb82-450f-85c2-4d4c907f4e89";
// };
</script>

<template>
  <section id="hero-section"></section>
  <div class="grid px-5 py-5 w-9 mx-auto margen shadow-1">
    <div
      class="col-12 flex justify-content-start align-items-center font-bold text-6xl text-white -mb-3"
    >
      Bienvenidos
    </div>
    <div class="col-12 px-3 bg-white mt-0 grid">
      <div class="col-12 md:col-6 mt-6 text-justify" id="text-header-left">
        <p>
          La
          <strong>
            Asociación Nacional de Magistradas y Magistrados (ANMM)</strong
          >
          les invita a participar en la 50°. Convención Nacional a realizarse en
          Santiago, en modalidad presencial y a distancia, para reencontrarnos y
          reflexionar sobre el futuro de la Judicatura ante los tiempos de
          cambio que vienen.
        </p>
        <p>
          Queremos oírte y que seas parte del cambio. Tu opinión es importante,
          necesitamos tu aporte a la discusión de los temas relevantes para la
          marcha de la institución, especialmente en el momento histórico del
          que somos testigos.
        </p>
        <p>
          Frente a la situación sanitaria que vive Chile y el mundo, decidimos
          organizar una convención híbrida para cumplir con los aforos y
          permitir la instalación de efectivos espacios de participación y
          discusión; limitaciones que nos han impedido recibir acompañantes.
        </p>

        <p>
          Finalmente, se dará efectivo cumplimiento de las medidas sanitarias
          dispuestas por la autoridad, por lo que se exigirá el porte de
          vuestros pases de movilidad. ¡Les esperamos!
        </p>
      </div>
      <div class="col-12 md:col-5 mt-7 ml-5">
        <video
          width="100%"
          controls
          src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Video%20Invitacio%CC%81n.mp4?alt=media&token=647be919-fb5e-4f4b-89d6-7fb805251c1f"
          type="video/mp4"
          poster="@/assets/img/fondo-video.png"
        ></video>
        <div class="ml-2 mt-3" id="borde-azul">
          <p class="pl-2">
            Invitación para la Convención Nacional Magistradas y Magistrados
            número 50
          </p>
        </div>
      </div>
    </div>
  </div>

  <main id="programa" class="grid px-5 py-5">
    <div class="col-12 text-center">
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-calendar text-white mr-3"></i>
        <h2 class="text-white">Programa</h2>
      </div>
    </div>

    <div class="col-12 md:col-8 md:col-offset-2 col-offset-0">
      <TabView ref="tabview1" id="pestana-1">
        <TabPanel header="Miércoles 30">
          <div class="grid">
            <div class="col-6 col-md-12">
              <div class="px-5">
                <p>Inaguración del evento</p>
              </div>
              <div class="text-center">
                <img
                  src="./../assets/img/Rectangle-45.png"
                  alt="Miércoles-30"
                />
              </div>
              <div class="text-center mt-3">
                <Button class="p-button-outlined text-white" @click="download"
                  >Descargar programa completo <i class="pi pi-file ml-2"></i>
                </Button>
              </div>
            </div>
            <div class="col-6 col-md-12">
              <DataTable
                responsiveLayout="scroll"
                showGridlines="false"
                :value="miercoles"
                :row-class="rowClass"
              >
                <Column field="hora">
                  <template #body="slotProps">
                    <div class="fila">
                      <i class="pi pi-clock mr-2"></i>{{ slotProps.data.hora }}
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
            <div class="col-6 col-md-12">
              <p>
                El primer día de trabajo contempla la acreditación, una primaria
                de apertura y trabajo de comisiones, previa distribución, así
                como un almuerzo ejecutivo.
              </p>
              <div class="text-center">
                <img
                  src="./../assets/img/Rectangle-45.png"
                  alt="Miércoles-30"
                />
              </div>
            </div>

            <div class="col-6 col-md-12">
              <DataTable
                responsiveLayout="scroll"
                :value="jueves"
                showGridlines="false"
                :row-class="rowClass"
              >
                <Column field="hora">
                  <template #body="slotProps">
                    <div class="fila">
                      <i class="pi pi-clock mr-2"></i>{{ slotProps.data.hora }}
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
            <div class="col-6 col-md-12">
              <p>Segundo día de trabajo</p>
              <div class="text-center">
                <img
                  src="./../assets/img/Rectangle-45.png"
                  alt="Miércoles-30"
                />
              </div>
            </div>
            <div class="col-6 col-md-12">
              <DataTable
                responsiveLayout="scroll"
                :value="viernes"
                showGridlines="false"
                :row-class="rowClass"
              >
                <Column field="hora">
                  <template #body="slotProps">
                    <div class="fila">
                      <i class="pi pi-clock mr-2"></i>{{ slotProps.data.hora }}
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
            <div class="col-6">
              <p>Paseo Final</p>
            </div>
            <div class="col-6">
              <DataTable
                responsiveLayout="scroll"
                :value="sabado"
                showGridlines="false"
                :row-class="rowClass"
              >
                <Column field="hora">
                  <template #body="slotProps">
                    <div class="fila">
                      <i class="pi pi-clock mr-2"></i>{{ slotProps.data.hora }}
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
</template>
<style lang="scss" scoped>
.margen {
  margin-top: -10rem;
}

#programa {
  background-color: #00679a;
}

#hero-section {
  background-image: url("@/assets/img/hero-inicio.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: -5rem;
  height: 50rem;
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
