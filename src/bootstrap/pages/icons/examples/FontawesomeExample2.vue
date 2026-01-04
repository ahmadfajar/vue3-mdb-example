<script setup lang="ts">
const icons = ['house', 'circle-user', 'envelope', 'gift'];
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Solid</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" class="text-purple" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Regular</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" class="text-primary" variant="regular" />
        </div>
      </div>
    </div>
  </div>
</template>
