<script setup>
import Menubar from 'primevue/menubar'
import { ref } from 'vue';

const items = ref([
    {
        label: 'Inicio',
    },
    {
        label: 'Programa',
    },
    {
        label: 'Informaciones',
    },
    {
        label: 'Comisiones',
        items: [
            {
                label: 'Gobierno Judicial'
            },
            {
                label: 'Infancia y Familia'
            },
            {
                label: 'Jubilación Digna y Fraterna'
            }
        ]
    },
    {
        label: 'Documentos',
        items: [
            {
                label: ''
            }
        ]
    },
    {
        label: 'Contacto',
    },

])
</script>
<template>
    <Menubar :model="items" />
</template>
<style scoped lang="scss">
.p-menubar {
    display: flex;
    justify-content: end;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%);
    opacity: 0.7;
    border: none;
    padding: 1rem 0;
}

::v-deep(.p-menubar-root-list) {
    padding-right: 3rem !important;
    display: flex;
    font-size: large !important;
}
</style>