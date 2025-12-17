<script setup lang="ts">
import { ref } from 'vue';
import type { TRadioInputProps } from 'vue-mdbootstrap';

const selectedItem = ref();
const dummyItems = [
  { value: 'default', label: 'Default', color: 'default' },
  { value: 'primary', label: 'Primary', color: 'primary' },
  { value: 'success', label: 'Success', color: 'success' },
  { value: 'warning', label: 'Warning', color: 'warning' },
  { value: 'danger', label: 'Danger', disabled: true },
  { value: 'info', label: 'Info', color: 'info' },
] satisfies TRadioInputProps[];
</script>

<template>
  <BsRadioGroup v-model="selectedItem" :items="dummyItems" column="2">
    <label class="col-form-label md:w-35">Multiple Colors</label>
  </BsRadioGroup>
  <div class="mt-3">
    Selected value: <b>{{ selectedItem }}</b>
  </div>
</template>
