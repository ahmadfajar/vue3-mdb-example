<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const drinks: TInputOptionItem[] = [
  {
    value: 'tea',
    label: 'Tea',
  },
  {
    value: 'coffee',
    label: 'Coffee',
  },
  {
    value: 'beer',
    label: 'Beer',
  },
];

const weathers: TInputOptionItem[] = [
  {
    value: 'sunny',
    label: 'Sunny',
    icon: 'wb_sunny_outlined',
    iconSize: 26,
  },
  {
    value: 'rain',
    label: 'Rain',
    icon: 'rainy_outlined',
    iconSize: 26,
  },
  {
    value: 'heavy-rain',
    label: 'Heavy Rain',
    icon: 'thunderstorm',
    iconSize: 26,
  },
];

const selectedDrink = ref<string>();
const favoriteDrinks = ref<string[]>([]);
const selectedWeather = ref<string>();
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle"> What are you drinking? </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Normal State </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedDrink" :items="drinks" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Readonly State </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedDrink" :items="drinks" readonly />
        </div>
      </div>
      <div class="row">
        <label class="col-md-3 col-xl-2 col-form-label"> Disabled State </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedDrink" :items="drinks" disabled />
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Multiple Selection</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle"> What is your favorites drink? </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label"> My favorites are </label>
        <div class="col-md">
          <BsToggleButton v-model="favoriteDrinks" :items="drinks" color="primary" multiple />
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle"> How is the weather today? </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Rounded </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedWeather" :items="weathers" color="primary" rounded>
            <template #icon="item">
              <BsIconSvg
                :icon="(item?.value === selectedWeather ? 'check' : item?.icon) as string"
              />
            </template>
          </BsToggleButton>
        </div>
      </div>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Elevated </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedWeather" :items="weathers" raised />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Tonal </label>
        <div class="col-md">
          <BsToggleButton v-model="selectedWeather" :items="weathers" icon-position="right" tonal />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-md-3 col-xl-2 col-form-label"> Outlined </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedWeather"
            :items="weathers"
            color="success"
            icon-position="right"
            outlined
          />
        </div>
      </div>
    </DemoBlock>
  </div>
</template>
