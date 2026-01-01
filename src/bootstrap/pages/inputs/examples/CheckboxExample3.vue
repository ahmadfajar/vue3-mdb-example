<script setup lang="ts">
import { ref } from 'vue';
import type { TCheckboxInputProps } from 'vue-mdbootstrap';

const selectedFruits = ref([]);
const favoriteFruits = [
  { value: 'Orange', label: 'Orange' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Pineapple', label: 'Pineapple', disabled: true },
  { value: 'Grape', label: 'Grape' },
] satisfies TCheckboxInputProps[];
</script>

<template>
  <BsCheckboxGroup v-model="selectedFruits" :items="favoriteFruits" color="primary" column="2">
    <label class="col-form-label md:w-35">Single Color</label>
  </BsCheckboxGroup>
  <div class="mt-3">
    Selected values: <b>{{ selectedFruits }}</b>
  </div>
</template>
