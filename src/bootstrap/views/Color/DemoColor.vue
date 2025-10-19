<template>
  <div class="docs-body container-lg mx-auto">
    <h2>MDBootstrap Colors</h2>
    <ColorPalette class="pt-2" palette="bootstrap" />
    <h2 class="mt-5">Material Colors</h2>
    <ColorPalette class="pt-2" palette="material" />
    <h2 class="mt-5">Grey Colors</h2>
    <ColorPalette class="pt-2" palette="grays" />
    <h2 class="mt-5">Full Colors</h2>
    <ColorPalette class="pt-2" palette="fullColor" />
  </div>
</template>

<script setup lang="ts">
import ColorPalette from '@bs/views/Color/ColorPalette.vue';
</script>
