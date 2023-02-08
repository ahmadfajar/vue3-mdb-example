<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle">
        What are you drinking?
      </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label">
          Normal State
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedDrink"
            :items="drinks"/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-md-3 col-xl-2 col-form-label">
          Readonly State
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedDrink"
            :items="drinks"
            color="default-color"
            readonly/>
        </div>
      </div>
      <div class="row">
        <label class="col-md-3 col-xl-2 col-form-label">
          Disabled State
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedDrink"
            :items="drinks"
            disabled/>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Multiple Selection
    </h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle">
        What is your favorites drink?
      </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label">
          My favorites are
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="favoriteDrinks"
            :items="drinks"
            color="default-color"
            multiple/>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Toggle Button Styles
    </h2>
    <DemoBlock class="mt-4">
      <BsCardContent type="subtitle">
        How is the weather today?
      </BsCardContent>
      <div class="row my-3">
        <label class="col-md-3 col-xl-2 col-form-label">
          Raised style
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedWeather"
            :items="weathers"
            color="primary"
            raised/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-md-3 col-xl-2 col-form-label">
          Outlined style
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedWeather"
            :items="weathers"
            color="indigo"
            icon-position="right"
            outlined/>
        </div>
      </div>
      <div class="row">
        <label class="col-md-3 col-xl-2 col-form-label">
          Flat style
        </label>
        <div class="col-md">
          <BsToggleButton
            v-model="selectedWeather"
            :items="weathers"
            color="red"
            flat/>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drinks = [{
  value: 'tea',
  label: 'Tea'
}, {
  value: 'coffee',
  label: 'Coffee'
}, {
  value: 'beer',
  label: 'Beer'
}]

const weathers = [{
  value: 'sunny',
  label: 'Sunny',
  icon: 'wb_sunny',
  iconSize: 26
}, {
  value: 'rain',
  label: 'Rain',
  icon: 'wb_cloudy',
  iconSize: 26
}, {
  value: 'heavy-rain',
  label: 'Heavy Rain',
  icon: 'thunderstorm',
  iconSize: 26
}]

const selectedDrink = ref<string | null>(null)
const favoriteDrinks = ref<Array<string>>([])
const selectedWeather = ref<string | null>(null)
</script>

<style scoped>
</style>
