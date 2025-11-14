<script setup lang="ts">
import { ref } from 'vue';

const isToggle = ref(false);
const isSpin1 = ref(false);
const isPulse1 = ref(false);
const isSpin2 = ref(false);
const isPulse2 = ref(false);
const iconSize = 64;
</script>

<template>
  <div class="docs-body mx-auto">
    <h2>Google Material Symbol</h2>
    <BsDivider />
    <div class="row row-cols-auto gy-4 mt-2">
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="home_work_filled" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="4k_filled" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="4k" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="account_circle_filled" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="account_circle" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="settings" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" flip="horizontal" icon="home_work" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" flip="vertical" icon="home_work" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" flip="both" icon="home_work" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" filled icon="home_rounded" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" filled icon="home_rounded" rotate="90" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="home" rotate="180" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsIcon :size="iconSize" icon="home" rotate="270" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsToggleIcon
            v-model="isToggle"
            :size="iconSize"
            icon="lock_sharp"
            toggle-icon="lock_open_sharp"
          />
        </div>
      </div>
    </div>

    <h3 class="mt-4">Animation</h3>
    <div class="row row-cols-auto mt-4">
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsIcon :size="iconSize" :spin="isSpin1" icon="sync" />
            </div>
          </div>
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsSpinnerIcon :size="iconSize" :spin="isSpin1" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isSpin1"
          :value="true"
          checked-icon
          class="mt-2 self-start"
          inset-outlined
        >
          Spin {{ isSpin1 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsIcon :pulse="isPulse1" :size="iconSize" icon="refresh" />
            </div>
          </div>
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsSpinnerIcon :pulse="isPulse1" :size="iconSize" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isPulse1"
          :value="true"
          checked-icon
          class="mt-2 self-start"
          inset-outlined
        >
          Pulse {{ isPulse1 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>

    <h2 class="mt-5">Font Awesome</h2>
    <BsDivider />
    <div class="row row-cols-auto gy-4 mt-2">
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="house" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="house" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="envelope" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="envelope" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="user" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="user" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="cart-shopping" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="horizontal" icon="cart-shopping" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="vertical" icon="cart-shopping" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="both" icon="cart-shopping" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="truck" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="truck" rotate="90" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="truck" rotate="180" variant="regular" />
        </div>
      </div>
      <div class="col">
        <div class="p-4 bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="truck" rotate="270" variant="regular" />
        </div>
      </div>
    </div>

    <h3 class="mt-4">Animation</h3>
    <div class="row row-cols-auto mt-4">
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsFontawesomeIcon :size="iconSize" :spin="isSpin2" icon="sun" />
            </div>
          </div>
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsFontawesomeIcon :size="iconSize" :spin="isSpin2" icon="spinner" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isSpin2"
          :value="true"
          checked-icon
          class="mt-2 self-start"
          inset-outlined
        >
          Spin {{ isSpin2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsFontawesomeIcon
                :pulse="isPulse2"
                :size="iconSize"
                icon="compass"
                variant="regular"
              />
            </div>
          </div>
          <div class="col">
            <div class="p-4 bg-gray-200 rounded">
              <BsFontawesomeIcon :pulse="isPulse2" :size="iconSize" icon="spinner" />
            </div>
          </div>
        </div>
        <BsSwitch
          v-model="isPulse2"
          :value="true"
          checked-icon
          class="mt-2 self-start"
          inset-outlined
        >
          Pulse {{ isPulse2 ? 'OFF' : 'ON' }}
        </BsSwitch>
      </div>
    </div>
  </div>
</template>
