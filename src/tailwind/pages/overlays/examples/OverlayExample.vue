<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(false);

function hideOverlay() {
  showOverlay.value = false;
}
</script>

<template>
  <BsButton @click="showOverlay = true"> Show Overlay </BsButton>
  <Teleport to="body">
    <BsOverlay :show="showOverlay" @click="hideOverlay" />
  </Teleport>
</template>
