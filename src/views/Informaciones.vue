<script setup>
import TitleContentVue from "../components/TitleContent.vue";
import TitleContent from "../components/TitleContent.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Galleria from "primevue/galleria";

const bellavista = [
  { habitacion: "Single o Doble Standard", tarifa: "$  68.500 + IVA" },
  { habitacion: "Single o Doble Superior", tarifa: "$  90.000 + IVA" },
  { habitacion: "Suite", tarifa: "$  127.500 + IVA" },
];
const cabanaDelLago = [
  { habitacion: "Standard", singleDoble: "$75.000 + IVA" },
  { habitacion: "Superior", singleDoble: "$95.000 + IVA" },
];

const radisson = [
  { habitacion: "Standard", single: "$110.000 + IVA", doble: "$115.000 + IVA" },
  { habitacion: "Superior", single: "$125.000 + IVA", doble: "$145.000 + IVA" },
  {
    habitacion: "Junior Suite",
    single: "$145.000 + IVA",
    doble: "$155.000 + IVA",
  },
  {
    habitacion: "Master Suite",
    single: "$160.000 + IVA",
    doble: "$165.000 + IVA",
  },
];

const parkInn = [
  {
    habitacion: "Standard",
    single: "$77.500 + IVA",
    doble: "$84.500 + IVA",
    triple: "$89.900 + IVA",
  },
  {
    habitacion: "Superior",
    single: "$84.500 + IVA",
    doble: "$89.500 + IVA",
    triple: "$96.300 + IVA",
  },
];

const cumbres = [
  { habitacion: "Single", valor: "$120.000 + IVA" },
  { habitacion: "Doble", valor: "$130.000 + IVA" },
];

