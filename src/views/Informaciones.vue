<script setup>
import TitleContentVue from "../components/TitleContent.vue";
import TitleContent from "../components/TitleContent.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const bellavista = [
  { habitacion: "Single o Doble Standard", tarifa: "$  68.500 + IVA" },
  { habitacion: "Single o Doble Superior", tarifa: "$  90.000 + IVA" },
  { habitacion: "Suite", tarifa: "$  127.500 + IVA" },
];
const cabanaDelLago = [
  { habitacion: "Standard", domJue: "$59.000 + IVA", vieSab: "$75.000 + IVA" },
  { habitacion: "Superior", domJue: "$79.000 + IVA", vieSab: "$95.000 + IVA" },
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
            <p>
              Para el día sábado 3 de Diciembre se contempla una excursión
              durante todo el día por los hermosos destinos del entorno de
              Puerto Varas, incluyendo transporte ida y vuelta y un gran
              almuerzo de camaradería. Contenido paseo final en desarrollo.
            </p>
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
                  <Column field="domJue" header="Tarifa Domingo a Jueves">
                  </Column>
                  <Column field="vieSab" header="Tarifa Viernes y Sábado">
                  </Column>
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
