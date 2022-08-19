<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Demo Ripple</h2>
    <BsDivider/>
    <div class="d-flex justify-content-center mt-4">
      <BsRipple
        centered
        class="d-flex justify-content-center align-items-center bg-white border rounded me-3"
        style="max-width:150px; height:150px">
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        class="d-flex justify-content-center align-items-center bg-primary text-white border rounded me-3"
        style="max-width:150px; height:150px">
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        class="d-flex justify-content-center align-items-center bg-success text-white border rounded"
        style="max-width:150px; height:150px">
        <b>Click Me</b>
      </BsRipple>
    </div>
    <h2 class="mt-5">
      Demo Overlay
    </h2>
    <BsDivider/>
    <div class="position-relative d-flex justify-content-center mt-4 py-5">
      <button class="btn btn-primary" @click="showOverlay = !showOverlay">
        Show Overlay
      </button>
      <BsOverlay :show="showOverlay" @click="hideOverlay"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showOverlay = ref(false)
function hideOverlay () {
  showOverlay.value = false
}
</script>

<style scoped>
</style>
