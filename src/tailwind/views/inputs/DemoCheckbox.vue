<script setup lang="ts">
import { ref } from 'vue';
import { contextColors } from '@shares/themeColors.ts';

const checkbox1 = ref();
const checkboxColors = ref([]);
const selectedFavoriteColors = ref([]);
const selectedFavoriteFruits1 = ref([]);
const selectedFavoriteFruits2 = ref([]);
const selectedItems1 = ref([]);
const selectedItems2 = ref([]);
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
const dummyItems1 = [
  { value: 1, label: 'Item 1' },
  { value: 2, label: 'Item 2' },
  { value: 3, label: 'Item 3' },
  { value: 4, label: 'Item 4' },
  { value: 5, label: 'Item 5', disabled: true },
  { value: 6, label: 'Item 6' },
];
const dummyItems2 = [
  { value: 'default', label: 'Default', color: 'default' },
  { value: 'primary', label: 'Primary', color: 'primary' },
  { value: 'success', label: 'Success', color: 'success' },
  { value: 'warning', label: 'Warning', color: 'warning' },
  { value: 'danger', label: 'Danger', disabled: true },
  { value: 'info', label: 'Info', color: 'info' },
];
</script>

<template>
  <div class="docs-body mx-auto mb-6">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="mb-3">
        <BsCheckbox v-model="checkbox1" value="accepted"> Accept the terms and use </BsCheckbox>
      </div>
      <p>
        Value: <b>{{ checkbox1 }}</b>
      </p>
    </DemoBlock>

    <h2 class="mt-5">Colors</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div class="col">
            <BsCheckbox v-model="checkboxColors" :color="name" :value="name">
              Using color: <span class="font-weight-semibold">{{ name }}</span>
            </BsCheckbox>
          </div>
        </template>
      </div>
      <p class="mt-3">
        Values: <b>{{ checkboxColors }}</b>
      </p>
    </DemoBlock>

    <h2 class="mt-5">Checkbox Group</h2>
    <h4 class="mt-4">Examples</h4>
    <DemoBlock class="mt-4">
      <BsCheckboxGroup v-model="selectedFavoriteColors" :items="favoriteColors" class="g-2">
        <label class="col-12">Select colors</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Selected values: <b>{{ selectedFavoriteColors }}</b>
      </div>
      <BsDivider class="my-6!" />
      <BsCheckboxGroup v-model="selectedFavoriteFruits1" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">Select fruits</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Selected values: <b>{{ selectedFavoriteFruits1 }}</b>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Multi Column</h4>
    <DemoBlock class="mt-4">
      <BsCheckboxGroup v-model="selectedItems1" :items="dummyItems1" column="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Selected values: <b>{{ selectedItems1 }}</b>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Colors</h4>
    <DemoBlock class="mt-4">
      <BsCheckboxGroup
        v-model="selectedFavoriteFruits2"
        :items="favoriteFruits"
        class="g-2"
        color="primary"
        column="2"
      >
        <label class="col-md-2 col-form-label">Single Color</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Selected values: <b>{{ selectedFavoriteFruits2 }}</b>
      </div>
      <BsDivider class="my-6!" />
      <BsCheckboxGroup v-model="selectedItems2" :items="dummyItems2" column="3">
        <label class="col-md-2 col-form-label">Multi Colors</label>
      </BsCheckboxGroup>
      <div class="mt-3">
        Selected values: <b>{{ selectedItems2 }}</b>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Custom Checkbox</h2>
    <DemoBlock class="mt-4">
      <div class="mb-3">
        <BsCheckbox v-model="checkbox1" class="rounded-checkbox" value="accepted">
          Accept the terms and use
        </BsCheckbox>
      </div>
      <p>
        Value: <b>{{ checkbox1 }}</b>
      </p>
    </DemoBlock>
  </div>
</template>

<style lang="scss">
.md-checkbox {
  &.rounded-checkbox {
    --md-checkbox-border-radius: 50%;
    --md-checkbox-size: 24px;
    --md-checkbox-checkmark-height: 12px;
    --md-checkbox-checkmark-width: 6px;
    --md-checkbox-checkmark-pos-x: 7px;
    --md-checkbox-checkmark-pos-y: 3px;
  }
}
</style>
