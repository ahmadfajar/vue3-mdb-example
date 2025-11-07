<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Context Colors</h2>
    <ColorPalette class="pt-2" palette="contextual" />
    <h2 class="mt-5">Main Colors</h2>
    <ColorPalette class="pt-2" palette="primary" />
    <h2 class="mt-5">Material Colors</h2>
    <ColorPalette class="pt-2" palette="material" />
    <h2 class="mt-5">Full Colors</h2>
    <ColorPalette class="pt-2" palette="fullColor" />
    <h4 class="mt-5">Accent Colors</h4>
    <ColorPalette class="pt-2" palette="accentColor" />
  </div>
</template>

<script setup lang="ts">
import ColorPalette from '@bs/views/references/ColorPalette.vue';
</script>
