<script setup>
import { ref } from "@vue/reactivity";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

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
  const url =
    "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/PROGRAMA%20COVENCION%20NACIONAL%20DE%20MAGISTRADOS%20PUERTO%20VARAS%20AO%202022.doc?alt=media&token=19057e1f-e6f5-44d2-be36-fd4a22859821";
  window.open(url);
};
</script>

<template>
  <main id="programa" class="grid">
    <div class="col-12 text-center">
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-calendar text-white mr-3"></i>
        <h2 class="text-white">Programa</h2>
      </div>
    </div>
    <div class="col-12">
      <TabView ref="tabview1" class="tabview1">
        <TabPanel>
          <template #header>
            <div class="">Miércoles 30</div>
          </template>
          <div class="grid">
            <div class="col-6">
              <div class="px-5">
                <p>
                  El primer día de trabajo contempla la acreditación, una
                  primaria de apertura y trabajo de comisiones, previa
                  distribución, así como un almuerzo ejecutivo.
                </p>
              </div>
              <div class="text-center">
                <img
                  src="./../assets/img/Rectangle 45.png"
                  alt="Miércoles-30"
                />
              </div>
              <div class="text-center mt-3">
                <Button class="p-button-outlined text-white" @click="download"
                  >Descargar programa completo <i class="pi pi-file ml-2"></i>
                </Button>
              </div>
            </div>
            <div class="col-6">
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
            <div class="col-6">
              <p>
                El primer día de trabajo contempla la acreditación, una primaria
                de apertura y trabajo de comisiones, previa distribución, así
                como un almuerzo ejecutivo.
              </p>
            </div>
            <div class="col-6">
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
            <div class="col-6">
              <p>hola1</p>
            </div>
            <div class="col-6">
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
              <p>hola1</p>
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
#programa {
  background-color: #00679a;
  height: auto;
  padding: 7rem 7rem;
}
.azul {
  background-color: var(--azul) !important;
}
::v-deep(.fondo-azul) {
  background-color: #00477f !important;
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
  background-color: var(--azul-marino) !important;
  color: white;
}
</style>
