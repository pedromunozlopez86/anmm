import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: HomeView,
    },
    {
      path: "/programa",
      name: "Programa",
      component: () => import("@/views/Programa.vue"),
    },
    {
      path: "/informaciones",
      name: "Informaciones",
      component: () => import("@/views/Informaciones.vue"),
    },
    {
      path: "/comisiones",
      name: "Comisiones",
      component: () => import("@/views/Comisiones.vue"),
      children: [
        {
          path: "gobierno-judicial",
          name: "GobiernoJudicial",
          component: () => import("@/views/comisiones/GobiernoJudicial.vue"),
        },
        {
          path: "infancia-familia",
          name: "InfanciaFamilia",
          component: () => import("@/views/comisiones/InfanciaFamilia.vue"),
        },
        {
          path: "jubilacion-digna",
          name: "JubilacionDigna",
          component: () => import("@/views/comisiones/JubilacionDigna.vue"),
        },
      ],
    },
    {
      path: "/contacto",
      name: "Contacto",
      component: () => import("@/views/Contacto.vue"),
    },
    {
      path: "/documentos",
      name: "Documentos",
      component: () => import("@/views/Documentos.vue"),
    },
    {
      path: "/inscripciones",
      name: "Inscripciones",
      component: () => import("@/views/Inscripciones.vue"),
    },
    {
      path: "/inscripciones/formulario",
      name: "FormularioInscripcion",
      component: () => import("@/views/FormularioInscripcion.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/views/Error404.vue"),
    },
    {
      path: "/admin",
      name: "Sitio Interno",
      component: () => import("@/views/Admin.vue"),
    },
  ],
});

export default router;
