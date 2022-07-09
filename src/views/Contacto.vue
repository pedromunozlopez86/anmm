<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button';
import TitleContent from '../components/TitleContent.vue';

</script>
<template>
    <section id="hero-section"></section>
    <TitleContent title="Formulario Contacto" title-icon="pi-envelope" class="-mt-8 mb-4">
        <div class="grid mt-3">
            <div class="col-12 md:col-6">
                <div class="p-inputgroup">
                    <span class="p-float-label">
                        <InputText id="nombre" type="text" v-model="nombre" />
                        <label for="nombre">Nombre</label>
                    </span>
                </div>
            </div>
            <div class="col-12 md:col-6">
                <div class="p-inputgroup">
                    <span class="p-float-label">
                        <InputText id="apellido" type="text" v-model="apellido" />
                        <label for="apellido">Apellido</label>
                    </span>
                </div>
            </div>
            <div class="col-12 md:col-6">
                <div class="p-inputgroup">
                    <span class="p-float-label">
                        <InputText id="correo" type="email" v-model="correo" />
                        <label for="correo">Correo</label>
                    </span>
                </div>
            </div>
            <div class="col-12 md:col-6">
                <div class="p-inputgroup">
                    <span class="p-float-label">
                        <InputText id="telefono" type="text" v-model="telefono" />
                        <label for="telefono">Teléfono</label>
                    </span>
                </div>
            </div>
            <div class="col-12">
                <div class="p-inputgroup">
                    <span class="p-float-label">
                        <Textarea id="comentario" rows="5" cols="120" v-model="comentario" />
                        <label for="comentario">Comentario</label>
                    </span>
                </div>
            </div>
            <div class="col-12 flex justify-content-end">
                <Button label="Enviar" class="px-3" />
            </div>
        </div>
    </TitleContent>
</template>


<style lang="scss" scoped>
#hero-section {
    background-image: url("@/assets/img/hero-contacto.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-top: -5rem;
    height: 26.5625rem;
}

.p-button {
    background-color: var(--azul-marino);
}

:deep(.p-button:hover) {
    background-color: var(--azul) !important;
}

:deep(.p-inputgroup) {
    margin-top: 1rem;
}
</style>