<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

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
            <RouterLink :to="{ name: 'Comisiones' }">Comisiones</RouterLink>
        </li>
        <li>
            Documentos
        </li>
        <li>
            <RouterLink :to="{ name: 'Contacto' }">Contacto</RouterLink>
        </li>
    </ul>
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

.router-link-active {
    border-bottom: 3px solid var(--azul-marino);
    font-weight: 900;
    transition: all .1s;
}
</style>