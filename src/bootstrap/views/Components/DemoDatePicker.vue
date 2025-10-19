<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <h4 class="mt-3">Default Orientation</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <BsDatePicker v-model="picker1" class="md-shadow" />
      </div>
    </div>
    <h4 class="mt-5">Landscape Orientation</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <BsDatePicker v-model="picker2" class="md-shadow" landscape />
      </div>
    </div>
    <h2 class="mt-5">Picker Selection Modes</h2>
    <h4 class="mt-3">Date selection mode (default)</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsDatePicker v-model="picker1" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="md-fw-semibold">{{ picker1 }}</span>
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-5">DateTime selection mode</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsDatePicker v-model="picker3" mode="datetime" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="md-fw-semibold">{{ picker3 }}</span>
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-5">Month selection mode</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsDatePicker v-model="picker4" mode="month" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="md-fw-semibold">{{ picker4 }}</span>
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-5">Year selection mode</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsDatePicker v-model="picker5" mode="year" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="md-fw-semibold">{{ picker5 }}</span>
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-5">Time selection mode</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsDatePicker v-model="picker6" mode="time" class="md-shadow" />
          <div class="my-3">
            Output value: <span class="md-fw-semibold">{{ picker6 }}</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mt-5">Color Style</h2>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <BsDatePicker
          v-model="picker7"
          header-color="orange"
          surface-color="elegant-color"
          mode="datetime"
          class="shadow"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker1 = ref<string>();
const picker2 = ref<string>();
const picker3 = ref<string>();
const picker4 = ref<string>();
const picker5 = ref<string>();
const picker6 = ref<string>();
const picker7 = ref<string>();
</script>
