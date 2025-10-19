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
          <BsIcon flip="horizontal" icon="home_work" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon flip="vertical" icon="home_work" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon flip="both" icon="home_work" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon filled icon="home_rounded" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon filled icon="home_rounded" rotate="90" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home" rotate="180" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIcon icon="home" rotate="270" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsToggleIcon
            v-model="isToggle"
            icon="lock_sharp"
            toggle-icon="lock_open_sharp"
            size="64"
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
          checked-icon
          class="mt-2 align-self-start"
          color="primary-color-dark"
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
          checked-icon
          class="mt-2 align-self-start"
          color="primary-color-dark"
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
          <BsIconFontawesome icon="house" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="house" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="envelope" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="envelope" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="user" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="user" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="cart-shopping" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome flip="horizontal" icon="cart-shopping" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome flip="vertical" icon="cart-shopping" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome flip="both" icon="cart-shopping" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="truck" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="truck" rotate="90" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="truck" rotate="180" variant="regular" size="64" />
        </div>
      </div>
      <div class="col mt-4">
        <div class="p-4 bg-grey-200 rounded-3">
          <BsIconFontawesome icon="truck" rotate="270" variant="regular" size="64" />
        </div>
      </div>
    </div>
    <h3 class="mt-4">Animation</h3>
    <div class="row row-cols-auto">
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconFontawesome :spin="isSpin2" icon="sun" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconFontawesome :spin="isSpin2" icon="spinner" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isSpin2"
          :value="true"
          checked-icon
          class="mt-2 align-self-start"
          color="primary-color-dark"
          inset-outlined
        >
          Spin {{ isSpin2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconFontawesome :pulse="isPulse2" icon="compass" variant="regular" size="64" />
            </div>
          </div>
          <div class="col mt-4">
            <div class="p-4 bg-grey-200 rounded-3">
              <BsIconFontawesome :pulse="isPulse2" icon="spinner" size="64" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isPulse2"
          :value="true"
          checked-icon
          class="mt-2 align-self-start"
          color="primary-color-dark"
          inset-outlined
        >
          Pulse {{ isPulse2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isToggle = ref(false);
const isSpin1 = ref(false);
const isPulse1 = ref(false);
const isSpin2 = ref(false);
const isPulse2 = ref(false);
</script>
