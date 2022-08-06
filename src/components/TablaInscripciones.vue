<script setup>
import { ref } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { format } from '@fiquu/cl-rut'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const emit = defineEmits(['mostrar-info'])

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

function mostrarInfo(inscripcion) {
  emit('mostrar-info', inscripcion)
}
</script>
<template>
  <DataTable
    :paginator="true"
    class="p-datatable-customers"
    :rows="5"
    :rowHover="true"
    v-model:filters="filters"
    filterDisplay="menu"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[5, 10, 15, 25]"
    currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} registros"
    :globalFilterFields="['rut', 'nombreCompleto', 'correo', 'telefono']"
    responsiveLayout="scroll"
    v-bind="$attrs"
  >
    <template #header>
      <div class="flex justify-content-between align-items-center">
        <h4 class="m-0">Inscripciones</h4>
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="filters['global'].value"
            placeholder="Filtrar"
          />
        </div>
      </div>
    </template>
    <template #empty> Aun no hay inscripciones. </template>
    <template #loading>
      <section
        class="flex flex-column gap-3 justify-items-center align-items-center"
      >
        <span class="text-white">Cargando los datos, por favor espera.</span>
        <i
          class="pi pi-spin pi-spinner"
          style="font-size: 2rem; color: white"
        ></i>
      </section>
    </template>

    <Column field="rut" header="RUT" sortable>
      <template #body="{ data }">
        {{ format(data.rut) }}
      </template>
    </Column>
    <Column field="nombreCompleto" header="Nombre" sortable />
    <Column field="correo" header="Correo" sortable />
    <Column field="telefono" header="Teléfono" sortable />
    <Column
      field="vieneAcompanante"
      header="Acompañante?"
      sortable
      class="text-center"
    >
      <template #body="{ data }">
        {{ data?.vieneAcompanante ? 'Si' : 'No' }}
      </template>
    </Column>
    <Column header="Más Info" class="text-center">
      <template #body="{ data }">
        <Button
          class="p-button-rounded p-button-outlined"
          icon="pi pi-info"
          @click="mostrarInfo(data)"
        />
      </template>
    </Column>
  </DataTable>
</template>
<style lang="scss" scoped>
::v-deep(.p-paginator) {
  .p-paginator-current {
    margin-left: auto;
  }
}

::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-customers) {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}

:deep(.p-inputgroup) {
  margin-top: 1rem;
}
</style>
