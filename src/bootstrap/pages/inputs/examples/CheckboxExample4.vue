<script setup lang="ts">
import { ref } from 'vue';
import type { TCheckboxInputProps } from 'vue-mdbootstrap';

const selectedItems = ref([]);
const dummyItems = [
  { value: 'default', label: 'Default', color: 'default' },
  { value: 'primary', label: 'Primary', color: 'primary' },
  { value: 'success', label: 'Success', color: 'success' },
  { value: 'warning', label: 'Warning', color: 'warning' },
  { value: 'danger', label: 'Danger', disabled: true },
  { value: 'info', label: 'Info', color: 'info' },
] satisfies TCheckboxInputProps[];
</script>

<template>
  <BsCheckboxGroup v-model="selectedItems" :items="dummyItems" column="2">
    <label class="col-form-label">Multiple Colors</label>
  </BsCheckboxGroup>
  <div class="mt-3">
    Selected values: <b>{{ selectedItems }}</b>
  </div>
</template>
