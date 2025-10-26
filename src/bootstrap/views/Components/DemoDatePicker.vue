<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <h4 class="mt-3">Default Orientation</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <BsDatePicker v-model="picker1" class="md-shadow" />
      </div>
    </div>
    <h4 class="mt-5">Landscape Orientation</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <BsDatePicker v-model="picker2" class="md-shadow" landscape />
      </div>
    </div>

    <h2 class="mt-5">Picker Selection Modes</h2>
    <h4 class="mt-3">Date (default)</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsDatePicker v-model="picker1" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="font-weight-semibold">{{ picker1 }}</span>
          </div>
        </div>
      </div>
    </div>

    <h4 class="mt-5">DateTime</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsDatePicker v-model="picker3" class="md-shadow" mode="datetime" />
          <div class="my-3">
            Output value: <span class="font-weight-semibold">{{ picker3 }}</span>
          </div>
        </div>
      </div>
    </div>

    <h4 class="mt-5">Month</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsDatePicker v-model="picker4" class="md-shadow" mode="month" />
          <div class="my-3">
            Output value: <span class="font-weight-semibold">{{ picker4 }}</span>
          </div>
        </div>
      </div>
    </div>

    <h4 class="mt-5">Year</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsDatePicker v-model="picker5" class="md-shadow" mode="year" />
          <div class="my-3">
            Output value: <span class="font-weight-semibold">{{ picker5 }}</span>
          </div>
        </div>
      </div>
    </div>

    <h4 class="mt-5">Time</h4>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsDatePicker v-model="picker6" class="md-shadow" mode="time" />
          <div class="my-3">
            Output value: <span class="font-weight-semibold">{{ picker6 }}</span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mt-5">Custom Color</h2>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <BsDatePicker
          v-model="picker7"
          button-color="light"
          class="shadow"
          header-color="bg-orange"
          mode="datetime"
          selected-color="warning"
          surface-class="bg-dark text-light"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const picker1 = ref<string>();
const picker2 = ref<string>();
const picker3 = ref<string>();
const picker4 = ref<string>();
const picker5 = ref<string>();
const picker6 = ref<string>();
const picker7 = ref<string>();
</script>
