<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Google Material Symbol</h2>
    <BsDivider />
    <div class="row row-cols-auto">
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_work_filled" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="4k_filled" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="4k" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="account_circle_filled" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="account_circle" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="settings" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_work" size="64" flip="horizontal" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_work" size="64" flip="vertical" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_work" size="64" flip="both" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_rounded" filled size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home_rounded" filled size="64" rotate="90" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home" size="64" rotate="180" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home" size="64" rotate="270" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsToggleIcon
            icon="lock_sharp"
            toggle-icon="lock_open_sharp"
            size="64"
            v-model="isToggle"
          />
        </div>
      </div>
    </div>
    <h3 class="mt-4">Animation</h3>
    <div class="row row-cols-auto">
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIcon :spin="isSpin1" icon="sync" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconSpinner :spin="isSpin1" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isSpin1"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Spin {{ isSpin1 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIcon :pulse="isPulse1" icon="refresh" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconSpinner :pulse="isPulse1" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isPulse1"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Pulse {{ isPulse1 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>
    <h2 class="mt-5">Font Awesome</h2>
    <BsDivider />
    <div class="row row-cols-auto">
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="house" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="house" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="envelope" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="envelope" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="user" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="user" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="cart-shopping" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="cart-shopping" size="64" flip="horizontal" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="cart-shopping" size="64" flip="vertical" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="cart-shopping" size="64" flip="both" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="truck" size="64" variant="regular" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="truck" size="64" variant="regular" rotate="90" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="truck" size="64" variant="regular" rotate="180" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsFontAwesome icon="truck" size="64" variant="regular" rotate="270" />
        </div>
      </div>
    </div>
    <h3 class="mt-4">Animation</h3>
    <div class="row row-cols-auto">
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsFontAwesome :spin="isSpin2" icon="sun" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsFontAwesome :spin="isSpin2" icon="spinner" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isSpin2"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Spin {{ isSpin2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsFontAwesome :pulse="isPulse2" icon="compass" variant="regular" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsFontAwesome :pulse="isPulse2" icon="spinner" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isPulse2"
          :value="true"
          color="primary-color-dark"
          class="mt-2 align-self-start"
          checked-icon
          inset-outlined
        >
          Pulse {{ isPulse2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isToggle = ref(false);
const isSpin1 = ref(false);
const isPulse1 = ref(false);
const isSpin2 = ref(false);
const isPulse2 = ref(false);
</script>
