<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const imagenVista = computed(() => {
    switch (route.name) {
        case 'Inicio':
            return 'imagen-inicio'
    }
})

</script>
<template>
    <div class="imagen" :class="imagenVista">
    </div>
</template>


<style lang="scss" scoped>
.imagen {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 1024px;
    margin-top: -6rem;
}

.imagen-inicio {
    background-image: url('@/assets/img/image25.png');
}
</style>