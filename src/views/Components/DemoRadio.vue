<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="color in colorVariants" :key="color">
          <div class="col mb-2">
            <BsRadio
              v-model="radio1"
              :color="color"
              :value="color">
              Radio color: <span class="fw-semibold">{{ color }}</span>
            </BsRadio>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Value: <b>{{ radio1 }}</b>
      </p>
    </DemoBlock>
    <h2 class="mt-5">
      Radio Group
    </h2>
    <DemoBlock class="mt-4">
      <BsRadioGroup
        class="g-2"
        v-model="selectedFavoriteColors"
        :items="favoriteColors">
        <label class="col-12">Field Label</label>
      </BsRadioGroup>
      <div class="mt-2">
        Values: <b>{{ selectedFavoriteColors }}</b>
      </div>
      <BsDivider class="my-3"/>
      <BsRadioGroup v-model="selectedFavoriteFruits" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">Field Label</label>
      </BsRadioGroup>
      <div class="mt-2">
        Values: <b>{{ selectedFavoriteFruits }}</b>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Multi Column
    </h2>
    <DemoBlock class="mt-4">
      <BsRadioGroup
        v-model="selectedItem"
        :items="dummyItems"
        column="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </BsRadioGroup>
      <div class="mt-2">
        Values: <b>{{ selectedItem }}</b>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colorVariants } from '@/sharedApi'
import DemoBlock from '@/DemoBlock.vue'

const radio1 = ref()
const selectedFavoriteColors = ref()
const selectedFavoriteFruits = ref()
const favoriteColors = [
  { value: 'red', label: 'Red', color: 'red' },
  { value: 'green', label: 'Green', color: 'green' },
  { value: 'blue', label: 'Blue', color: 'blue' }
]
const favoriteFruits = [
  { value: 'Orange', label: 'Orange' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Pineapple', label: 'Pineapple' },
  { value: 'Grape', label: 'Grape' }
  // { value: 'Coconut', label: 'Coconut' }
]
const selectedItem = ref()
const dummyItems = [
  { value: 1, label: 'Item 1', color: 'default-color' },
  { value: 2, label: 'Item 2', color: 'blue' },
  { value: 3, label: 'Item 3', color: 'pink', disabled: true },
  { value: 4, label: 'Item 4', color: 'primary-color-dark' },
  { value: 5, label: 'Item 5', color: 'success' },
  { value: 6, label: 'Item 6', color: 'orange' }
]
</script>

<style scoped>
</style>
