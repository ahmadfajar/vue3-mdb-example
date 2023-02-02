<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Demo Ripple</h2>
    <BsDivider/>
    <div class="d-flex justify-content-center mt-4">
      <BsRipple
        class="d-flex justify-content-center align-items-center text-bg-secondary border rounded me-3"
        style="max-width:150px; height:150px">
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        class="d-flex justify-content-center align-items-center text-bg-primary border rounded me-3"
        style="max-width:150px; height:150px">
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        class="d-flex justify-content-center align-items-center text-bg-success border rounded"
        style="max-width:150px; height:150px"
        centered>
        <b>Click Me</b>
      </BsRipple>
    </div>
    <h2 class="mt-5">
      Demo Overlay
    </h2>
    <BsDivider/>
    <div class="position-relative d-flex justify-content-center mt-4 py-5">
      <BsButton color="success" @click="showOverlay = !showOverlay">
        Show Overlay
      </BsButton>
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
