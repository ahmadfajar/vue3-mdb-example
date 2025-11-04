<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="mb-3">
        <div class="col-form-label">Select an option:</div>
        <div v-for="idx in 3" :key="'option-' + idx">
          <BsRadio v-model="radio1" :value="idx"> Option {{ idx }} </BsRadio>
        </div>
      </div>
      <p>
        Value: <b>{{ radio1 }}</b>
      </p>
    </DemoBlock>

    <h2 class="mt-5">Colors</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div class="col">
            <BsRadio v-model="radio2" :color="name" :value="name">
              Using color: <span class="font-weight-semibold">{{ name }}</span>
            </BsRadio>
          </div>
        </template>
      </div>
      <p class="mt-3">
        Value: <b>{{ radio2 }}</b>
      </p>
    </DemoBlock>

    <h2 class="mt-5">Radio Group</h2>
    <h4 class="mt-4">Examples</h4>
    <DemoBlock class="mt-4">
      <BsRadioGroup v-model="selectedFavoriteColor" :items="favoriteColors" class="g-2">
        <label class="col-12">Field Label</label>
      </BsRadioGroup>
      <div class="mt-3">
        Selected value: <b>{{ selectedFavoriteColor }}</b>
      </div>
      <BsDivider class="my-3" />
      <BsRadioGroup v-model="selectedFavoriteFruit1" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">Select a fruit</label>
      </BsRadioGroup>
      <div class="mt-3">
        Selected value: <b>{{ selectedFavoriteFruit1 }}</b>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Multi Column</h4>
    <DemoBlock class="mt-4">
      <BsRadioGroup v-model="selectedItem1" :items="dummyItems1" column="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </BsRadioGroup>
      <div class="mt-3">
        Selected value: <b>{{ selectedItem1 }}</b>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Colors</h4>
    <DemoBlock class="mt-4">
      <BsRadioGroup
        v-model="selectedFavoriteFruit2"
        :items="favoriteFruits"
        class="g-2"
        color="primary"
        column="2"
      >
        <label class="col-md-2 col-form-label">Single Color</label>
      </BsRadioGroup>
      <div class="mt-3">
        Selected value: <b>{{ selectedFavoriteFruit2 }}</b>
      </div>
      <BsDivider class="my-3" />
      <BsRadioGroup v-model="selectedItem2" :items="dummyItems2" column="3">
        <label class="col-md-2 col-form-label">Multi Colors</label>
      </BsRadioGroup>
      <div class="mt-3">
        Selected value: <b>{{ selectedItem2 }}</b>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { contextColors } from '@shares/themeColors.ts';

const radio1 = ref();
const radio2 = ref();
const selectedFavoriteColor = ref();
const selectedFavoriteFruit1 = ref();
const selectedFavoriteFruit2 = ref();
const selectedItem1 = ref();
const selectedItem2 = ref();

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
