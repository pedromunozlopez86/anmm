<script setup>
import { onMounted, ref } from "vue";
import { useInscripcionStore } from "../stores/inscripcion";
import TitleContent from "../components/TitleContent.vue";
import TablaInscripciones from "../components/TablaInscripciones.vue";
import ModalInfoInscripcion from "../components/ModalInfoInscripcion.vue";

const store = useInscripcionStore();

const isLoading = ref(false);
const propInscripcion = ref();
const showInfoModal = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await getData();
  isLoading.value = false;
});

async function getData() {
  await store.getInscripciones();
}

function openModalInfo(inscripcion) {
  propInscripcion.value = inscripcion;
  showInfoModal.value = true;
}

function closeModalInfo() {
  showInfoModal.value = false;
  propInscripcion.value = null;
}
</script>
<template>
  <div>
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
  </div>
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
</style>
