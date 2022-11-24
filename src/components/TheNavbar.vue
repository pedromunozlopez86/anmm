<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Menu from "primevue/menu";

const router = useRouter();

const menu = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const items = ref([
  {
    label: "Inicio",
    to: { name: "Inicio" },
  },
  {
    label: "Programa",
    to: { name: "Programa" },
  },
  {
    label: "Informaciones",
    to: { name: "Informaciones" },
  },
  {
    label: "Comisiones",
    to: { name: "GobiernoJudicial" },
  },
  {
    label: "Documentos",
    items: [
      {
        to: "/",
        label: "Programa ANMM 2022",
        command: () => {
          window.open(
            "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/PROGRAMA%20COVENCION%20NACIONAL%20DE%20MAG%20ISTRADOS%20PUERTO%20VARAS%20AN%CC%83O%202022.pdf?alt=media&token=a8f488ed-fb82-450f-85c2-4d4c907f4e89"
          );
        },
      },
      {
        to: "",
        label: "Permiso Corte Suprema",
        command: () => {
          window.open(
            "https://firebasestorage.googleapis.com/v0/b/anmm-637de.appspot.com/o/PERMISO%20CORTE%20SUPREMA%20ANMM%202022.pdf?alt=media&token=ba6e7d06-7411-4ece-91ba-369ec99a6754"
          );
        },
      },
    ],
  },
  {
    label: "Inscripciones",
    to: { name: "Inscripciones" },
  },
  {
    label: "Contacto",
    to: { name: "Contacto" },
  },
]);
</script>
<template>
  <div class="grid">
    <div
      class="col-12 -mb-8 md:hidden flex align-items-center justify-content-center"
    >
      <div class="justify-content-center z-5">
        <router-link to="/" class="logo-nav">
          <img
            src="@/assets/img/logo-navbar.png"
            alt=""
            height="50"
            class="mt-2"
          />
        </router-link>
      </div>
    </div>
    <Menubar class="w-full" :model="items">
      <template #start>
        <div class="ml-6 w-full">
          <div class="logo">
            <img src="@/assets/img/logo-navbar.png" alt="" class="logo-img" />
          </div>
        </div>
      </template>
      <template #item="{ item }">
        <div class="text-lg py-3" id="lista">
          <div v-if="item.items" class="otro">
            <Button
              type="button"
              label="Documentos"
              @click="toggle"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              class="p-button-text p-button-plain"
              id="docu-menu"
            />
            <Menu
              id="overlay_menu"
              ref="menu"
              :model="item.items"
              :popup="true"
            />
          </div>

          <RouterLink v-else :to="item?.to">{{ item.label }}</RouterLink>
        </div>
      </template>
      <template>
        <div class="pr-8">
          <Button
            label="Contacto"
            @click="$router.push({ name: 'Contacto' })"
          />
        </div>
      </template>
    </Menubar>
  </div>
</template>
<style scoped lang="scss">
.logo-nav {
  text-decoration: none;
}
.p-menubar {
  height: 5rem;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  opacity: 0.7;
}

:deep(.p-menubar-root-list) {
  margin-left: auto;
  display: flex;
  gap: 1rem;
  padding: 0;
}

:deep(.p-menubar-end) {
  margin: 0 2.2rem;
}

.p-menuitem {
  color: var(--azul-marino);
}

a {
  color: var(--azul-marino);
}

a:hover {
  border-bottom: 3px solid var(--azul-marino);
  transition: all 0.1s;
}

.router-link-exact-active {
  border-bottom: 3px solid var(--azul-marino);
  font-weight: 900;
  transition: all 0.1s;
}

.p-button {
  background-color: var(--azul-marino);
}

:deep(.p-button:hover) {
  background-color: var(--azul) !important;
}

.logo {
  height: 20.625rem;
  width: 21.875rem;
  background-color: var(--azul-oscuro);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.logo-img {
  margin-top: 4.5rem;
  height: 6.25rem;
  // filter: invert(100%);
}

@media screen and (max-width: 960px) {
  :deep(.p-menubar-root-list) {
    padding-left: 3rem !important;
    gap: 0;
  }

  .p-menubar {
    justify-content: space-between;
  }

  :deep(.p-menubar-end) {
    margin-right: 2rem;
  }

  :deep(.p-menubar-start) {
    display: none;
  }

  :deep(.p-menubar-button) {
    margin-left: 3rem;
  }
}
</style>
<style scooped>
#docu-menu {
  background-color: transparent !important ;
  color: var(--azul-marino);
  font-weight: 400;
  font-size: large;
}
.router-link-exact-active[data-v-30300f61] {
  text-decoration: none;
  border: 0;
}

a[data-v-30300f61]:hover {
  text-decoration: none;
  border: 0;
}
</style>
