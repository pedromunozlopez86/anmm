<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const router = useRouter()

const menu = ref()

const items = ref([
  {
    label: 'Inicio',
    to: { name: 'Inicio' },
  },
  {
    label: 'Programa',
    to: { name: 'Programa' },
  },
  {
    label: 'Informaciones',
    to: { name: 'Informaciones' },
  },
  {
    label: 'Comisiones',
    to: { name: 'GobiernoJudicial' },
  },
  {
    label: 'Documentos',
    to: { name: 'Documentos' },
  },
  {
    label: 'Inscripciones',
    to: { name: 'Inscripciones' },
  },
])
</script>
<template>
  <div class="grid">
    <Menubar class="col-12" :model="items">
      <template #start>
        <div class="ml-6 w-full">
          <div class="logo">
            <img src="@/assets/img/logo-navbar.png" alt="" class="logo-img" />
          </div>
        </div>
      </template>
      <template #item="{ item }">
        <div class="text-lg py-3" id="lista">
          <RouterLink :to="item?.to">{{ item.label }}</RouterLink>
        </div>
      </template>
      <template #end>
        <Button label="Contacto" @click="$router.push({ name: 'Contacto' })" />
      </template>
    </Menubar>
  </div>
</template>
<style scoped lang="scss">
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
  filter: invert(100%);
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
