<script setup>
defineProps({
    title: String,
    titleIcon: String
})

</script>
<template>
    <div class="grid px-5 py-5 w-9 m-auto bg-white shadow-3">
        <div class="col-12 flex justify-content-center align-items-center gap-2 font-bold text-3xl text-azul-oscuro">
            <i class="pi text-3xl font-bold" :class="titleIcon" />
            <span>{{ title }}</span>
        </div>
        <div class="col-12 px-3" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.text-azul-oscuro {
    color: var(--azul-oscuro) !important;
}
</style>