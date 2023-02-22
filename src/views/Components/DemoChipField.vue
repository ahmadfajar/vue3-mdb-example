<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField
            v-model="chip1"
            floating-label>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip2"
            placeholder="Add Tags..."
            floating-label>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip3"
            floating-label
            filled>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip4"
            filled
            floating-label
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip5"
            floating-label
            outlined>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip6"
            floating-label
            outlined
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Field State
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField
            v-model="chip7state"
            readonly
            floating-label>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip7state"
            disabled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip7state"
            readonly
            floating-label
            filled>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip7state"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip7state"
            readonly
            floating-label
            outlined>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip7state"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Clearable Field
    </h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip8"
            class="mb-4"
            clear-button
            floating-label
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip8"
            class="mb-4"
            clear-button
            filled
            floating-label
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip8"
            class="mb-2"
            clear-button
            floating-label
            outlined
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col-lg-10 col-xl-8 mt-2">
          Field values: <span class="md-fw-semibold">{{ chip8 }}</span>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Deletable Chip
    </h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip8"
            class="mb-4"
            chip-deletable
            clear-button
            floating-label
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip8"
            class="mb-4"
            chip-deletable
            clear-button
            filled
            floating-label
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip9"
            class="mb-2"
            chip-deletable
            clear-button
            floating-label
            outlined
            placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col-lg-10 col-xl-8 mt-2">
          Field value: <span class="md-fw-semibold">{{ chip9 }}</span>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chip1 = ref('')
const chip2 = ref('')
const chip3 = ref('')
const chip4 = ref([])
const chip5 = ref([])
const chip6 = ref([])
const chip7state = ref(['VueJs', 'Component'])
const chip8 = ref([])
const chip9 = ref('')
</script>

<style scoped>
</style>
