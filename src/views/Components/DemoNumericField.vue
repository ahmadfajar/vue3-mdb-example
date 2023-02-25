<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 pt-3">
          <BsNumericField
            v-model="numField1"
            class="mb-4"
            floating-label>
            <label>Field Label</label>
          </BsNumericField>
          <BsNumericField
            v-model="numField1"
            class="mb-4"
            readonly
            floating-label>
            <label>State Readonly</label>
          </BsNumericField>
          <BsNumericField
            v-model="numField1"
            class="mb-4"
            disabled
            floating-label>
            <label>State Disabled</label>
          </BsNumericField>
          <div class="mb-2">
            Real value: <span class="md-fw-semibold">{{ numField1 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Play ground
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4">
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField1"
            step="0.2"
            action-button
            action-button-placement="left"
            floating-label>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField1"
            placeholder="Placeholder"
            :spin-button="false"
            action-button
            action-button-placement="both"
            prepend-icon="person"
            floating-label>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col-12">
          Real value: <span class="md-fw-semibold">{{ numField1 }}</span>
        </div>
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField2"
            :spin-button="false"
            action-button
            action-button-placement="both"
            floating-label
            filled>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField2"
            :spin-button="false"
            action-button
            action-button-placement="both"
            prepend-icon="person"
            filled
            floating-label
            placeholder="Placeholder">
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField3"
            :spin-button="false"
            action-button
            action-button-placement="both"
            floating-label
            outlined>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col-12 col-lg-6">
          <BsNumericField
            v-model="numField3"
            :spin-button="false"
            action-button
            action-button-placement="both"
            prepend-icon="person"
            floating-label
            outlined>
            <label>Field Label</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const numField1 = ref<number>()
const numField2 = ref<number>()
const numField3 = ref<number>()

</script>
