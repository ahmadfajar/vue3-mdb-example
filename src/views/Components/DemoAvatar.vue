<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-3">
      <div class="d-flex justify-content-center">
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
          circle>
          <icon-three-circle height="30" width="30"/>
        </BsAvatar>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Animation
    </h2>
    <DemoBlock class="mt-3">
      <div class="d-flex justify-content-center">
        <div class="m-2" style="width: 120px">
          <div class="d-flex justify-content-center">
            <BsAvatar
              v-model:icon-spin="isSpin"
              class="bg-deep-orange darken-3 text-white"
              icon="cached"
              size="56"
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
              size="56"
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
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconThreeCircle } from '@/sharedApi'

const isSpin = ref(false)
const isPulse = ref(false)
</script>

<style scoped>
</style>
