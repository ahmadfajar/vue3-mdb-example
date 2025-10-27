<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch1" :value="true">
        Enable power meter : <b>{{ switch1 }}</b>
      </BsSwitch>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-4">Default</h4>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch1" :value="true">
        Enable power meter : <b>{{ switch1 }}</b>
      </BsSwitch>
      <h6 class="mt-3">Switch States</h6>
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <div class="col">
          <BsSwitch v-model="switch2" readonly value="off"> Readonly </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch2" readonly value="on"> Readonly :: Selected </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled value="off"> Disabled </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled value="on"> Disabled :: Selected </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Inset</h4>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch4" :value="true" inset-mode>
        Enable power meter : <b>{{ switch4 }}</b>
      </BsSwitch>
      <h6 class="mt-3">Switch States</h6>
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <div class="col">
          <BsSwitch v-model="switch2" inset-mode readonly value="off"> Readonly </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch2" inset-mode readonly value="on">
            Readonly :: Selected
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled inset-mode value="off"> Disabled </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled inset-mode value="on">
            Disabled :: Selected
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Inset Outlined</h4>
    <DemoBlock class="mt-4">
      <BsSwitch v-model="switch5" :value="true" inset-outlined>
        Enable power meter : <b>{{ switch5 }}</b>
      </BsSwitch>
      <h6 class="mt-3">Switch States</h6>
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <div class="col">
          <BsSwitch v-model="switch2" inset-outlined readonly value="off"> Readonly </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch2" inset-outlined readonly value="on">
            Readonly :: Selected
          </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled inset-outlined value="off"> Disabled </BsSwitch>
        </div>
        <div class="col">
          <BsSwitch v-model="switch3" disabled inset-outlined value="on">
            Disabled :: Selected
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Color Variants</h2>
    <h4 class="mt-4">Switch - Default</h4>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2 gy-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div v-if="name !== 'dark' && name !== 'light'" class="col">
            <BsSwitch
              v-model="switchColor1"
              :color="name"
              :value="name"
              label-class="col-10 col-lg-8"
              label-position="left"
            >
              Color: <span class="fw-semibold">{{ name }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Selected values: <span class="fw-semibold">{{ switchColor1 }}</span>
      </p>
    </DemoBlock>
    <h4 class="mt-5">Switch - Inset</h4>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div v-if="name !== 'dark' && name !== 'light'" class="col">
            <BsSwitch
              v-model="switchColor2"
              :color="name"
              :value="name"
              inset-mode
              label-class="col-10 col-lg-8"
              label-position="left"
            >
              Color: <span class="fw-semibold">{{ name }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Selected values: <span class="fw-semibold">{{ switchColor2 }}</span>
      </p>
    </DemoBlock>
    <h4 class="mt-5">Switch - Inset Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <div v-if="name !== 'dark' && name !== 'light'" class="col">
            <BsSwitch
              v-model="switchColor3"
              :color="name"
              :value="name"
              inset-outlined
              label-class="col-10 col-lg-8"
              label-position="left"
            >
              Color: <span class="fw-semibold">{{ name }}</span>
            </BsSwitch>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Selected values: <span class="fw-semibold">{{ switchColor3 }}</span>
      </p>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { contextColors } from '@shares/themeColors.ts';

const switch1 = ref();
const switch2 = ref('on');
const switch3 = ref('on');
const switch4 = ref();
const switch5 = ref();
const switchColor1 = ref([]);
const switchColor2 = ref([]);
const switchColor3 = ref([]);
</script>
