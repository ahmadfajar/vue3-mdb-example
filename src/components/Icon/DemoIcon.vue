<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-4">
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home_work"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="4k"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="4k_outlined"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="account_circle_outlined"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="settings_outlined"
            size="64"/>
        </div>
      </div>
    </div>
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3">
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            :spin="isSpin"
            icon="rotate_right"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            :pulse="isPulse"
            icon="rotate_right"
            size="64"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home_work"
            size="64"
            flip="horizontal"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home_work"
            size="64"
            flip="vertical"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home_work"
            size="64"
            flip="both"/>
        </div>
      </div>
    </div>
    <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3">
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home"
            size="64"
            rotate="90"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home"
            size="64"
            rotate="180"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIcon
            icon="home"
            size="64"
            rotate="270"/>
        </div>
      </div>
      <div class="col">
        <div class="p-2 bg-light">
          <BsIconToggle
            icon="lock_outlined"
            toggle-icon="lock"
            size="64"
            v-model="isToggle"/>
        </div>
      </div>
    </div>
    <div class="row row-cols-5 mt-4">
      <div class="col">
        <div class="form-check form-switch">
          <input
            id="flexSwitchCheck1"
            v-model="isSpin"
            class="form-check-input"
            role="switch"
            type="checkbox"/>
          <label
            class="form-check-label"
            for="flexSwitchCheck1">Spin {{ isSpin ? 'OFF' : 'ON' }}</label>
        </div>
      </div>
      <div class="col">
        <div class="form-check form-switch">
          <input
            id="flexSwitchCheck2"
            v-model="isPulse"
            class="form-check-input"
            role="switch"
            type="checkbox"/>
          <label
            class="form-check-label"
            for="flexSwitchCheck2">Pulse {{ isPulse ? 'OFF' : 'ON' }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { BsIcon, BsIconToggle } from '../../../../vue-mdbootstrap/src/components/Icon'
import { ref } from 'vue'

const isToggle = ref(false)
const isSpin = ref(false)
const isPulse = ref(false)
</script>

<style scoped>

</style>
