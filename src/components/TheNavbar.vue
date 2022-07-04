<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu'

const router = useRouter()

const menu = ref();

const items = ref([])

const menuComisiones = [
    {
        label: 'Gobierno Judicial'
    },
    {
        label: 'Infancia y Familia'
    },
    {
        label: 'Jubilación Digna y Fraterna'
    },
]

const menuDocumentos = [
    {
        label: 'Menu 1'
    },
    {
        label: 'Menu 2'
    },
    {
        label: 'Menu 3'
    },
]


function toggleMenuComisiones(event) {
    items.value = menuComisiones
    menu.value.toggle(event);
}
function toggleMenuDocumentos(event) {
    items.value = menuDocumentos
    menu.value.toggle(event);
    console.log(menu.value);
}

</script>
<template>
    <ul class="flex gap-5 pr-8 mt-0 list-none text-lg text-marino justify-content-end align-items-center navbar">
        <li>
            <RouterLink :to="{ name: 'Inicio' }">Inicio</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'Programa' }">Programa</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'Informaciones' }">Informaciones</RouterLink>
        </li>
        <li>
            <a @click="toggleMenuComisiones" class="cursor-pointer">
                Comisiones
            </a>
        </li>
        <li>
            <a @click="toggleMenuDocumentos" class="cursor-pointer">
                Documentos
            </a>
        </li>
        <li>
            <RouterLink :to="{ name: 'Contacto' }">Contacto</RouterLink>
        </li>
    </ul>
    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
</template>
<style scoped lang="scss">
.navbar {
    height: 4.5rem;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%);
    opacity: 0.7;
}

a {
    color: var(--azul-marino);
}

a:hover {
    border-bottom: 3px solid var(--azul-marino);
    transition: all .1s;
}

.router-link-exact-active {
    border-bottom: 3px solid var(--azul-marino);
    font-weight: 900;
    transition: all .1s;
}
</style>