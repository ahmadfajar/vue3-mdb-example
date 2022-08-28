<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="d-flex justify-content-center mt-4">
      <BsAvatar
        class="bg-deep-orange darken-3 text-white m-2"
        icon="people_alt"/>
      <BsAvatar
        class="bg-teal text-white m-2"
        icon="folder_shared"
        rounded/>
      <BsAvatar
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
        class="m-2 bg-teal"
        circle/>
      <BsAvatar
        class="bg-grey-600 text-white m-2"
        style="font-size: 150%"
        text="BS"
        circle/>
      <BsAvatar
        class="bg-dark-blue text-white m-2"
        style="font-size: 150%"
        circle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="md-svg-inline"
          viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
        </svg>
      </BsAvatar>
    </div>
    <h2 class="mt-5">
      Animation
    </h2>
    <BsDivider/>
    <div class="d-flex justify-content-center mt-4">
      <div class="m-2" style="width: 120px">
        <div class="d-flex justify-content-center">
          <BsAvatar
            v-model:icon-spin="isSpin"
            class="bg-deep-orange darken-3 text-white"
            icon="cached"
            circle/>
        </div>
        <div class="form-check form-switch mt-3">
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
      <div class="m-2" style="width: 120px">
        <div class="d-flex justify-content-center">
          <BsAvatar
            v-model:icon-pulse="isPulse"
            class="bg-teal text-white"
            icon="rotate_right"
            circle/>
        </div>
        <div class="form-check form-switch mt-3">
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
import { ref } from 'vue'

const isSpin = ref(false)
const isPulse = ref(false)
</script>

<style scoped>
</style>
