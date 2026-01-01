<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(false);
function hideOverlay() {
  showOverlay.value = false;
}
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Example</h2>
    <BsDivider />
    <div class="position-relative flex justify-center mt-5">
      <BsButton @click="showOverlay = !showOverlay"> Show Overlay </BsButton>
      <Teleport to="body">
        <BsOverlay :show="showOverlay" @click="hideOverlay" />
      </Teleport>
    </div>
  </div>
</template>
