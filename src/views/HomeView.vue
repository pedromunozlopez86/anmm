<script setup>
import { ref } from "@vue/reactivity";

import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
const items = ref([
  {
    label: "Miércoles 30",
    to: "/",
  },
  {
    label: "Jueves 01",
    to: "/",
  },
  {
    label: "Viernes 02",
    to: "/",
  },
  {
    label: "Sábado 03",
    to: "/",
  },
]);
const tabs = ref([
  {
    title: "Header I",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Header II",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.",
  },
  {
    title: "Header III",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
  },
]);
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
        <TabPanel header="Miércoles 30">
          <p>hola1</p>
        </TabPanel>
        <TabPanel header="Jueves 01">
          <p>hola2</p>
        </TabPanel>
        <TabPanel header="Viernes 02">
          <p>hola3</p>
        </TabPanel>
        <TabPanel header="Sábado 03">
          <p>hola4</p>
        </TabPanel>
      </TabView>
    </div>
  </main>
</template>
<style>
#programa {
  background-color: var(--azul);
  /* height: 80vh; */
}
.tabview1 {
  background-color: red !important;
}
</style>
