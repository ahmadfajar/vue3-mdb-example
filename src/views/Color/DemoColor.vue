<template>
  <div class="docs-body container-lg mx-auto">
    <h2>MDBootstrap Colors</h2>
    <ColorPalette palette="bootstrap" class="pt-2" />
    <h2 class="mt-5">Material Colors</h2>
    <ColorPalette palette="material" class="pt-2" />
    <h2 class="mt-5">Grey Colors</h2>
    <ColorPalette palette="grays" class="pt-2" />
    <h2 class="mt-5">Full Colors</h2>
    <ColorPalette palette="fullColor" class="pt-2" />
  </div>
</template>

<script lang="ts" setup>
import ColorPalette from '@/views/Color/ColorPalette.vue';
</script>

<style scoped></style>