const images = [
  {
    itemImageSrc:
      "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/paseo1.jpg?alt=media&token=9ee62d87-fd1b-4afb-a3e6-66f3a430db51",
    alt: "Paseo 1",
  },
  {
    itemImageSrc:
      "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/paseo2.jpg?alt=media&token=66ecf929-9d37-41a9-9245-0d4febba8a72",
    alt: "Paseo 2",
  },
  {
    itemImageSrc:
      "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/paseo3.jpg?alt=media&token=695d8095-fb82-43b0-90a1-9459dd93ef80",
    alt: "Paseo 3",
  },
  {
    itemImageSrc:
      "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/paseo4.jpg?alt=media&token=17259544-2e45-4f02-989e-1f8a2f8d1509",
    alt: "Paseo 4",
  },
  {
    itemImageSrc:
      "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/paseo5.jpg?alt=media&token=e629d415-93ac-4207-adcf-34d1f87eec52",
    alt: "Paseo 5",
  },
];

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];
</script>
<template>
  <div>
    <section id="hero-section"></section>
    <TitleContent
      title="Informaciones"
      title-icon="pi-info-circle"
      class="-mt-8 mb-4"
    >
      <div>
        <p class="text-justify">
          <span class="pl-5">A continuación</span>
          les presentamos información relevante para todos los asistentes a
          nuestra Convención. En esta sección podrán informarse de la ubicación
          del evento, convenios con diversos hoteles con tarifas exclusivas para
          nuestros asociados, puntos de recogida para traslados al evento,
          información general del paseo final, entre otros.
        </p>
      </div>
    </TitleContent>
    <main>
      <TitleContent class="mb-4 px-0">
        <Accordion :multiple="true" :activeIndex="[0]" class="px-0 mx-0">
          <AccordionTab
            header="Ubicación"
            class="p-accordion-header-primary px-0"
          >
            <div class="grid border-2 mb-3 surface-border">
              <div class="col-12 md:col-6 mt-1 pl-1 md:pl-3">
                <h4 class="mb-2">Inauguración – Teatro del Lago, Frutillar</h4>
                <p class="md:text-justify text-left">
                  <span class="pl-3">La inauguración</span>
                  de la 50ᵃ Convención Nacional de Magistradas y Magistrados se
                  llevará a cabo en el Anfiteatro del Teatro del Lago,
                  Frutillar, a las 19:00 horas del día miércoles 30 de
                  Noviembre.
                </p>
              </div>
              <div class="col-12 md:col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.774836172697!2d-73.0276091837228!3d-41.139441079287664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96178d911f4ddd51%3A0x1eec1f8dc4878eec!2sAv.%20Philippi%201000%2C%20Frutillar%2C%20Los%20Lagos!5e0!3m2!1ses-419!2scl!4v1657667588018!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="px-0 md:px-4"
                ></iframe>
              </div>
            </div>

            <div class="grid border-2 mb-3 surface-border">
              <div class="col-12 md:col-6 pl-1 md:pl-3">
                <h4 class="mb-2">
                  Jornadas de Trabajo Convención – Hotel Bellavista, Puerto
                  Varas
                </h4>
                <p class="md:text-justify text-left">
                  <span class="pl-3">El desarrollo</span>
                  de las jornadas de trabajo de nuestra Convención se llevarán a
                  cabo en los salones de eventos del Hotel Bellavista, ubicado a
                  orillas del Lago Llanquihue.
                </p>
              </div>
              <div class="col-12 md:col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.537245246115!2d-72.98277488371956!3d-41.31892957927055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961826d9e51662c9%3A0xdb2c8ca0b72f3a14!2sHotel%20Bellavista!5e0!3m2!1ses-419!2scl!4v1657668346240!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="md:px-4 px-0"
                ></iframe>
              </div>
            </div>
            <div class="grid border-2 mb-3 surface-border">
              <div class="col-12 md:col-6 pl-0 pl-1 md:pl-3">
                <h4 class="mb-2">
                  Fiesta de Gala – Hotel Cabaña del Lago, Puerto Varas
                </h4>
                <p class="md:text-justify text-left">
                  <span class="pl-3">La</span> “Fiesta de las Máscaras” de la
                  Convención tendrá lugar en el salón Club House del Hotel
                  Cabaña del Lago el día Viernes 02 de Diciembre a partir de las
                  20:00 hrs.
                </p>
              </div>
              <div class="col-12 md:col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.793046060879!2d-72.98323818371969!3d-41.31336557927104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618272843b74dad%3A0xeec2fc6e149b1e3e!2sHotel%20Caba%C3%B1a%20del%20Lago!5e0!3m2!1ses-419!2scl!4v1657668119349!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="md:px-4 px-0"
                ></iframe>
              </div>
            </div>
          </AccordionTab>
          <AccordionTab header="Transporte">
            <p>
              En esta sección se informará de puntos de encuentro para distintos
              traslados asociados a actividad de Inauguración y Paseo Final. En
              desarrollo.
            </p>
          </AccordionTab>
          <AccordionTab header="Paseo Final">
            <h4 class="mb-2">Paseo a Peulla convención Puerto Varas 2022</h4>
            <br />
            <p class="md:pl-3 pl-1">Programa:</p>
            <div class="grid border-2 mt-5 surface-border md:mx-8 mx-1 py-3">
              <div class="col-2 md:pl-5 pl-1">07:30</div>
              <div class="col-10">
                Hora de presentación en Oficina Turistour Puerto Varas
              </div>
              <div class="col-2 md:pl-5 pl-1">08:00</div>
              <div class="col-10">Salida desde Puerto Varas</div>
              <div class="col-2 md:pl-5 pl-1">09:00</div>
              <div class="col-10">Entrada a Los Saltos de Petrohué</div>
              <div class="col-2 md:pl-5 pl-1">10:30</div>
              <div class="col-10">Zarpe de Petrohue a Peulla</div>
              <div class="col-2 md:pl-5 pl-1">12:15</div>
              <div class="col-10">Llegada a Peulla</div>
              <div class="col-2 md:pl-5 pl-1">12:30</div>
              <div class="col-10">Llegada a Hotel para Almuerzo</div>
              <div class="col-2 md:pl-5 pl-1">14:00</div>
              <div class="col-10">
                Salida 2do turno Excursión Encanto o Mellizas
              </div>
              <div class="col-2 md:pl-5 pl-1">16:30</div>
              <div class="col-10">Zarpe Peulla-Petrohue</div>
              <div class="col-2 md:pl-5 pl-1">18:15</div>
              <div class="col-10">Llegada a Petrohué</div>
              <div class="col-2 md:pl-5 pl-1">19:15</div>
              <div class="col-10">Llegada a Puerto Varas</div>
            </div>
            <br />
            <p class="md:pl-3 pl-1">Video:</p>
            <div class="flex justify-content-center my-4 pa-8">
              <video
                class="w-full"
                controls
                src="https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/Apertura%20Villa%20Peulla%20-%20op2-a.mp4?alt=media&token=080bdf3b-565b-49f9-8a55-d2286f8ef691"
              ></video>
            </div>
            <br />
            <p class="md:pl-3 pl-1">Galería de fotos:</p>
            <div class="flex justify-content-center my-4">
              <Galleria
                :value="images"
                :responsiveOptions="responsiveOptions"
                containerStyle="max-width: 640px;text-align: center"
              >
                <template #item="slotProps">
                  <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    style="width: 100%"
                  />
                </template>
                <template #thumbnail="slotProps">
                  <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    style="width: 30%"
                  />
                </template>
              </Galleria>
            </div>
          </AccordionTab>
          <AccordionTab header="Hoteleria" class="mx-0">
            <div>
              <p>
                <span class="pl-3">En esta</span> sección podrán encontrar
                diversos convenios que se han realizado con el rubro hotelero de
                la ciudad de Puerto Varas, dando para ustedes distintas opciones
                en precio, ubicación y calidad.
              </p>
            </div>
            <div class="mt-5">
              <h3>Hotel Bellavista</h3>
              <div class="ml-0 md:ml-3 mt-2">
                <p class="py-1">
                  <strong> <i class="pi pi-map-marker"></i> Dirección: </strong>
                  <a
                    href="https://goo.gl/maps/YEpu4F8KiN2nEr6W7"
                    class="text-color hover:text-primary"
                    target="_blank"
                    >Vicente Pérez Rosales 060, Puerto Varas</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-phone"></i> Teléfono: </strong>
                  <a
                    href="tel:+56652232021"
                    class="text-color hover:text-primary"
                    >65 223 2011</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-envelope"></i> E-Mail: </strong>
                  <a
                    href="mailto:reservas@hotelbellavista.cl"
                    class="text-color hover:text-primary"
                  >
                    <div class="text-overflow-ellipsis">
                      reservas@hotelbellavista.cl
                    </div>
                  </a>
                </p>
              </div>

              <div class="px-0 md:px-5 mt-5">
                <DataTable
                  :value="bellavista"
                  columnResizeMode="fit"
                  responsiveLayout="scroll"
                >
                  <Column
                    field="habitacion"
                    header="Tipo de Habitación"
                    class="px-0 mx-0"
                  >
                  </Column>
                  <Column field="tarifa" header="Tarifa" class="px-0"> </Column>
                </DataTable>
              </div>
            </div>
            <hr class="mt-4" />

            <div class="mt-5">
              <h3>Hotel Cabaña del Lago</h3>
              <div class="ml-0 md:ml-3 mt-2">
                <p class="py-1 pl-0">
                  <strong> <i class="pi pi-map-marker"></i> Dirección: </strong>
                  <a
                    href="https://g.page/hotel_cdl?share"
                    class="text-color hover:text-primary"
                    target="_blank"
                    >Klenner 195, Puerto Varas</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-user"></i> Contacto: </strong>
                  Niscerelle Barrientos
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-phone"></i> Teléfono: </strong>
                  <a
                    href="tel:+56652200100"
                    class="text-color hover:text-primary"
                    >65 220 0100</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-envelope"></i> E-Mail: </strong>
                  <a
                    href="mailto:reservasgrupos@hcdl.cl"
                    class="text-color hover:text-primary"
                    >reservasgrupos@hcdl.cl
                  </a>
                </p>
              </div>

              <div class="px-0 md:px-5 mt-5">
                <DataTable
                  :value="cabanaDelLago"
                  columnResizeMode="fit"
                  responsiveLayout="scroll"
                >
                  <Column
                    field="habitacion"
                    header="Tipo de Habitación"
                    class="px-0 mx-0"
                  >
                  </Column>
                  <Column field="singleDoble" header="Single o Doble"> </Column>
                </DataTable>
              </div>
            </div>
            <hr class="mt-4" />

            <div class="mt-5">
              <h3>Hotel Radisson</h3>
              <div class="ml-0 md:ml-3 mt-2">
                <p class="py-1 pl-0">
                  <strong> <i class="pi pi-map-marker"></i> Dirección: </strong>
                  <a
                    href="https://goo.gl/maps/a7yy85CY29tu3npW7"
                    class="text-color hover:text-primary"
                    target="_blank"
                    >Del Salvador 024, Puerto Varas</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-user"></i> Contacto: </strong>
                  Pamela Binder
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-phone"></i> Teléfono: </strong>
                  <a
                    href="tel:+56652239620"
                    class="text-color hover:text-primary"
                    >65 223 9620</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-envelope"></i> E-Mail: </strong>
                  <a
                    href="mailto:reservas1@bookingradisson.cl"
                    class="text-color hover:text-primary"
                    >reservas1@bookingradisson.cl
                  </a>
                </p>
                <p class="py-1">
                  <strong>
                    <i class="pi pi-info-circle"></i> Código de Convenio:
                  </strong>
                  <span class="text-primary"> ConvenciónMagistrados2022 </span
                  >(Deben proporcionar este código junto a su reserva)
                </p>
              </div>
              <div class="px-0 md:px-5 mt-5">
                <DataTable
                  :value="radisson"
                  columnResizeMode="fit"
                  responsiveLayout="scroll"
                >
                  <Column
                    field="habitacion"
                    header="Tipo de Habitación"
                    class="px-0 mx-0"
                  >
                  </Column>
                  <Column field="single" header="Single" class="px-2"> </Column>
                  <Column field="doble" header="Doble"> </Column>
                </DataTable>
              </div>
            </div>
            <hr class="mt-4" />
            <div class="mt-5">
              <h3>Hotel Park Inn</h3>
              <div class="ml-0 md:ml-3 mt-2">
                <p class="py-1 pl-0">
                  <strong> <i class="pi pi-map-marker"></i> Dirección: </strong>
                  <a
                    href="https://goo.gl/maps/vHJc2JupmHMRddiN6"
                    class="text-color hover:text-primary"
                    target="_blank"
                    >La Paz 471, Puerto Varas</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-user"></i> Contacto: </strong>
                  Pamela Binder
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-phone"></i> Teléfono: </strong>
                  <a
                    href="tel:+56652239620"
                    class="text-color hover:text-primary"
                    >65 223 9620</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-envelope"></i> E-Mail: </strong>
                  <a
                    href="mailto:reservas1@bookingradisson.cl"
                    class="text-color hover:text-primary"
                    >reservas1@bookingradisson.cl
                  </a>
                </p>
                <p class="py-1">
                  <strong>
                    <i class="pi pi-info-circle"></i> Código de Convenio:
                  </strong>
                  <span class="text-primary"> ConvenciónMagistrados2022 </span
                  >(Deben proporcionar este código junto a su reserva)
                </p>
              </div>
              <div class="px-0 md:px-5 mt-5">
                <DataTable
                  :value="parkInn"
                  columnResizeMode="fit"
                  responsiveLayout="scroll"
                >
                  <Column
                    field="habitacion"
                    header="Tipo de Habitación"
                    class="px-0 mx-0"
                  >
                  </Column>
                  <Column field="single" header="Single"> </Column>
                  <Column field="doble" header="Doble"> </Column>
                  <Column field="triple" header="Triple"> </Column>
                </DataTable>
              </div>
            </div>
            <hr class="mt-4" />
            <div class="mt-5">
              <h3>Hotel Cumbres</h3>
              <div class="ml-0 md:ml-3 mt-2">
                <p class="py-1 pl-0">
                  <strong> <i class="pi pi-map-marker"></i> Dirección: </strong>
                  <a
                    href="https://goo.gl/maps/yytabU4zd6K67ZSq9"
                    class="text-color hover:text-primary"
                    target="_blank"
                    >Av. Imperial 0561, Puerto Varas</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-user"></i> Contacto: </strong>
                  N/A
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-phone"></i> Teléfono: </strong>
                  <a
                    href="tel:+56652222000"
                    class="text-color hover:text-primary"
                    >65 222 2000</a
                  >
                </p>
                <p class="py-1">
                  <strong> <i class="pi pi-envelope"></i> E-Mail: </strong>
                  <a
                    href="mailto:reservas@hotelcumbres.cl"
                    class="text-color hover:text-primary"
                    >reservas@hotelcumbres.cl
                  </a>
                </p>
              </div>
              <div class="px-0 md:px-5 mt-5">
                <DataTable
                  :value="cumbres"
                  columnResizeMode="fit"
                  responsiveLayout="scroll"
                >
                  <Column
                    field="habitacion"
                    header="Tipo de Habitación"
                    class="px-0 mx-0"
                  >
                  </Column>
                  <Column field="valor" header="Valor"> </Column>
                </DataTable>
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </TitleContent>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#hero-section {
  background-image: url("@/assets/img/hero-informaciones.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: -5rem;
  height: 26.5625rem;
}
</style>
<style scooped>
.p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
  background-color: var(--azul);
  color: white;
}

.p-accordion
  .p-accordion-header:not(.p-disabled).p-highlight
  .p-accordion-header-link {
  background-color: var(--azul-marino);
  color: white;
}

.p-accordion
  .p-accordion-header:not(.p-disabled).p-highlight
  .p-accordion-header-link:hover {
  background-color: var(--azul-marino);
  color: white;
}

.p-accordion
  .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
  .p-accordion-header-link {
  background-color: var(--azul-marino);
  color: white;
}
</style>
