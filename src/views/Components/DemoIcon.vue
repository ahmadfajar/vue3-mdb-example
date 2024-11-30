<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Google Material Symbol</h2>
    <BsDivider />
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-4 text-center">
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_work_filled" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="4k_filled" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="4k" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="account_circle" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="settings" size="64" />
        </div>
      </div>
    </div>
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3 text-center">
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon :spin="isSpin" icon="rotate_right" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon :pulse="isPulse" icon="rotate_right" size="64" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_work" size="64" flip="horizontal" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_work" size="64" flip="vertical" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_work" size="64" flip="both" />
        </div>
      </div>
    </div>
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3 text-center">
      <div class="col">
        <div class="d-flex justify-content-center bg-light" style="height: 80px">
          <BsIconSpinner :pulse="isPulse" :spin="isSpin" size="52" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_rounded" filled size="64" rotate="90" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home_rounded" size="64" rotate="180" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon icon="home" size="64" rotate="270" />
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsToggleIcon icon="lock_sharp" toggle-icon="lock" size="64" v-model="isToggle" />
        </div>
      </div>
    </div>
    <div class="row row-cols-5 mt-4 text-center">
      <div class="col">
        <BsSwitch
          v-model="isSpin"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Spin {{ isSpin ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <BsSwitch
          v-model="isPulse"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Pulse {{ isPulse ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isToggle = ref(false);
const isSpin = ref(false);
const isPulse = ref(false);
</script>
