<template>
  <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2">
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home_work"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="4k"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="4k_outlined"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="account_circle_outlined"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="settings_outlined"
          size="64"
        />
      </div>
    </div>
  </div>
  <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3">
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="rotate_right"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="rotate_right"
          size="64"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home_work"
          size="64"
          flip="horizontal"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home_work"
          size="64"
          flip="vertical"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home_work"
          size="64"
          flip="both"
        />
      </div>
    </div>
  </div>
  <div class="row row-cols-xl-5 row-cols-md-4 row-cols-sm-2 mt-3">
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home"
          size="64"
          rotate="90"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home"
          size="64"
          rotate="180"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIcon
          icon="home"
          size="64"
          rotate="270"
        />
      </div>
    </div>
    <div class="col">
      <div class="p-2 bg-light">
        <BsIconToggle
          icon="lock_outlined"
          toggle-icon="lock"
          size="64"
          v-model="isToggle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BsIcon, BsIconToggle } from '../../../../vue-mdbootstrap/src/components/Icon'
import { ref } from 'vue'

const isToggle = ref(false)
</script>

<style scoped>

</style>
