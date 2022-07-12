<script setup>
import TitleContentVue from "../components/TitleContent.vue";
import TitleContent from "../components/TitleContent.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
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
        <p>
          A continuación les presentamos información relevante para todos los
          asistentes a nuestra Convención. En esta sección podrán informarse de
          la ubicación del evento, convenios con diversos hoteles con tarifas
          exclusivas para nuestros asociados, puntos de recogida para traslados
          al evento, información general del paseo final, entre otros.
        </p>
      </div>
    </TitleContent>
    <main>
      <TitleContent class="mb-4">
        <Accordion :multiple="true" :activeIndex="[0]">
          <AccordionTab header="Ubicación" class="bg-color-red">
            <div class="grid">
              <div class="col-6 mt-5">
                <h3>Inauguración – Teatro del Lago, Frutillar</h3>
                <p>
                  La inauguración de la 50ᵃ Convención Nacional de Magistradas y
                  Magistrados se llevará a cabo en el Anfiteatro del Teatro del
                  Lago, Frutillar, a las 19:00 horas del día miércoles 30 de
                  Noviembre.
                </p>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.774836172697!2d-73.0276091837228!3d-41.139441079287664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96178d911f4ddd51%3A0x1eec1f8dc4878eec!2sAv.%20Philippi%201000%2C%20Frutillar%2C%20Los%20Lagos!5e0!3m2!1ses-419!2scl!4v1657667588018!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="px-4"
                ></iframe>
              </div>
            </div>
            <div class="grid">
              <div class="col-6">
                <h3>
                  Jornadas de Trabajo Convención – Hotel Bellavista, Puerto
                  Varas
                </h3>
                <p>
                  El desarrollo de las jornadas de trabajo de nuestra Convención
                  se llevarán a cabo en los salones de eventos del Hotel
                  Bellavista, ubicado a orillas del Lago Llanquihue.
                </p>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.537245246115!2d-72.98277488371956!3d-41.31892957927055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961826d9e51662c9%3A0xdb2c8ca0b72f3a14!2sHotel%20Bellavista!5e0!3m2!1ses-419!2scl!4v1657668346240!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="px-4"
                ></iframe>
              </div>
            </div>
            <div class="grid">
              <div class="col-6">
                <h3>Fiesta de Gala – Hotel Cabaña del Lago, Puerto Varas</h3>
                <p>
                  La “Fiesta de las Máscaras” de la Convención tendrá lugar en
                  el salón Club House del Hotel Cabaña del Lago a partir de las
                  20:00 hrs.
                </p>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.793046060879!2d-72.98323818371969!3d-41.31336557927104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618272843b74dad%3A0xeec2fc6e149b1e3e!2sHotel%20Caba%C3%B1a%20del%20Lago!5e0!3m2!1ses-419!2scl!4v1657668119349!5m2!1ses-419!2scl"
                  width="100%"
                  height="220rem"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="px-4"
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
          <AccordionTab header="Hoteleria">
            <p>Convenios en desarrollo…</p>
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
