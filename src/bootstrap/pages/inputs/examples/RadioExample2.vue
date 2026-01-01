<script setup lang="ts">
import { ref } from 'vue';
import type { TRadioInputProps } from 'vue-mdbootstrap';

const selectedFruit = ref();
const favoriteFruits = [
  { value: 'Orange', label: 'Orange' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Pineapple', label: 'Pineapple' },
  { value: 'Grape', label: 'Grape' },
] satisfies TRadioInputProps[];
</script>

<template>
  <BsRadioGroup v-model="selectedFruit" :items="favoriteFruits">
    <label class="col-form-label">Select a fruit</label>
  </BsRadioGroup>
  <div class="mt-3">
    Selected value: <b>{{ selectedFruit }}</b>
  </div>
</template>
