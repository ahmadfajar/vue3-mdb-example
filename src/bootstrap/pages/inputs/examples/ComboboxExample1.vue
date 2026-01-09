<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { BsStore, type TDataSource } from 'vue-mdbootstrap';

const fieldValue1 = ref<string>();
const fieldValue2 = ref<string>();

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

const countryState2: TDataSource = {
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
  countryState2.proxy.destroy();
});
</script>

<template>
  <div class="mb-3">
    <BsCombobox
      v-model="fieldValue1"
      :data-source="countryState1"
      {$checkbox_color}
      {$checkbox_position}
      {$chip_color}
      {$chip_enabled}
      {$chip_outlined}
      {$chip_pill}
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$multiple}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
    >
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </BsCombobox>
  </div>
  <BsDivider />
  <div class="mt-3">
    <BsCombobox
      v-model="fieldValue2"
      :data-source="countryState2"
      {$checkbox_color}
      {$checkbox_position}
      {$chip_color}
      {$chip_enabled}
      {$chip_outlined}
      {$chip_pill}
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$multiple}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
      floating-label
    >
      <label>Floating Label</label>
    </BsCombobox>
  </div>
</template>
