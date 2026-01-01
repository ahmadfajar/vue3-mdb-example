<script setup lang="ts">
import { ref } from 'vue';
import type { TCheckboxInputProps } from 'vue-mdbootstrap';

const selectedFruits = ref([]);
const favoriteFruits = [
  { value: 'Orange', label: 'Orange' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Pineapple', label: 'Pineapple' },
  { value: 'Grape', label: 'Grape' },
] satisfies TCheckboxInputProps[];
</script>

<template>
  <BsCheckboxGroup v-model="selectedFruits" :items="favoriteFruits">
    <label class="col-form-label">Select fruits</label>
  </BsCheckboxGroup>
  <div class="mt-3">
    Selected values: <b>{{ selectedFruits }}</b>
  </div>
</template>
