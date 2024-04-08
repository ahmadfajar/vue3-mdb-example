<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle" class="mb-4"> What are you drinking? </BsCardContent>
      <BsToggleField v-model="selectedDrink" :items="drinks" class="mb-4">
        <label class="col-md-3 col-xl-2 col-form-label"> Normal State </label>
      </BsToggleField>
      <BsToggleField
        v-model="selectedDrink"
        :items="drinks"
        class="mb-4"
        color="default-color"
        readonly
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Readonly State </label>
      </BsToggleField>
      <BsToggleField v-model="selectedDrink" :items="drinks" class="mb-2" disabled>
        <label class="col-md-3 col-xl-2 col-form-label"> Disabled State </label>
      </BsToggleField>
    </DemoBlock>
    <h2 class="mt-5">Multiple Selection</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle" class="mb-4"> What is your favorites drink? </BsCardContent>
      <BsToggleField
        v-model="favoriteDrinks"
        :items="drinks"
        class="mb-2"
        color="default-color"
        multiple
      >
        <label class="col-md-3 col-xl-2 col-form-label"> My favorites are </label>
      </BsToggleField>
    </DemoBlock>
    <h2 class="mt-5">Toggle Styles</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle" class="mb-4"> How is the weather today? </BsCardContent>
      <BsToggleField
        v-model="selectedWeather"
        :items="weathers"
        :pill="false"
        rounded
        class="mb-4"
        color="primary"
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Rounded style </label>
      </BsToggleField>
      <BsToggleField
        v-model="selectedWeather"
        :items="weathers"
        class="mb-4"
        color="primary"
        raised
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Raised style </label>
      </BsToggleField>
      <BsToggleField
        v-model="selectedWeather"
        :items="weathers"
        class="mb-4"
        color="indigo"
        icon-position="right"
        outlined
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Outlined style </label>
      </BsToggleField>
      <BsToggleField v-model="selectedWeather" :items="weathers" class="mb-2" color="red" flat>
        <label class="col-md-3 col-xl-2 col-form-label"> Flat style </label>
      </BsToggleField>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <bs-card-content type="subtitle" class="mb-4"> Persistent help text </bs-card-content>
      <bs-toggle-field
        v-model="todayWeather"
        :items="weathers"
        class="mb-4"
        color="primary"
        help-text="Select a weather for today"
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Weather Today </label>
      </bs-toggle-field>
      <bs-card-content type="subtitle" class="mb-4"> Non-persistent help text </bs-card-content>
      <bs-toggle-field
        v-model="favoriteDrink"
        :items="drinks"
        :persistent-help-text="false"
        color="primary"
        help-text="Select one of the options above as your favorite drink"
      >
        <label class="col-md-3 col-xl-2 col-form-label"> Favorite Drink </label>
      </bs-toggle-field>
    </DemoBlock>
    <h2 class="mt-5">Used With Other Input Controls</h2>
    <DemoBlock class="mt-4">
      <div class="mt-3" style="max-width: 700px">
        <BsTextField v-model="textField" class="mb-4" filled clear-button>
          <label class="col-md-4 col-xl-3 col-form-label">Your Name</label>
        </BsTextField>
        <bs-toggle-field
          v-model="favoriteDrink1"
          :items="drinks"
          class="mb-4"
          color="default-color"
        >
          <label class="col-md-4 col-xl-3 col-form-label"> Favorite Drink </label>
        </bs-toggle-field>
        <BsRadioGroup
          v-model="occupation"
          :items="occupations"
          :column="1"
          class="mb-3"
          color="default-color"
        >
          <label class="col-md-4 col-xl-3 col-form-label"> Occupation </label>
        </BsRadioGroup>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedDrink = ref<string>();
const favoriteDrinks = ref<Array<string>>([]);
const selectedWeather = ref<string>();
const todayWeather = ref<string>();
const favoriteDrink = ref<string>();
const favoriteDrink1 = ref<string>();
const textField = ref();
const occupation = ref();

const drinks = [
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

const weathers = [
  {
    value: 'sunny',
    label: 'Sunny',
    icon: 'wb_sunny',
    iconSize: 26,
  },
  {
    value: 'rain',
    label: 'Rain',
    icon: 'wb_cloudy',
    iconSize: 26,
  },
  {
    value: 'heavy-rain',
    label: 'Heavy Rain',
    icon: 'thunderstorm',
    iconSize: 26,
  },
];

const occupations = [
  { value: 'Computer and IT', label: 'Computer and IT' },
  { value: 'Scientists', label: 'Scientists and Research' },
  { value: 'Consultant', label: 'Consultant' },
  { value: 'Other', label: 'Other' },
];
</script>
