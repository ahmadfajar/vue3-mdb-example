<script setup lang="ts">
import { ref } from 'vue';
import { BsArrayStore } from 'vue-mdbootstrap';

const fieldValue = ref<string>();
const panelOpen = ref(false);
const bornDate = ref<string>();
const dateOperator = ref<string>('gt');
const dateOperators = {
  proxy: new BsArrayStore(
    [
      { id: 'gt', name: 'Greater than' },
      { id: 'lt', name: 'Less than' },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'name', valueField: 'id' },
};

function doCustomSearch() {
  panelOpen.value = false;
  // do something here...
}
</script>

<template>
  <div class="w-full bg-indigo p-4 rounded">
    <BsSearchField
      v-model="fieldValue"
      :popover-open="panelOpen"
      advance-search
      class="mx-auto"
      dark-mode
      style="max-width: 480px"
      @close="panelOpen = false"
      @open="panelOpen = true"
    >
      <template #popover>
        <div class="p-3">
          <BsTextField v-model="fieldValue" floating-label>
            <label>Full Name</label>
          </BsTextField>
          <div class="row mt-3">
            <div class="col-4">
              <BsCombobox v-model="dateOperator" :data-source="dateOperators" floating-label />
            </div>
            <div class="col-8">
              <BsDateTimeField v-model="bornDate" clear-button floating-label>
                <label>Born Date</label>
              </BsDateTimeField>
            </div>
          </div>
          <div class="flex justify-end mt-3">
            <BsButton color="primary" @click="doCustomSearch()"> Search</BsButton>
          </div>
        </div>
      </template>
    </BsSearchField>
  </div>
</template>
