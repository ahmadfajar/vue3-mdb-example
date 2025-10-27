<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div v-if="name !== 'dark' && name !== 'light'" class="col">
            <BsCheckbox v-model="checkboxColors" :color="name" :value="name">
              Using color: <span class="font-weight-semibold">{{ name }}</span>
            </BsCheckbox>
          </div>
        </template>
      </div>
      <p class="mt-3">
        Value: <b>{{ checkboxColors }}</b>
      </p>
    </DemoBlock>

    <h2 class="mt-5">Checkbox Group</h2>
    <DemoBlock class="mt-4">
      <BsCheckboxGroup v-model="selectedFavoriteColors" :items="favoriteColors" class="g-2">
        <label class="col-12">Field Label</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Values: <b>{{ selectedFavoriteColors }}</b>
      </div>
      <BsDivider class="my-3" />
      <BsCheckboxGroup v-model="selectedFavoriteFruits" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">Field Label</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Values: <b>{{ selectedFavoriteFruits }}</b>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Multi Column</h2>
    <DemoBlock class="mt-4">
      <BsCheckboxGroup v-model="selectedItems" :items="dummyItems" column="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Values: <b>{{ selectedItems }}</b>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { contextColors } from '@shares/themeColors.ts';

const checkboxColors = ref([]);
const selectedFavoriteColors = ref([]);
const selectedFavoriteFruits = ref([]);
const favoriteColors = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];
const favoriteFruits = [
  { value: 'Orange', label: 'Orange' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Pineapple', label: 'Pineapple' },
  { value: 'Grape', label: 'Grape' },
];
const selectedItems = ref([]);
const dummyItems = [
  { value: 1, label: 'Item 1', color: 'default' },
  { value: 2, label: 'Item 2', color: 'primary' },
  { value: 3, label: 'Item 3', color: 'secondary' },
  { value: 4, label: 'Item 4', color: 'success' },
  { value: 5, label: 'Item 5', disabled: true },
  { value: 6, label: 'Item 6', color: 'info' },
];
</script>
