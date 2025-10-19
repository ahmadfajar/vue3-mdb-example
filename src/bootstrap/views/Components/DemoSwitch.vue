<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch1" :value="true">
        Enable power meter : <b>{{ switch1 }}</b>
      </BsSwitch>
      <h6 class="mt-3">Switch States</h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch2" readonly value="off"> Readonly </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch2" readonly value="on"> Readonly :: Selected </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch3" disabled value="off"> Disabled </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch3" disabled value="on"> Disabled :: Selected </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Switch Color Variants</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="color in colorVariants" :key="color">
          <div class="col mb-2">
            <BsSwitch
              v-model="switchColor"
              :color="color"
              :value="color"
              label-class="col-10 col-lg-8"
              label-position="left"
            >
              Color: <span class="fw-semibold">{{ color }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Value: <span class="fw-semibold">{{ switchColor }}</span>
      </p>
    </DemoBlock>
    <h2 class="mt-5">Inset Mode</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col mb-2 mb-lg-0">
          <BsSwitch v-model="switch4" :value="true" color="default-color" inset-mode>
            Enable power meter : <b>{{ switch4 }}</b>
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch
            v-model="switch4"
            :value="true"
            checked-icon
            checkoff-icon
            color="default-color"
            inset-mode
          >
            With Icon
          </BsSwitch>
        </div>
      </div>
      <h6 class="mt-3">Switch States</h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch2" color="default-color" inset-mode readonly value="off">
            Readonly :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch2" color="default-color" inset-mode readonly value="on">
            Readonly :: ON
          </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch3" disabled inset-mode value="off"> Disabled :: OFF </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch3" disabled inset-mode value="on"> Disabled :: ON </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Inset Outlined</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col mb-2 mb-lg-0">
          <BsSwitch v-model="switch5" :value="true" color="default-color" inset-outlined>
            Enable power meter : <b>{{ switch5 }}</b>
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch
            v-model="switch5"
            :value="true"
            checked-icon
            color="default-color"
            inset-outlined
          >
            With Icon
          </BsSwitch>
        </div>
      </div>
      <h6 class="mt-3">Switch States</h6>
      <div class="row">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch2" color="default-color" inset-outlined readonly value="off">
            Readonly :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch2" color="default-color" inset-outlined readonly value="on">
            Readonly :: ON
          </BsSwitch>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <BsSwitch v-model="switch3" disabled inset-outlined value="off">
            Disabled :: OFF
          </BsSwitch>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <BsSwitch v-model="switch3" disabled inset-outlined value="on"> Disabled :: ON </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Inset Color Variants</h2>
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
              label-position="left"
            >
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

<script setup lang="ts">
import { ref } from 'vue';
import { colorVariants } from '@shares/sharedApi';

const switch1 = ref();
const switch2 = ref('on');
const switch3 = ref('on');
const switch4 = ref();
const switch5 = ref();
const switchColor = ref([]);
const switchColor1 = ref([]);
</script>
