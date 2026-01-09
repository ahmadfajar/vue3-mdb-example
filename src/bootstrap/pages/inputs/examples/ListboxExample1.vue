<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { BsStore, type TDataSource } from 'vue-mdbootstrap';

const fieldValue1 = ref<string>();
const countryState1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onBeforeUnmount(() => {
  countryState1.proxy.destroy();
});
</script>

<template>
  <div class="w-full" style="max-width: 400px">
    <BsListbox
      v-model="fieldValue1"
      :data-source="countryState1"
      {$checkbox_color}
      {$checkbox_enabled}
      {$checkbox_position}
      {$multiple}
      {$states}
    />
    <p class="mt-2">
      Selected value:
      <span class="font-weight-semibold">{{ fieldValue1 }}</span>
    </p>
  </div>
</template>
