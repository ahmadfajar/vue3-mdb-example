<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch1" :value="true">
        Enable power meter : <b>{{ switch1 }}</b>
      </BsSwitch>
      <h6 class="mt-3">
        Switch States
      </h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch2"
            value="off"
            readonly>
            Readonly
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch2"
            value="on"
            readonly>
            Readonly :: Selected
          </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch3"
            value="off"
            disabled>
            Disabled
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch3"
            value="on"
            disabled>
            Disabled :: Selected
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Switch Color Variants
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="color in colorVariants" :key="color">
          <div class="col mb-2">
            <BsSwitch
              v-model="switchColor"
              :color="color"
              :value="color"
              label-class="col-10 col-lg-8"
              label-position="left">
              Color: <span class="fw-semibold">{{ color }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Value: <span class="fw-semibold">{{ switchColor }}</span>
      </p>
    </DemoBlock>
    <h2 class="mt-5">
      Inset Mode
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col mb-2 mb-lg-0">
          <BsSwitch
            v-model="switch4"
            :value="true"
            color="default-color"
            inset-mode>
            Enable power meter : <b>{{ switch4 }}</b>
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch
            v-model="switch4"
            :value="true"
            color="default-color"
            checkoff-icon
            checked-icon
            inset-mode>
            With Icon
          </BsSwitch>
        </div>
      </div>
      <h6 class="mt-3">
        Switch States
      </h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch2"
            value="off"
            color="default-color"
            inset-mode
            readonly>
            Readonly :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch2"
            value="on"
            color="default-color"
            inset-mode
            readonly>
            Readonly :: ON
          </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch3"
            value="off"
            inset-mode
            disabled>
            Disabled :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch3"
            value="on"
            inset-mode
            disabled>
            Disabled :: ON
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Inset Outlined
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col mb-2 mb-lg-0">
          <BsSwitch
            v-model="switch5"
            :value="true"
            color="default-color"
            inset-outlined>
            Enable power meter : <b>{{ switch5 }}</b>
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch
            v-model="switch5"
            :value="true"
            color="default-color"
            checked-icon
            inset-outlined>
            With Icon
          </BsSwitch>
        </div>
      </div>
      <h6 class="mt-3">
        Switch States
      </h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch2"
            value="off"
            color="default-color"
            inset-outlined
            readonly>
            Readonly :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch2"
            value="on"
            color="default-color"
            inset-outlined
            readonly>
            Readonly :: ON
          </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch
            v-model="switch3"
            value="off"
            inset-outlined
            disabled>
            Disabled :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch
            v-model="switch3"
            value="on"
            inset-outlined
            disabled>
            Disabled :: ON
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Inset Color Variants
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="color in colorVariants" :key="color">
          <div class="col mb-2">
            <BsSwitch
              v-model="switchColor1"
              :color="color"
              :value="color"
              inset-outlined
              label-class="col-10 col-lg-8"
              label-position="left">
              Color: <span class="fw-semibold">{{ color }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Value: <span class="fw-semibold">{{ switchColor1 }}</span>
      </p>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colorVariants } from '@/sharedApi'

const switch1 = ref()
const switch2 = ref('on')
const switch3 = ref('on')
const switch4 = ref()
const switch5 = ref()
const switchColor = ref([])
const switchColor1 = ref([])
</script>

<style scoped>
</style>
