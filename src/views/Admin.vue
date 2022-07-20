<script setup>
import { onMounted, reactive, ref } from "vue";
import InputText from "primevue/inputtext";
import TitleContent from "../components/TitleContent.vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import { FilterMatchMode, FilterOperator } from "primevue/api";
onMounted(() => {
  const getData = () => {
    console.log("get firestore");
  };
});

const bd = [
  {
    nombreCompleto: "peter",
    rut: "1111",
    telefono: "222",
    correo: "dsad@sdas.com",
    regional: "222",
    vieneAcompanante: false,
    acompanante: {
      nombre: "",
      rut: "",
      telefono: "",
      correo: "",
    },
    contactoEmergencia: {
      nombre: "",
      telefono: "",
    },
    restriccionAlimentaria: false,
    comentarioRestriccionAlimentaria: "",
    trasladoPuertoVaras: "",
    requiereTransporteHotel: false,
    requiereTrasladoCeremonia: false,
    incluyePaseo: false,
    incluyeFiesta: false,
    formaPago: "",
    cuotas: "",
    valorFinal: "",
  },
];

const selectedCustomers = ref();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  "country.name": {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  date: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  balance: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  status: {
    operator: FilterOperator.OR,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
// const customerService = ref(new CustomerService());
const loading = ref(false);
const representatives = [
  { name: "Amy Elsner", image: "amyelsner.png" },
  { name: "Anna Fali", image: "annafali.png" },
  { name: "Asiya Javayant", image: "asiyajavayant.png" },
  { name: "Bernardo Dominic", image: "bernardodominic.png" },
  { name: "Elwin Sharvill", image: "elwinsharvill.png" },
  { name: "Ioni Bowcher", image: "ionibowcher.png" },
  { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
  { name: "Onyama Limba", image: "onyamalimba.png" },
  { name: "Stephen Shaw", image: "stephenshaw.png" },
  { name: "XuXue Feng", image: "xuxuefeng.png" },
];
const statuses = ref([
  "unqualified",
  "qualified",
  "new",
  "negotiation",
  "renewal",
  "proposal",
]);
const formatDate = (value) => {
  return value.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
</script>
<template>
  <section id="hero-section"></section>
  <TitleContent title="Admin BD" title-icon="pi-server" class="-mt-8 mb-4">
    <div>
      <DataTable
        :value="bd"
        :paginator="true"
        class="p-datatable-customers"
        :rows="10"
        dataKey="id"
        :rowHover="true"
        v-model:selection="selectedCustomers"
        v-model:filters="filters"
        filterDisplay="menu"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="[
          'name',
          'country.name',
          'representative.name',
          'status',
        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-center align-items-center">
            <h5 class="m-0">Customers</h5>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Keyword Search"
              />
            </span>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>

        <Column
          field="nombreCompleto"
          header="Nombre"
          sortable
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.nombreCompleto }}
          </template>
        </Column>
        <Column field="rut" header="RUT" sortable="">
          <template #body="{ data }">
            {{ data.rut }}
          </template>
        </Column>
        <Column field="telefono" header="Teléfono" sortable="">
          <template #body="{ data }">
            {{ data.telefono }}
          </template>
        </Column>
        <Column field="correo" header="E-mail" sortable="">
          <template #body="{ data }">
            {{ data.correo }}
          </template>
        </Column>
        <Column field="vieneAcompanante" header="Acompañante?" sortable="">
          <template #body="{ data }">
            <p v-if="data.vieneAcompanante">SI</p>
            <p v-else>NO</p>
          </template>
        </Column>
        <Column field="correo" header="E-mail" sortable="">
          <template #body="{ data }">
            {{ data.correo }}
          </template>
        </Column>
        <!-- 
       <
        <Column
          header="Agent"
          sortable
          filterField="representative"
          sortField="representative.name"
          :showFilterMatchModes="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            <img
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              width="30"
              style="vertical-align: middle"
            />
            <span class="image-text">{{ data.representative.name }}</span>
          </template>
          <template #filter="{ filterModel }">
            <div class="mb-3 font-bold">Agent Picker</div>
            <MultiSelect
              v-model="filterModel.value"
              :options="representatives"
              optionLabel="name"
              placeholder="Any"
              class="p-column-filter"
            >
              <template #option="slotProps">
                <div class="p-multiselect-representative-option">
                  <img
                    src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                    width="30"
                    style="vertical-align: middle"
                  />
                  <span class="image-text">{{ slotProps.option.name }}</span>
                </div>
              </template>
            </MultiSelect>
          </template>
        </Column>
        <Column
          field="date"
          header="Date"
          sortable
          dataType="date"
          style="min-width: 8rem"
        >
          <template #body="{ data }">
            {{ formatDate(data.date) }}
          </template>
          <template #filter="{ filterModel }">
            <Calendar
              v-model="filterModel.value"
              dateFormat="mm/dd/yy"
              placeholder="mm/dd/yyyy"
            />
          </template>
        </Column>
        <Column
          field="balance"
          header="Balance"
          sortable
          dataType="numeric"
          style="min-width: 8rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.balance) }}
          </template>
          <template #filter="{ filterModel }">
            <InputNumber
              v-model="filterModel.value"
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </template>
        </Column>
        <Column
          field="status"
          header="Status"
          sortable
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            <span :class="'customer-badge status-' + data.status">{{
              data.status
            }}</span>
          </template>
          <template #filter="{ filterModel }">
            <Dropdown
              v-model="filterModel.value"
              :options="statuses"
              placeholder="Any"
              class="p-column-filter"
              :showClear="true"
            >
              <template #value="slotProps">
                <span :class="'customer-badge status-' + slotProps.value">{{
                  slotProps.value
                }}</span>
              </template>
              <template #option="slotProps">
                <span :class="'customer-badge status-' + slotProps.option">{{
                  slotProps.option
                }}</span>
              </template>
            </Dropdown>
          </template>
        </Column>
        <Column
          field="activity"
          header="Activity"
          sortable
          :showFilterMatchModes="false"
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            <ProgressBar :value="data.activity" :showValue="false" />
          </template>
          <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-3"></Slider>
            <div class="flex align-items-center justify-content-between px-2">
              <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
              <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
            </div>
          </template>
        </Column>
        <Column
          headerStyle="width: 4rem; text-align: center"
          bodyStyle="text-align: center; overflow: visible"
        >
          <template #body>
            <Button type="button" icon="pi pi-cog"></Button>
          </template>
        </Column> -->
      </DataTable>
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

img {
  vertical-align: middle;
}
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
